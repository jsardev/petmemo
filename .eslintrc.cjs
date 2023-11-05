module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:boundaries/strict',
    '@unocss',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import', 'boundaries'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    'boundaries/ignore': ['**/*.config.ts', '**/*.d.ts'],
    'boundaries/elements': [
      {
        type: 'app',
        pattern: 'app/*',
        mode: 'file',
      },
      {
        type: 'modules',
        pattern: 'modules/*',
        mode: 'folder',
      },
      {
        type: 'pages',
        pattern: 'pages/*',
        mode: 'file',
      },
      {
        type: 'assets',
        pattern: 'assets/*',
        mode: 'file',
      },
      {
        type: 'shared',
        pattern: 'shared/*',
        mode: 'folder',
      },
    ],
  },
  rules: {
    'no-console': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '@/assets/**',
            group: 'index',
            position: 'after',
          },
          {
            pattern: '@/**',
            group: 'external',
            position: 'after',
          },
        ],
        groups: ['builtin', 'external', ['parent', 'sibling', 'index']],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['virtual:uno.css'],
      },
    ],
    'boundaries/entry-point': [
      'error',
      {
        default: 'disallow',
        rules: [
          {
            target: ['app', 'pages', 'shared', 'assets'],
            allow: '**',
          },
          {
            target: ['modules'],
            allow: 'index.ts',
          },
        ],
      },
    ],
    'boundaries/element-types': [
      'error',
      {
        default: 'disallow',
        rules: [
          {
            from: ['app'],
            allow: ['app', 'pages'],
          },
          {
            from: ['modules'],
            allow: ['modules', 'shared'],
          },
          {
            from: ['pages'],
            allow: ['shared', 'modules'],
          },
          {
            from: ['shared'],
            allow: ['shared', 'assets'],
          },
        ],
      },
    ],
  },
}
