import os
import re


def remove_fontawesome_imports(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".ts"):
                file_path = os.path.join(root, file)
                with open(file_path, 'r') as f:
                    lines = f.readlines()
                with open(file_path, 'w') as f:
                    for line in lines:
                        if 'console.' not in line:
                            f.write(line)
                    print('Removed logs from ' + file_path)

if __name__ == "__main__":
    directory_to_search = "src"
    remove_fontawesome_imports(directory_to_search)
