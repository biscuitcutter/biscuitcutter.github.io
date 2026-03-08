const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

const replacements = [
  ['bg-white', 'bg-white dark:bg-gray-800'],
  ['text-gray-900', 'text-gray-900 dark:text-gray-100'],
  ['text-gray-800', 'text-gray-800 dark:text-gray-200'],
  ['text-gray-700', 'text-gray-700 dark:text-gray-300'],
  ['text-gray-600', 'text-gray-600 dark:text-gray-400'],
  ['border-gray-100', 'border-gray-100 dark:border-gray-700'],
  ['border-gray-200', 'border-gray-200 dark:border-gray-700'],
  ['hover:text-amber-600 ', 'hover:text-amber-600 dark:hover:text-amber-500 '],
  ['text-amber-600', 'text-amber-600 dark:text-amber-500'],
  ['bg-slate-900', 'bg-slate-900 dark:bg-black'],
];

for (const [oldClass, newClass] of replacements) {
    // Only replace if it doesn't already have dark: right after
    const regex = new RegExp(oldClass + '(?![\\s\\w-]*dark:)', 'g');
    content = content.replace(regex, newClass);
}

fs.writeFileSync('src/app/page.tsx', content);
