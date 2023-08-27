import os
import glob

class FormGenerator:
    def __init__(self, root_directory):
        self.root_directory = root_directory

    @staticmethod
    def to_upper_camel_case(s):
        s = s.replace('-', '_')
        parts = s.split('_')
        class_name = ''.join(x.capitalize() for x in parts if x)
        if class_name.endswith('.'):
            class_name = class_name[:-1]
        return class_name

    def add_content_to_form_files(self):
        form_files = glob.glob(os.path.join(self.root_directory, "**", "*.form.ts"), recursive=True)
        for form_file in form_files:
            filename = os.path.basename(form_file)[:-8]   
            class_name = self.to_upper_camel_case(filename)
            content = self.get_form_file_content(class_name)
            with open(form_file, 'w') as file:
                file.write(content)

    def get_form_file_content(class_name):
        content = f"""
            import {{ Injectable }} from "@angular/core";
            import {{ FormBuilder }} from "@angular/forms";
            
            @Injectable({{ providedIn: 'root' }})
            export class {class_name}Form extends FormBuilder {{
                get(){{}}
                set(){{}}
            }}
        """
        
        print('Modified ' + class_name + ' Form')
        return content

if __name__ == "__main__":
    root_directory = "src/app/app-core"
    modifier = FormGenerator(root_directory)
    modifier.add_content_to_form_files()
