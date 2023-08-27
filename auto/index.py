import os
import subprocess

def execute_python_files(folder_path):
    # Get a list of all files in the folder
    files = os.listdir(folder_path)
    
    # Filter the Python files
    python_files = [file for file in files if file.endswith('.py')]
    
    # Execute each Python file
    for python_file in python_files:
        file_path = os.path.join(folder_path, python_file)
        try:
            subprocess.run(['python3', file_path], check=True)
        except subprocess.CalledProcessError as e:
            print(f"Error executing {file_path}: {e}")
        else:
            print(f"Successfully executed {file_path}")

if __name__ == "__main__":
    folder_path = "auto/generate"
    execute_python_files(folder_path)
