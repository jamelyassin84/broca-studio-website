import os

# Function to replace text in a file
def replace_text_in_file(file_path, old_text, new_text):
    try:
        with open(file_path, 'r') as file:
            file_content = file.read()

        modified_content = file_content.replace(old_text, new_text)

        with open(file_path, 'w') as file:
            file.write(modified_content)

        print(f"Replaced '{old_text}' with '{new_text}' in file: {file_path}")

    except Exception as e:
        print(f"An error occurred while processing file: {file_path}")
        print(f"Error details: {str(e)}")

# Specify the directory path you want to search in
directory_path = 'src'

# Text to find and replace
old_text = '@digital_brand_work'
new_text = '@broca-studio'

# Iterate through all folders in the directory
for root, dirs, files in os.walk(directory_path):
    for file_name in files:
        file_path = os.path.join(root, file_name)
        replace_text_in_file(file_path, old_text, new_text)
