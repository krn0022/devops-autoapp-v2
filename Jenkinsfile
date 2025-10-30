pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Fetching source code from GitHub...'
                checkout scm
            }
        }

        stage('Build Backend Image') {
            steps {
                echo 'Building backend Docker image...'
                bat 'docker build -t devops-autoapp-backend ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                echo 'Building frontend Docker image...'
                bat 'docker build -t devops-autoapp-frontend ./Frontend'
            }
        }

        stage('Deploy Using Docker Compose') {
            steps {
                echo 'Deploying containers using Docker Compose...'
                bat 'docker-compose down'
                bat 'docker-compose up -d --build'
            }
        }
    }

    post {
        success {
            echo '✅ Build and Deployment completed successfully!'
        }
        failure {
            echo '❌ Build failed. Please check logs.'
        }
    }
}
