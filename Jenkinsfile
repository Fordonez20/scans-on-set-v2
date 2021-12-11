pipeline {
    agent {
        label 'Build Agent'
    }
    
    tools {nodejs 'NodeJS 14.17.3'}
    
    stages {
        stage('Build') {
            steps {
                git branch: 'main', credentialsId: 'Jenkins-Webhook-ID', url: 'https://github.com/Fordonez20/scans-on-set-v2.git'
                sh 'npm install'
                sh 'npm -v'
                sh 'npm run build'

                
                sh 'bash /home/jenkins/runTransfer'
                sh 'bash /home/jenkins/runAnsiblePlaybook'

                sh 'echo "both scripts worked!"'
                
            }
        }

    }
}
