// const  = import fr;// require('./package.json');
import packageJson from './package.json'

const { eslintConfig } = packageJson

eslintConfig.parser = '@typescript-eslint/parser'

eslintConfig.extends.push(
  'plugin:@typescript-eslint/eslint-recommended',
  'plugin:@typescript-eslint/recommended'
)

eslintConfig.rules = {
  'node/no-unsupported-features/es-syntax': 'off',
  'node/no-unsupported-features/node-builtins': 'off',
  'comma-dangle': ['error', 'only-multiline'],
  semi: ['error', 'always'],
  'space-before-function-paren': ['error', 'never']
}

export default eslintConfig
