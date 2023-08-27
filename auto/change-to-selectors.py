import os

def remove_selector_files(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".selector.ts"):
                file_path = os.path.join(root, file)
                os.remove(file_path)
                print(file_path + ' Removed')

if __name__ == "__main__":
    directory_to_search = "src/app/app-core/store/ngrx"
    remove_selector_files(directory_to_search)
