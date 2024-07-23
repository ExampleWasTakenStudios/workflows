module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:prettier/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        EXPERIMENTAL_useProjectService: true,
        tsconfigRootDir: __dirname,
    },
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    }
}
