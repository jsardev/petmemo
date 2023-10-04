module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'no-relative-import-paths'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': ['error', { ignore: ['virtual:uno.css'] }],
    'no-relative-import-paths/no-relative-import-paths': [
      'error',
      {
        allowSameFolder: true,
        rootDir: 'src',
        prefix: '@',
      },
    ],
  },
}
