import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-console': 'warn',
      'jsx-a11y/alt-text': [
        'warn',
        {
          'elements': ['img', 'object', 'area', 'input[type="image"]'],
          'img': ['Image', 'FadeInImage'],
          'object': ['Object'],
          'area': ['Area'],
          'input[type="image"]': ['InputImage'],
        },
      ],
    },
  },
];

export default eslintConfig;
