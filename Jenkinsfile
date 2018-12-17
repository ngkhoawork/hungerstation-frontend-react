def image, utils, buildImage, commit
def imageName = 'gcr.io/hungerstation-configs/customer-website-frontend'
def buildImageName = 'gcr.io/hungerstation-configs/customer-website-frontend-build'
def deployableBranches = ["development", "master"]
def platformChart = "hungerstation/customer-website-frontend"

pipeline {
  agent {
    kubernetes {
      label 'jnlp-dind-light'
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

          commit = utils.getCommit()
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

          apiEnv = "staging"
          if (BRANCH_NAME == 'master') {
            apiEnv = "production"
          }

          buildImage = "$buildImageName:$BRANCH_NAME"
          utils.dockerRegistry {
            sh "docker build -t $buildImage --build-arg API_ENV=$apiEnv --target builder ."
          }
        }
      }
    }

    stage('Tests') {
      when {
        changeRequest()
      }

      parallel {

        stage('Lint') {
          steps {
            sh "docker run --rm $buildImage sh -c 'yarn && yarn lint'"
          }
        }

        stage('Translation') {
          steps {
            script {
              try {
                sh "./script/update-i18n-messages.sh"

                sh "git status"
                sh "git diff-files --quiet"
              } catch(exc) {
                def comment = pullRequest.comment('Translations are not up-to-date with Lokalise.')
              }
            }
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
          image = "$imageName:$commit"

          utils.dockerRegistry {
            sh "docker build -t $image --cache-from $buildImage ."
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
          utils.tagImageThenPush(image, ["$imageName:$commit", "$imageName:$BRANCH_NAME", "$imageName:$BRANCH_NAME-$BUILD_NUMBER"])
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
