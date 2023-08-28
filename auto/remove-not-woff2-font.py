import os
import glob

# Specify the directory where your files are located
directory_path = 'src/assets/fonts'

# Iterate through all files in the directory
for filename in os.listdir(directory_path):
    file_path = os.path.join(directory_path, filename)
    
    # Check if the file is not a directory
    if os.path.isfile(file_path):
        # Check if the file does not have a .woff2 extension
        if not filename.lower().endswith('.woff2'):
            # Delete the file
            os.remove(file_path)
            print(f"Deleted: {file_path}")

print("Done")
