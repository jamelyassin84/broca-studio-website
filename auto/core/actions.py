import os
import glob

class StoreActionGenerator:
    def __init__(self, ngrx_folder, core_folder):
        self.ngrx_folder = ngrx_folder
        self.core_folder = core_folder

    @staticmethod
    def to_upper_camel_case(s):
        parts = s.split('/')
        return ''.join(part.capitalize() for part in parts[-1].split('-'))

    @staticmethod
    def remove_actions(module):
        return module.split(".")[0]

    def add_actions_to_core(self):
        if not os.path.exists(self.core_folder):
            os.makedirs(self.core_folder)

        actions_files = glob.glob(os.path.join(self.ngrx_folder, "**", "*.actions.ts"), recursive=True)

        import_lines = []
        actions = []

        for actions_file in actions_files:
            relative_path = os.path.relpath(actions_file, self.ngrx_folder)

            core_path = os.path.splitext(relative_path)[0].replace(os.path.sep, '/')

            module_name = self.to_upper_camel_case(core_path)

            import_lines.append(f"import * as {self.remove_actions(module_name)} from '../ngrx/{core_path}'")
            actions.append(f"{self.remove_actions(module_name)}")

        actions_content = ",\n".join(actions)
        store_action_content = '\n'.join(import_lines) + f"\n\nexport const StoreAction = {{{actions_content}\n}}"

        with open(os.path.join(self.core_folder, 'action.enum.ts'), 'w') as file:
            file.write(store_action_content)


if __name__ == "__main__":
    ngrx_folder = "src/app/app-core/store/ngrx"
    core_folder = "src/app/app-core/store/core"
    generator = StoreActionGenerator(ngrx_folder, core_folder)
    generator.add_actions_to_core()
