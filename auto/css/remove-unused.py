import os

class DeleteEmptySCSSFile:
    def __init__(self, folder_path):
        self.folder_path = folder_path

    def delete_empty_scss_files(self):
        for foldername, subfolders, filenames in os.walk(self.folder_path):
            for filename in filenames:
                if filename.endswith('.scss'):
                    file_path = os.path.join(foldername, filename)
                    if os.path.getsize(file_path) == 0:
                        print(f"Deleting empty file: {file_path}")
                        os.remove(file_path)

if __name__ == "__main__":
    folder_path = "src"   
    deleter = DeleteEmptySCSSFile(folder_path)
    deleter.delete_empty_scss_files()
