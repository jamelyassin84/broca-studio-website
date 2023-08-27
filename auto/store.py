import os

class StateFilesGenerator:

    def __init__(self, root_directory):
        self.root_directory = root_directory
        self.file_extensions = ['actions.ts', 'effects.ts', 'form.ts', 'reducer.ts', 'selectors.ts', 'service.ts', 'api.ts', 'model.ts']

    def create_files(self, directory, filename):
        for ext in self.file_extensions:
            file_path = os.path.join(directory, f"{filename}.{ext}")
            if not os.path.exists(file_path):
                with open(file_path, 'w') as file:
                    pass

    def should_create_files(self, folder):
        # Check if the folder has any subfolders
        for _, subdirs, _ in os.walk(folder):
            if subdirs:
                return False
        return True

    def iterate_folders(self, folder):
        for foldername, subdirectories, _ in os.walk(folder):
            if self.should_create_files(foldername):
                filename = os.path.basename(foldername)
                self.create_files(foldername, filename)
                print(f"Creating files for {foldername}")

if __name__ == "__main__":
    root_directory = "src/app/app-core/store/ngrx"
    file_creator = StateFilesGenerator(root_directory)
    file_creator.iterate_folders(root_directory)
