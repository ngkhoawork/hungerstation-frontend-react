def app, utils, buildImage
def imageName = 'gcr.io/hungerstation-configs/customer-website-frontend'
def buildImageName = 'gcr.io/hungerstation-configs/customer-website-frontend-build'
def deployableBranches = ["development", "master"]
def platformChart = "http://charts.hsips.net/charts/customer-website-frontend-0.1.0.tgz"

pipeline {
  agent {
    kubernetes {
      label 'jnlp-light'
      defaultContainer 'jnlp'
    }
  }

  parameters {
    string(
      defaultValue: '', description: 'Please add the image name for the deployment version you need', name: 'IMAGE_TAG', trim: true
    )
  }

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

    stage('Build node image') {
      when {
        expression { return !env.IMAGE_TAG.asBoolean() }
      }

      steps {
        script {
          utils.addRevisionToImage()

          COMMIT = utils.getCommit()

          apiEnv = "staging"
          if (BRANCH_NAME == 'master') {
            apiEnv = "production"
          }

          buildImageTag = "$buildImageName:$BRANCH_NAME"
          utils.dockerRegistry {
            buildImage = docker.build("$buildImageTag", "--build-arg API_ENV=$apiEnv -f Dockerfile.build .")
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
          buildImage.inside() {
            sh "yarn && yarn lint"
          }
        }
      }
    }

    stage('Build nginx image') {
      when {
        expression { return !env.IMAGE_TAG.asBoolean() && BRANCH_NAME in deployableBranches }
      }

      steps {
        script {
          utils.dockerRegistry {
            sh "docker run --name $BRANCH_NAME $buildImageTag /bin/true"
            sh "docker cp $BRANCH_NAME:/home/customer-website-frontend/build build"
            sh "docker rm $BRANCH_NAME"
            app = docker.build("$imageName:$COMMIT", ".")
          }
        }
      }
    }

    stage('Push Image') {
      when {
        expression { return !env.IMAGE_TAG.asBoolean() && BRANCH_NAME in deployableBranches }
      }

      steps {
        script {
          utils.pushImage(app, ["$COMMIT", "$BRANCH_NAME", "$BRANCH_NAME-$BUILD_NUMBER"])
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

          if (BRANCH_NAME == 'master') {
            utils.updateHelmRelease("production-customer", platformChart , TAG, "production", "customer")
          } else {
            utils.updateHelmRelease("development-customer", platformChart , TAG, "preview", "development")
          }
        }
      }
    }
  }
}
