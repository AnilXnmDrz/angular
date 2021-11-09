import subprocess
import json
import yaml

# "update":"sudo apt update",
    # "upgrade":"sudo apt upgrade",

# subprocess.run(uu)

program = [ 'gitk', 'curl', 'nvm']
with open('./test.yaml','r') as procedure:
   
    steps=yaml.safe_load(procedure)
    print('data',steps)
    
    for package in program:
        process = subprocess.run(['which', package], capture_output=True, text=True)

        if process.returncode == 0:
            print(f'"{package}" is already installed')
            print(f'The location of the binary is: {process.stdout}')
        else:
            print(f'{package} is not installed')
            for step in steps[package]:
                print(step.split())
                result=subprocess.run(step.split())
                if(result.returncode!=0):
                    print(f'"{package}" is installed')
                else:    
                    print('somthing went wrong')
                    print(process.stderr)



# sudo apt update -y && sudo apt upgrade -