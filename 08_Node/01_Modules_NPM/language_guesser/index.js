import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import { franc } from 'franc';
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];
const langCode = franc(input);
console.log(langCode);
if (langCode === 'und') {
    console.log('SORRY, COULDN\'T\' FIGURE IT OUT'.red);
} else {
    const language = langs.where("3", langCode);
    console.log(`Our best guess is: ${language}`.green);
}