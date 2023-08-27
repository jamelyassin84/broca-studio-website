class Helper:

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
    def to_upper_camel_case(s):
        parts = s.split('/')
        return ''.join(part.capitalize() for part in parts[-1].split('-'))


   @staticmethod
    def to_camel_case(s):
        parts = s.replace('-', '_').split('_')
        return parts[0] + ''.join(x.capitalize() for x in parts[1:])

    @staticmethod
    def to_upper_camel_case(s):
        parts = s.split('/')
        return ''.join(part.capitalize() for part in parts[-1].split('-'))

  
        
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
    def to_upper_camel_case(s):
        parts = s.split('/')
        return ''.join(part.capitalize() for part in parts[-1].split('-'))


        
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
