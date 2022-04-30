pipeline{
    agent{
        label "APIV1"
    }
    stages{
         stage("Up & Running"){
            steps{
                echo "[*]:configure platform before deploying docker container..."
                sh 'sudo docker rm -f ui || echo "Not Found"'
                sh 'sudo docker rmi ui:v1 || echo "Not Found"'
                sleep 2
            }
            post{
                failure{
                    echo "[*]:something went wrong on Up & Running Stage"
                }

            }
        }

        stage("Build"){
            steps{
                slackSend(channel: "back", message: "Starting The CICD operation of ui")
                sh 'sudo docker volume ls -qf dangling=true | sudo xargs -r docker volume rm'
                sh 'sudo docker ps -qf status=exited | sudo xargs --no-run-if-empty docker rm'
            }
            post{
                always{
                    echo "[*]:building image..."
                    echo "[*]:this may take a few momment plz be patient ..."
                }
                success{
                    sh 'sudo docker-compose build --no-cache'
                    echo "[*]:image built without any error!"
                }
                failure{
                    echo "[*]:something went wrong on Build stage!!!"
                }
            }
        }

        stage("Deploy"){
            steps{
                sh 'sudo docker-compose up -d'
            }
            post{
                success{
                    echo "[*]:docker container loaded and ready!!!"
                }
                failure{
                    echo "[*]:somethig went wrong in Deploy Stage"
                }

            }
        }
    }

    post{
        success{
          slackSend(channel: "back", message: "Operation Completed on ui")
        }
        failure{
            slackSend(channel: "back", message: "containerizing of ui failed🤣")
            echo "[*]:Your jenkins operation completed with an error..."
        }
    }
}
