import os
import shutil
import glob

# Function to convert string to UpperCamelCase
def to_upper_camel_case(s):
    return ''.join(x.capitalize() for x in s.split('_'))

# Function to transfer content from .form.ts to .model.ts files
def transfer_content_between_files(root_directory):
    form_files = glob.glob(os.path.join(root_directory, "**", "*.form.ts"), recursive=True)

    for form_file in form_files:
        with open(form_file, 'r') as form_content_file:
            form_content = form_content_file.read()

        # Replace ". extends" with "extends"
        updated_content = form_content.replace(". extends", "extends")

        with open(form_file, 'w') as form_content_file:
            form_content_file.write(updated_content)

def get_form_file_content(class_name):
    # This function is no longer needed since we are transferring the content instead of rewriting it
    return ""

if __name__ == "__main__":
    root_directory = "src/app/app-core"
    transfer_content_between_files(root_directory)
    print('Nice')