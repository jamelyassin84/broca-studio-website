import os

class DeleteEmptySpecTSFile:
    def __init__(self, folder_path):
        self.folder_path = folder_path

    def delete_empty_spec_ts_files(self):
        for foldername, subfolders, filenames in os.walk(self.folder_path):
            for filename in filenames:
                if filename.endswith('.spec.ts'):
                    file_path = os.path.join(foldername, filename)
                    os.remove(file_path)
                    print(f"Deleted empty file: {file_path}")
               

if __name__ == "__main__":
    folder_path = "src"
    deleter = DeleteEmptySpecTSFile(folder_path)
    deleter.delete_empty_spec_ts_files()
