pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t devops-autoapp-v2 .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying container...'
                // Safely stop/remove old container (ignore any error)
                bat 'docker stop devops-autoapp-v2 || exit /b 0'
                bat 'docker rm devops-autoapp-v2 || exit /b 0'
                // Run new container on port 7090
                bat 'docker run -d -p 7090:7090 --name devops-autoapp-v2 devops-autoapp-v2'
            }
        }
    }
}
