module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // Nouvelles fonctionnalités
        'fix',      // Corrections de bugs
        'docs',     // Documentation
        'style',    // Changements de style (formatting, missing semi colons, etc)
        'refactor', // Refactoring du code
        'perf',     // Améliorations des performances
        'test',     // Ajout ou modification de tests
        'build',    // Changements qui affectent le système de build
        'ci',       // Changements des fichiers et scripts de CI
        'chore',    // Autres changements qui ne modifient pas src ou test
        'revert',   // Retour à une version précédente
      ],
    ],
    'type-case': [2, 'always', 'lower'],
    'type-empty': [2, 'never'],
    'scope-case': [2, 'always', 'lower'],
    'subject-case': [2, 'always', 'lower'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 72],
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [2, 'always'],
  },
  prompt: {
    settings: {},
    messages: {
      skip: ':skip',
      max: 'pas plus de %d caractères',
      min: 'au moins %d caractères',
      emptyWarning: 'ne peut pas être vide',
      upperLimitWarning: 'au-dessus de la limite',
      lowerLimitWarning: 'sous la limite'
    },
    questions: {
      type: {
        description: "Choisissez le type de modification que concerne votre commit:",
        enum: {
          feat: {
            description: '✨ Nouvelle fonctionnalité',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: '🐛 Correction de bug',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: '📚 Documentation',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: '💎 Styles',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: '📦 Refactoring du code',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: '🚀 Amélioration des performances',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: '🚨 Tests',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description: '🛠 Build',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description: '⚙️ CI',
            title: 'Continuous Integration',
            emoji: '⚙️',
          },
          chore: {
            description: '♻️ Chore',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: '⏪️ Revert',
            title: 'Reverts',
            emoji: '⏪️',
          },
        },
      },
      scope: {
        description: 'Quel est le scope de ce changement (composant ou fichier modifié)',
      },
      subject: {
        description: 'Écrivez une description courte et impérative du changement',
      },
      body: {
        description: 'Fournissez une description plus détaillée du changement',
      },
      isBreaking: {
        description: 'Y a-t-il des changements cassants ?',
      },
      breakingBody: {
        description: 'Un commit cassant nécessite un corps. Veuillez entrer une description plus longue',
      },
      breaking: {
        description: 'Décrivez les changements cassants',
      },
      isIssueAffected: {
        description: 'Cela affecte-t-il une issue ouverte ?',
      },
      issuesBody: {
        description: 'Si les issues sont affectées, ajoutez une description',
      },
      issues: {
        description: 'Ajoutez les références des issues (ex. "fix #123", "re #123".)',
      },
    },
  },
};