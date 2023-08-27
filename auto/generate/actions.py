import os
import glob

class ActionGenerator:
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

    @staticmethod
    def to_camel_case(s):
        parts = s.split('_')
        s = parts[0] + ''.join(x.capitalize() for x in parts[1:])
        return s[0].lower() + s[1:]

    @staticmethod
    def to_plural(s):
        if s.endswith('y'):
            return s[:-1] + 'ies'
        if s.endswith('s'):
            return s
        return s + 's'

    @staticmethod
    def to_readable_format(s):
        result = []
        word_start_index = 0
        for i, char in enumerate(s[1:], start=1):
            if char.isupper():
                result.append(s[word_start_index:i])
                word_start_index = i
        result.append(s[word_start_index:])
        return ' '.join(result)
        
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

    def to_action(self, classname, action_type):
        readable_classname = self.to_readable_format(classname)
        return f"""'[{readable_classname}/System] {action_type}'"""

    def add_content_to_form_files(self):
        form_files = glob.glob(os.path.join(self.root_directory, "**", "*.actions.ts"), recursive=True)
        for form_file in form_files:
            filename = os.path.basename(form_file)[:-11]  # Remove '.form.ts' extension
            model = self.to_upper_camel_case(filename)
            content = self.get_form_file_content(model)
            with open(form_file, 'w') as file:
                file.write(content)

    def get_form_file_content(self, model):
        singular_model = self.plural_to_singular(self.to_camel_case(model))
        plural_model =self.to_plural(self.to_camel_case(model))
    
        content = f"""
            import {{SystemActions}} from '@broca-studio/decorators/system.action.group'
            import {{createActionGroup, emptyProps, props}} from '@ngrx/store'
            import {{ {model} }} from './{self.to_dash_case(model)}.model'
            
            export const SYSTEM = SystemActions({{ name: {self.to_action(model,'System')}}})
            
            export const load = createActionGroup({{
                source: {self.to_action(model,'Load')},
                events: {{
                    request: emptyProps(),
                    onSuccess: props<{{ {plural_model}: {model}[] }}>(),
                }},
            }})
            
            export const add = createActionGroup({{
                source: {self.to_action(model,'Add')},
                events: {{
                    request: props<{{ {singular_model}: {model} }}>(),
                    onSuccess: props<{{ {singular_model}: {model} }}>(),
                }},
            }})
            
            export const update = createActionGroup({{
               source: {self.to_action(model,'Update')},
                events: {{
                    request: props<{{ {singular_model}: {model} }}>(),
                    onSuccess: props<{{ {singular_model}: {model} }}>(),
                }},
            }})
            
            export const remove = createActionGroup({{
                source: {self.to_action(model,'Remove')},
                events: {{
                    request: props<{{ id: string }}>(),
                    onSuccess: props<{{ id: string }}>(),
                }},
            }})
        """
        
        print('Modified ' + model + ' actions')

        return content

if __name__ == "__main__":
    root_directory = "src/app/app-core/store/ngrx"
    generator = ActionGenerator(root_directory)
    generator.add_content_to_form_files()
