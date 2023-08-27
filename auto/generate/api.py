import os
import glob

class ApiGenerator:
    def __init__(self, root_directory):
        self.root_directory = root_directory

    @staticmethod
    def to_upper_camel_case(s):
        s = s.replace('-', '_')
        parts = s.split('_')
        model = ''.join(x.capitalize() for x in parts if x)
        if model.endswith('.'):
            model = model[:-1]
        return model
        
    @staticmethod
    def to_dash_case(s):
        result = [s[0].lower()]
        for char in s[1:]:
            if char.isupper():
                result.append('-')
                result.append(char.lower())
            else:
                result.append(char)
        return ''.join(result)

    def add_content_to_form_files(self):
        form_files = glob.glob(os.path.join(self.root_directory, "**", "*.api.ts"), recursive=True)
        for form_file in form_files:
            filename = os.path.basename(form_file)[:-7]   
            model = self.to_upper_camel_case(filename)
            content = self.get_form_file_content(model)
            with open(form_file, 'w') as file:
                file.write(content)

    def get_form_file_content(self, model):
        endpoint = self.to_dash_case(model)
    
        content = f"""
            import {{HttpClient}} from '@angular/common/http'
            import {{Injectable}} from '@angular/core'
            import {{API}} from '@broca-studio/api/base.api';
            
            @Injectable({{ providedIn: 'root' }})
            export class {model}Api extends API {{
                constructor(private _http: HttpClient) {{
                    super(_http, '{endpoint}')
                }}
            }}
        """
        
        print('Modified ' + model + ' api')
        return content


if __name__ == "__main__":
    root_directory = "src/app/app-core"
    modifier = ApiGenerator(root_directory)
    modifier.add_content_to_form_files()
