import os
import glob

class ModelGenerator:
    def __init__(self, root_directory):
        self.root_directory = root_directory

    @staticmethod
    def to_upper_camel_case(s):
        return ''.join(x.capitalize() for x in s.replace('-', '_').split('_'))

    def add_content_to_form_files(self):
        form_files = glob.glob(os.path.join(self.root_directory, "**", "*.model.ts"), recursive=True)
        for form_file in form_files:
            filename = os.path.basename(form_file)[:-9]   
            class_name = self.to_upper_camel_case(filename)
            content = self.get_form_file_content(class_name)
            with open(form_file, 'w') as file:
                file.write(content)

    def get_form_file_content(self,class_name):
        content = f"""
            import {{ PHPBaseModel }} from '@broca-studio/models/core.model';
            export interface {class_name} extends PHPBaseModel{{}}
        """
        print('Modified ' + class_name + ' model')
        return content

if __name__ == "__main__":
    root_directory = "src/app/app-core"
    modifier = ModelGenerator(root_directory)
    modifier.add_content_to_form_files()
    print('executing')
