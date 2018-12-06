def app, utils
def imageName = 'gcr.io/hungerstation-configs/customer-website-frontend'
def deployableBranches = ["development", "master"]
def platformChart = "http://charts.hsips.net/charts/customer-website-frontend-0.1.0.tgz"

pipeline {
  agent {
    kubernetes {
      label 'jnlp-light'
      defaultContainer 'jnlp'
      yaml """
      spec:
        containers:
        - name: jnlp
          workingDir: '/root/'
          image: 'gcr.io/hungerstation-configs/jnlp'
          imagePullPolicy: 'Always'
          resources:
            requests:
              memory: '500M'
              cpu: '0.5'
          volumeMounts:
          - mountPath: /var/run/docker.sock
            name: docker-sock
          - mountPath: /usr/bin/docker
            name: docker
        volumes:
        - name: docker
          hostPath:
            path: /usr/bin/docker
        - name: docker-sock
          hostPath:
            path: /var/run/docker.sock
      """
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

          tempImageName = BRANCH_NAME.toLowerCase()

          if (BRANCH_NAME == 'master') {
            apiEnv = "production"
          }

          utils.dockerRegistry {
            app = docker.build("$tempImageName", "--build-arg API_ENV=$apiEnv -f Dockerfile.build .")
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
            sh "docker run --name $BRANCH_NAME $BRANCH_NAME /bin/true"
            sh "docker cp $BRANCH_NAME:/home/customer-website-frontend/build build"
            sh "docker rm $BRANCH_NAME"
            app = docker.build("$imageName:$COMMIT", ".")
          }

          utils.pushImage(app, ["$COMMIT", "$BRANCH_NAME", "$BRANCH_NAME-$BUILD_NUMBER"])
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
