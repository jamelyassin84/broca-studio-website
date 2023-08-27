import os
import glob

class StoreServiceGenerator:
    def __init__(self, root_directory):
        self.root_directory = root_directory

    @staticmethod
    def to_camel_case(s):
        parts = s.replace('-', '_').split('_')
        return parts[0] + ''.join(x.capitalize() for x in parts[1:])

    @staticmethod
    def to_plural(s):
        if s.endswith('y'):
            return s[:-1] + 'ies'
        if s.endswith('s'):
            return s
        return s + 's'
        
    @staticmethod
    def to_all_upper_camel_case(s):
        return '_'.join(x.upper() for x in s.split('_'))
        
    @staticmethod
    def to_upper_snake_case(s):
        words = []
        current_word = ""
    
        for char in s:
            if char.isupper() and current_word:
                words.append(current_word)
                current_word = char
            else:
                current_word += char
    
        if current_word:
            words.append(current_word)
    
        return '_'.join(words).upper()


    @staticmethod
    def to_readable_format(s):
        result = [s[0]]
        for char in s[1:]:
            if char.isupper():
                result.append(' ')
            result.append(char)
        return ''.join(result)

    @staticmethod
    def upper_first_character(s):
        return s[:1].upper() + s[1:]

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
        
    @staticmethod
    def plural_to_singular(word):
        irregular_plurals = {
            "people": "person",
            "men": "man",
            "women": "woman",
        }
        
        if word.lower() in irregular_plurals:
            return irregular_plurals[word.lower()]
        
        if word.endswith("s"):
            return word[:-1]
        
        return word
        
    def add_content_to_form_files(self):
        form_files = glob.glob(os.path.join(self.root_directory, "**", "*.service.ts"), recursive=True)
        for form_file in form_files:
            filename = os.path.basename(form_file)[:-11]  # Remove '.form.ts' extension
            model = self.to_camel_case(filename)
            content = self.get_form_file_content(model)
            with open(form_file, 'w') as file:
                file.write(content)

    def get_form_file_content(self, model):
        adapter = f"{model}Adapter"
        upper_case_model = self.upper_first_character(model)
        state = f"{upper_case_model}State"
        action = self.to_upper_snake_case(model)
        reducer = self.to_plural(model)
        directory = self.to_dash_case(model)
        singular_model = self.plural_to_singular(self.to_camel_case(model))
        api = f"{upper_case_model}Api"
        service = f"{upper_case_model}Service"
    
        content = f"""
        import {{Injectable}} from '@angular/core'
        import {{{api}}} from './{directory}.api'
        import {{StoreLoaderService}} from '@broca-studio/services/store-loader.service'
        import {{Loader}} from '@broca-studio/decorators/loader.decorator'
        import {{LoadingTypeEnum}} from '@broca-studio/enums/loading-type.enum'
        import {{Observable}} from 'rxjs'
        import {{ {upper_case_model} }} from './{directory}.model'
        import {{map}} from 'rxjs/operators'
        
        @Injectable({{providedIn: 'root'}})
        export class {service} {{
            constructor(
                private _{model}Api: {api},
                private _storeLoaderService: StoreLoaderService,
            ) {{}}
        
            @Loader({{state: '{action}', loading: LoadingTypeEnum.GET}})
            get(): Observable<{upper_case_model}[]> {{
                return this._{model}Api.get()
            }}
        
            @Loader({{state: '{action}', loading: LoadingTypeEnum.CREATE}})
            add({singular_model}: {upper_case_model}): Observable<{upper_case_model}> {{
                return this._{model}Api.post({singular_model})
            }}
        
            @Loader({{state: '{action}', loading: LoadingTypeEnum.UPDATE}})
            update({singular_model}: {upper_case_model}): Observable<{upper_case_model}> {{
                return this._{model}Api.update({singular_model}.id, {singular_model})
            }}
        
            @Loader({{state: '{action}', loading: LoadingTypeEnum.REMOVE}})
            remove(id: string): Observable<string> {{
                return this._{model}Api.remove(id).pipe(map(() => id))
            }}
        }}
        """
        print('Modified ' + upper_case_model + ' service')
    
        return content
    
    
if __name__ == "__main__":
    root_directory = "src/app/app-core/store/ngrx"
    generator = StoreServiceGenerator(root_directory)
    generator.add_content_to_form_files()
