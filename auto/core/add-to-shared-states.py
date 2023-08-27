import os
import glob

class SharedStateGenerator:
    def __init__(self, ngrx_folder, core_folder):
        self.ngrx_folder = ngrx_folder
        self.core_folder = core_folder

    @staticmethod
    def to_camel_case(s):
        parts = s.replace('-', '_').split('_')
        return parts[0] + ''.join(x.capitalize() for x in parts[1:])

    @staticmethod
    def to_upper_camel_case(s):
        parts = s.split('/')
        return ''.join(part.capitalize() for part in parts[-1].split('-'))

    @staticmethod
    def remove_actions(module):
        return module.split(".")[0]
        
    @staticmethod
    def lower_first_character(s):
        return s[:1].lower() + s[1:].split(".")[0]
        
    @staticmethod
    def remove_state(s):
         return s.split("State")[0]

    @staticmethod
    def to_plural(s):
        if s.endswith('y'):
            return s[:-1] + 'ies'
        if s.endswith('s'):
            return s
        return s + 's'
        
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


    def add_actions_to_core(self):
        if not os.path.exists(self.core_folder):
            os.makedirs(self.core_folder)

        actions_files = glob.glob(os.path.join(self.ngrx_folder, "**", "*.reducer.ts"), recursive=True)

        import_lines = [
        f"import {{StoreModule}} from '@ngrx/store'",
        f"import {{StateEnum}} from 'app/app-core/store/core/state.enum'"
        ]
        actions = []

        for actions_file in actions_files:
            relative_path = os.path.relpath(actions_file, self.ngrx_folder)

            core_path = os.path.splitext(relative_path)[0].replace(os.path.sep, '/')

            model = f"""{self.to_upper_camel_case(self.lower_first_character(core_path))}State"""

            leftHandSideModel = self.to_plural(self.lower_first_character(self.remove_state(model)))
            reducer=   self.to_camel_case(leftHandSideModel)
            reducer=   f"{self.to_plural(reducer)}Reducer"
            
            import_lines.append(f"import  {{{reducer}}} from 'app/app-core/store//ngrx/{core_path}'")
            
            actions.append(f"StoreModule.forFeature(StateEnum.{self.to_upper_snake_case(leftHandSideModel)}, {reducer})")

        actions_content = ",\n".join(actions)
        store_action_content = '\n'.join(import_lines) + f"\n\nexport const appStateModules = [{actions_content}\n]"

        with open(os.path.join(self.core_folder, 'app-state.module.ts'), 'w') as file:
            file.write(store_action_content)


if __name__ == "__main__":
    ngrx_folder = "src/app/app-core/store/ngrx"
    core_folder = "src/app/shared/states"
    generator = SharedStateGenerator(ngrx_folder, core_folder)
    generator.add_actions_to_core()
