import * as l from './node_modules/lucide-react/dist/esm/lucide-react.mjs';
const keys = Object.keys(l).filter(k => k.toLowerCase().includes('twitter') || k.toLowerCase().includes('instagram') || k.toLowerCase().includes('linkedin') || k.toLowerCase().includes('youtube'));
console.log(keys.join(', '));
