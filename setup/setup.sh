#!/bin/bash
# echo "hello"
# fullname="my name is $1 $2"
# echo "$fullname"
# cat installation.logo
# # echo "name of script $0 hh $?" #returns status of last executed code
# if [ $? -eq 0 ]
# then
#   echo "command executed successfully"
#   exit 0
# else
#   echo "error while executing "
#   exit 1
# fi

# function install()
# {
# echo "hello $1"
# for filename in *
# do
#     wc -c $filename
# done
# echo "enter your name"
# read -p 'name:' uservar
# echo "enter password"
# read -sp 'Password:' passvar
# echo "thanks user: $uservar password: $passvar"
# }

# install anil

set -eu -o pipefail # fail on error and report it, debug all lines

sudo -n true
test $? -eq 0 || exit 1 "you must have sudo privilege to run this script"

# echo installing the must-have pre-requisites
# while read -r p ; do sudo apt-get install -y $p ; done < <(cat << "EOF"
#     gitk
#     curl
# EOF
# )

# echo installing the nice-to-have pre-requisites
# echo you have 5 seconds to proceed ...
# echo or
# echo hit Ctrl+C to quit
# echo -e "\n"
# sleep 6

echo "Please talk to me ..."
while read -r package ;
do
  case $package in
	update)
        echo "ur str $package"
        sudo apt update -y 
        # sudo apt upgrade -y
		;;    
	git)
        sudo apt install build-essential git -y
        echo fs.inotify.max_user_watches=524288 | sudo tee /etc/sysctl.d/40-max-user-watches.conf && sudo sysctl --system
		;;
    chrome)
        wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
        sudo apt install ./google-chrome-stable_current_amd64.deb -y
		;;  
    nvm)
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        ;;
    node)
        curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
        sudo apt install nodejs
        nvm install 14
        ;;
    docker)
        sudo apt install apt-transport-https ca-certificates curl software-properties-common
        curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
        sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
        sudo apt update
        sudo apt install docker-ce
        sudo usermod -aG docker ${USER}
        docker run -d -p 389:389 -p 636:636  -e SLAPD_PASSWORD=testpassword01! -e SLAPD_DOMAIN=server.local dinkel/openldap
        ;;
    kubectl)
        sudo apt update && sudo apt install apt-transport-https gnupg2 curl
        curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
        echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
        sudo apt-get update
        sudo apt-get install -y kubectl
        kubectl version --client
        ;;
    vscode)
        sudo snap install code
        ;;
    workbench)
        sudo apt update
        sudo apt install mysql-workbench-community
        sudo snap connect mysql-workbench-community:password-manager-service :password-manager-service
        ;;
    angular)
        npm install -g @angular/cli
        ;;
    eclipse)
        sudo apt update
        sudo apt install default-jre
        sudo apt install snap
        sudo snap install --classic eclipse
        ;;
    redis)
        sudo apt install redis-server
        sudo systemctl status redis-server
        ;;
    VBclipboard)
        sudo apt-get update -y
        sudo apt-get install virtualbox-guest-x11
        ;;

	*)  
        echo "Unconfigured package -- $package"
		echo "Will try with apt or snap if available"
        sudo apt install $package 
        if [ $? -eq 0 ]
        then
            echo "$package installed successfuly with apt"
        else
            sudo snap install $package 
            if [ $? -eq 0 ]
            then
                echo "$package installed successfuly with snap" 
            else
                echo "$package not found. Please check package name"
                break
            fi
        fi
        ;;
		        
esac
done < <(cat << "EOF"
    curl
    gitk
EOF
)

