import js from '@eslint/js';
import ts from 'typescript-eslint';
export default ts.config({ ignores: ['**/dist/**', '**/node_modules/**'] }, js.configs.recommended, ...ts.configs.recommended, { files: ['**/*.ts','**/*.tsx'], languageOptions: { globals: { document: 'readonly', window: 'readonly', Request: 'readonly', Response: 'readonly', URL: 'readonly' } } });
