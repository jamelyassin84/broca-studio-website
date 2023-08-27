import os
import glob

class StoreReducerGenerator:
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
        form_files = glob.glob(os.path.join(self.root_directory, "**", "*.effects.ts"), recursive=True)
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
        service = f"{self.to_plural(self.to_camel_case(upper_case_model))}Service"   
        lower_case_service = f"_{model}Service"   
    
        content = f"""
            import {{Injectable}} from '@angular/core'
            import {{Actions, createEffect, ofType}} from '@ngrx/effects'
            import {{switchMap, map, tap}} from 'rxjs/operators'
            import {{StoreAction}} from 'app/app-core/store/core/action.enum'
            import {{{service}}} from './{directory}.service'   
            
            @Injectable({{providedIn: 'root'}})
            export class {upper_case_model}Effects {{
                constructor(
                    private _actions$: Actions,
                    private _{lower_case_service}: {service},   
                ) {{}}
            
                get$ = createEffect(() =>
                    this._actions$.pipe(
                        ofType(StoreAction.{action}.load.request),
                        switchMap(() =>
                            this._{lower_case_service}.get().pipe(
                                map((response) =>
                                    StoreAction.{action}.load.onSuccess({{
                                        {model}: response,
                                    }}),
                                ),
                            ),
                        ),
                    ),
                )
            
                add$ = createEffect(() =>
                    this._actions$.pipe(
                        ofType(StoreAction.{action}.add.request),
                        switchMap((action) =>
                            this._{lower_case_service}.add(action.{singular_model}).pipe(
                                map((response) =>
                                    StoreAction.{action}.add.onSuccess({{
                                        {singular_model}: response,
                                    }}),
                                ),
                            ),
                        ),
                    ),
                )
            
                update$ = createEffect(() =>
                    this._actions$.pipe(
                        ofType(StoreAction.{action}.update.onSuccess),
                        switchMap((action) =>
                            this._{lower_case_service}.update(action.{singular_model} ).pipe(
                                map((response) =>
                                    StoreAction.{action}.update.onSuccess({{ 
                                        {singular_model}: response,
                                    }}),
                                ),
                            ),
                        ),
                    ),
                )
            
                remove$ = createEffect(() =>
                    this._actions$.pipe(
                        ofType(StoreAction.{action}.remove.onSuccess),
                        switchMap((action) =>
                            this._{lower_case_service}.remove(action.id).pipe(
                                map((response) =>
                                    StoreAction.{action}.remove.onSuccess({{
                                        id: response,
                                    }}),
                                ),
                            ),
                        ),
                    ),
                )
            }}
        """
        print('Modified ' + upper_case_model + ' effects')
    
        return content

if __name__ == "__main__":
    root_directory = "src/app/app-core/store/ngrx"
    generator = StoreReducerGenerator(root_directory)
    generator.add_content_to_form_files()
