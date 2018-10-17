properties(
  [parameters(
      [string(
        defaultValue: '', description: 'Please add the image name for the deployment version you need', name: 'IMAGE_TAG', trim: true
      )]
  )]
)

def app, utils, canDeploy, canBuildImage
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

          canDeploy = env.IMAGE_TAG.asBoolean() || BRANCH_NAME in deployableBranches
          canBuildImage = !env.IMAGE_TAG.asBoolean() && BRANCH_NAME in deployableBranches
        }
      }
    }

    stage('Build image') {
      when {
        equals expected: true, actual: canBuildImage
      }

      steps {
        script {
          utils.addRevisionToImage()

          COMMIT = utils.getCommit()

          if (BRANCH_NAME in deployableBranches) {
            apiEnv = BRANCH_NAME
          } else {
            apiEnv = "development"
          }

          utils.dockerRegistry {
            app = docker.build("$imageName:$COMMIT", "--build-arg API_ENV=$apiEnv .")
          }
          utils.pushImage(app, ["$COMMIT", "$BRANCH_NAME", "$BRANCH_NAME-$BUILD_NUMBER"])
        }
      }
    }

    stage('Deploy') {
      when {
        equals expected: true, actual: canDeploy
      }

      steps {
        script {
          if (env.IMAGE_TAG) {
            TAG = env.IMAGE_TAG
          } else {
            TAG = "$BRANCH_NAME-$BUILD_NUMBER"
          }

          utils.updateHelmRelease("development-customer", platformChart , TAG, "preview", "development")
        }
      }
    }
  }
}