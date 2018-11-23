properties(
  [parameters(
      [string(
        defaultValue: '', description: 'Please add the image name for the deployment version you need', name: 'IMAGE_TAG', trim: true
      )]
  )]
)

def app, utils
def imageName = 'gcr.io/hungerstation-configs/customer-website-frontend'
def deployableBranches = ["development"]
def platformChart = "http://charts.hsips.net/charts/customer-website-frontend-0.1.0.tgz"

pipeline {
  agent any

  options {
    timeout(time: 30, unit: 'MINUTES')
  }

  stages {
    stage('Initialize') {
      steps {
        deleteDir()
        checkout scm

        script {
          utils = load("./devops-works/jenkins-ci/utils.groovy")
          utils.setup() // Stop previous builds
        }
      }
    }

    stage('Build image') {
      when {
        expression { return !env.IMAGE_TAG.asBoolean() }
      }

      steps {
        script {
          utils.addRevisionToImage()

          COMMIT = utils.getCommit()

          apiEnv = "staging"
          // if (BRANCH_NAME in deployableBranches) {
          //   apiEnv = BRANCH_NAME
          // }

          utils.dockerRegistry {
            app = docker.build("$imageName:$COMMIT", "--build-arg API_ENV=$apiEnv .")
          }
        }
      }
    }

    stage('Test') {
      when {
        changeRequest()
      }

      steps {
        script {
          app.inside() {
            sh "npm i -D && npm run lint"
          }
        }
      }
    }

    stage('Push Image') {
      when {
        expression { return !env.IMAGE_TAG.asBoolean() && BRANCH_NAME in deployableBranches}
      }

      steps {
        script {
          utils.pushImage(app, ["$COMMIT", "$BRANCH_NAME", "$BRANCH_NAME-$BUILD_NUMBER"])
        }
      }
    }

    stage('Publish To Bucket') {
      when {
        expression { return params.IMAGE_TAG.asBoolean() || BRANCH_NAME == 'master' }
      }

      steps {
        script {
          if (params.IMAGE_TAG) {
            TAG = params.IMAGE_TAG
          } else {
            TAG = "$BRANCH_NAME-$BUILD_NUMBER"
          }

          credentialsId = "hungerstation-production"
          bucketName = "alpha.hungerstation.com"

          utils.dockerRegistry {
            sh "docker run --name $BRANCH_NAME $imageName:$TAG /bin/true"
            sh "docker cp $BRANCH_NAME:/home/customer-website-frontend/build build-files"
            sh "docker rm $BRANCH_NAME"
          }

          googleStorageUpload bucket: "gs://$bucketName", credentialsId: "$credentialsId", pathPrefix: 'build-files/', pattern: 'build-files/**/*'
        }
      }
    }

    stage('Deploy') {
      when {
        expression { return env.IMAGE_TAG.asBoolean() || BRANCH_NAME in deployableBranches}
      }

      steps {
        script {
          TAG = "$BRANCH_NAME-$BUILD_NUMBER"
          if (env.IMAGE_TAG) {
            TAG = env.IMAGE_TAG
          }

          utils.updateHelmRelease("development-customer", platformChart , TAG, "preview", "development")
        }
      }
    }
  }
}
