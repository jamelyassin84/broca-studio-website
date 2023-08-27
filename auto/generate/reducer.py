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
        form_files = glob.glob(os.path.join(self.root_directory, "**", "*.reducer.ts"), recursive=True)
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
        reducer =self.to_plural(model)
        directory = self.to_dash_case(model)
        singular_model = self.plural_to_singular(self.to_camel_case(model))

        content = f"""
        import {{STORE_LOADERS}} from '@broca-studio/constants/store-loaders'
        import {{StoreLoaders}} from '@broca-studio/models/core.model'
        import {{createEntityAdapter, EntityAdapter, EntityState}} from '@ngrx/entity'
        import {{createReducer, on}} from '@ngrx/store'
        import {{ {upper_case_model} }} from './{directory}.model'
        import {{StoreAction}} from 'app/app-core/store/core/action.enum'
        
        export const {adapter}: EntityAdapter<{upper_case_model}> =
            createEntityAdapter<{upper_case_model}>()
            
        export interface {state}
            extends EntityState<{upper_case_model}>,
                StoreLoaders {{
            error: any
        }}
        
        const initialState: {state} = {adapter}.getInitialState({{
            ...STORE_LOADERS,
            error: null,
        }})
        
        export const {reducer}Reducer = createReducer(
            initialState,
        
            on(StoreAction.{action}.SYSTEM.setLoader, (state, action) => ({{
                ...state,
                [`${{action.loading.type}}Loader`]: action.loading.state,
            }})),
        
            on(StoreAction.{action}.SYSTEM.onError, (state, action) => ({{
                ...state,
                error: action.error,
            }})),
        
            on(StoreAction.{action}.load.onSuccess, (state, action) =>
                {adapter}.setAll(action.{self.to_plural(model)}, state),
            ),
        
            on(StoreAction.{action}.add.onSuccess, (state, action) =>
                {adapter}.addOne(action.{singular_model}, state),
            ),
            
            on(StoreAction.{action}.update.onSuccess, (state, action) =>
                {adapter}.upsertOne(action.{singular_model}, state),
            ),
        
            on(StoreAction.{action}.remove.request, (state, action) =>
                {adapter}.removeOne(action.id, state),
            ),
        )
        """
        print('Modified ' + upper_case_model + ' reducers')

        return content

if __name__ == "__main__":
    root_directory = "src/app/app-core/store/ngrx"
    generator = StoreReducerGenerator(root_directory)
    generator.add_content_to_form_files()
