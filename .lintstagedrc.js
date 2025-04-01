module.exports = {
  // Lint et format pour les fichiers TypeScript/JavaScript
  '**/*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
  ],
  
  // Format pour les autres fichiers
  '**/*.{json,md,yml,yaml,css,scss}': [
    'prettier --write',
  ],
  
  // Vérification des types pour les fichiers TypeScript
  '**/*.{ts,tsx}': () => 'tsc --noEmit',

  // Vérification des tests pour les fichiers modifiés
  '**/*.{js,jsx,ts,tsx}': (filenames) => 
    `npm test -- --bail --findRelatedTests ${filenames.join(' ')}`,
};