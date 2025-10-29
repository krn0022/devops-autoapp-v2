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
                bat 'docker stop devops-autoapp-v2 || echo "No container to stop"'
                bat 'docker rm devops-autoapp-v2 || echo "No container to remove"'
                bat 'docker run -d -p 7090:7090 --name devops-autoapp-v2 devops-autoapp-v2'
            }
        }
    }
}
