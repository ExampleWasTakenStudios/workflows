import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,
    prettier,
    {
        rules: {
            'prettier/prettier': ['error', {}, { usePrettierrc: true }]
        }
    }    
]
