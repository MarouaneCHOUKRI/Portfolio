// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'MarouaneCHOUKRI', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projets Github',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 100, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Savoir être',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Curiosité',
          description:
            'Chez Sparklin, j\'ai été animé par une curiosité insatiable, notamment lors de notre plongée dans les tests End-to-End (E2E). Cette exploration des méthodologies de test automatisé a été pour moi une véritable aventure. Non seulement j\'ai pu maîtriser l\'exécution de ces tests, mais j\'ai aussi cherché à comprendre les subtilités techniques et les meilleures pratiques associées. Cette expérience m\'a permis de développer une vision plus complète du processus de développement logiciel, nourrissant ainsi ma curiosité et enrichissant mes compétences en développement full stack.',
          imageUrl:
            'https://img.freepik.com/vecteurs-libre/illustration-concept-recherche-curiosite_114360-11031.jpg?t=st=1717534153~exp=1717537753~hmac=f832a603fa95166de38c3529a951d8c623a7d53e61bf9115a1bafc07f8260263&w=1380',
        },
        {
          title: 'Esprit d\'équipe',
          description:
            'Mon implication dans le développement de StudyPlace, une application mobile de recherche d\'espaces de coworking en France, a été une expérience de collaboration significative. Travaillant en équipe, nous avons conjugué nos efforts pour surmonter les défis techniques et créatifs inhérents au projet. Cette expérience a consolidé ma conviction en l\'importance de la communication efficace et du travail d\'équipe dans la réalisation de projets de haute qualité.',
          imageUrl:
            'https://img.freepik.com/vecteurs-libre/caractere-gens-affaires-detenant-pieces-puzzle_53876-32626.jpg?t=st=1717534278~exp=1717537878~hmac=3508acb4cb5b8e0aab6e32230d523344e577f6a6fa7b8c3121b51dba17be0742&w=1800',
          link: 'https://example.com',
        },
        {
          title: 'Résolution de problèmes',
          description:
            'Mon travail sur le projet "Braille-Character-Recognition" a été une véritable épreuve de résolution de problèmes. Malgré les bugs rencontrés lors de l\'utilisation de techniques de machine learning, j\'ai su faire preuve de persévérance et de créativité pour les surmonter efficacement. Cette expérience a renforcé ma capacité à résoudre des défis techniques de manière innovante et rapide.',
          imageUrl:
            'https://img.freepik.com/vecteurs-libre/analyse-enquete-ligne-collecte-donnees-electroniques-outil-recherche-numerique-etude-informatisee-analyste-examine-resultats-commentaires-analyse-informations_335657-854.jpg?t=st=1717534322~exp=1717537922~hmac=2697bcb12e226ad67b8816f93a558f73bf40b40d2800d2e3a7facd292609e69d&w=1380',
        },
        {
          title: 'Autonomie',
          description:
            'Le projet "Mnist-handwritten-digit-classification", axé sur l\'apprentissage supervisé pour classer des images de chiffres manuscrits, j\'ai fait preuve d\'une grande autonomie. En travaillant sur ce projet, j\'ai assumé la responsabilité de la conception, de l\'implémentation et de l\'évaluation des modèles de classification. Cette autonomie m\'a permis de gérer efficacement mon travail, de prendre des décisions stratégiques et d\'atteindre les objectifs du projet de manière proactive.',
          imageUrl:
            'https://img.freepik.com/vecteurs-libre/illustration-du-concept-autonomie_114360-12425.jpg?t=st=1717534409~exp=1717538009~hmac=9fe28243e6d3c9fc11b463bb698a529f8f60c143403e19c44806c9e4c86a5768&w=1380',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio - Marouane Choukri',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Marouane Choukri',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'MarouaneCHOUKRI',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1C67PGGpkdbXZUA7Ss7Na2UsVLkEML-6Q/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'Sparklin',
      position: 'Alternance - ',
      from: 'Septembre 2023',
      to: 'Août 2024', 
      companyLink: 'https://example.com',
    },
    {
      company: 'CS-LANE',
      position: 'Stage - ',
      from: 'Avril 2023',
      to: 'Septembre 2023', 
      companyLink: 'https://example.com',
    },
    {
      company: 'CS-LANE',
      position: 'Stage - Développeur mobile',
      from: 'Avril 2022',
      to: 'Août 2022', 
      companyLink: 'https://cslane.com/',
    },
    {
      company: 'Département génie informatique - École Supérieure de Technologie d\'Oujda',
      position: 'Stage - Développeur deep learning',
      from: 'Mai 2021',
      to: 'Juin 2021',
      companyLink: 'http://esto.ump.ma/fr/labo-matsi',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Université de Picardie Jules Verne d\'Amiens',
      degree: 'Master Méthodes Informatiques Appliquées à la Gestion des Entreprises',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Université de Picardie Jules Verne d\'Amiens',
      degree: 'Licence 3 informatique',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'École Supérieure de Technologie d\'Oujda',
      degree: 'Licence professionnelle Informatique décisionnelle',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'École Supérieure de Technologie d\'Oujda',
      degree: 'DUT Développeur d\'applications Informatiques',
      from: '2018',
      to: '2020',
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Adresse-email: <u>choukrimarouane10@gmail.com</u> / Téléphone: 06.26.17.74.87`,

  enablePWA: true,
};

export default CONFIG;
