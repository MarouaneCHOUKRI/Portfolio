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
          link: '',
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
          link: '',
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
    linkedin: 'marouane-choukri-570770245',
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
      position: 'Alternance - Développeur full stack',
      from: 'Octobre 2023',
      to: 'Août 2024', 
      companyLink: 'https://www.sparklin.io/',
      description1: 'Spécialisation dans la réalisation de tests E2E pour les applications mobiles et web, assurant une couverture complète et une expérience utilisateur sans faille. Gestion du cycle de vie des projets, incluant le recueil des besoins, l\'élaboration des cahiers des charges et le développement des fonctionnalités, avec une attention particulière à la qualité et à la performance des produits livrés.',
      // description2: "- React, React Native, Jest, NestJS, TypeScript, SQL Server, Git, Docker, Github Action, Cypress, LambdaTest."
    },
    {
      company: 'Sparklin',
      position: 'Stage - Développeur full stack',
      from: 'Avril 2023',
      to: 'Septembre 2023', 
      companyLink: 'https://www.sparklin.io/',
      description1: "Conception et gestion de projets d'applications mobiles et web : Recueil des besoins utilisateurs, élaboration de cahiers des charges détaillés, développement des fonctionnalités demandées, et réalisation de tests rigoureux pour assurer la qualité et la conformité aux spécifications.",
      // description2: "- React, React Native, Jest, NestJS, TypeScript, SQL Server, Git, Docker."
    },
    {
      company: 'CS-LANE',
      position: 'Stage - Développeur mobile',
      from: 'Avril 2022',
      to: 'Juin 2022', 
      companyLink: 'https://cslane.com/',
      description1: 'Développement d\'applications mobiles de mise en contact d\'utilisateurs avec des conducteurs réalisant des services de transport.',
      // description2: '- React Native, Expo, Firebase, Google Maps Platform.'
    },
    {
      company: 'Département génie informatique - École Supérieure de Technologie d\'Oujda',
      position: 'Stage - Développeur deep learning',
      from: 'Mai 2021',
      to: 'Juin 2021',
      companyLink: 'http://esto.ump.ma/fr/labo-matsi',
      description1: 'Création d\'un modèle d\'intelligence artificielle permettant la reconnaissance des caractères braille par l\'apprentissage profond du réseau de neurones convolutif.',
      // description2: '- Python(TensorFlow/Keras), Tkinter, kaggle.'
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Université de Picardie Jules Verne d\'Amiens',
      degree: 'Master - Méthodes informatiques appliquées à la gestion des entreprises',
      from: '2022',
      to: '2024',
    },
    {
      institution: 'Université de Picardie Jules Verne d\'Amiens',
      degree: 'Licence 3 - informatique',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'École Supérieure de Technologie d\'Oujda',
      degree: 'Licence professionnelle - Informatique décisionnelle',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'École Supérieure de Technologie d\'Oujda',
      degree: 'DUT - Développeur d\'applications informatiques',
      from: '2018',
      to: '2020',
    },
  ],
  publications: [
    {
      title: 'Titre du projet : ArchiWeb',
      conferenceName: 'Outils : TypeScript, MEAN STACK ',
      journalName: 'Compétence : B.1. Conception des applications',
      authors: '',
      link: '',
      description:
        'Lors de ma participation au projet ArchiWeb, j\'ai été chargé de concevoir une application répondant aux besoins des utilisateurs tout en respectant les contraintes techniques. J\'ai travaillé en étroite collaboration avec l\'équipe pour définir les caractéristiques fonctionnelles et les interfaces nécessaires. Mon rôle consistait à sélectionner les meilleures options techniques pour optimiser la qualité tout en minimisant les coûts, assurant ainsi une expérience utilisateur fluide et efficace.'
    },
    {
      title: 'Titre du projet : Braille-Character-Recognition',
      conferenceName: 'Outils : Python, TensorFlow',
      journalName: 'Compétence : B.3. Tests, B.5. Production de la documentation',
      authors: '',
      link: '',
      description:'Pendant le développement du projet Braille-Character-Recognition, j\'ai mené des tests rigoureux pour vérifier la conformité aux spécifications. J\'ai planifié et exécuté des tests unitaires, d\'intégration et de validation, en documentant soigneusement les résultats pour assurer la qualité du produit final.'
    },
    {
      title: 'Titre du projet : StudyPlace',
      conferenceName: 'Outils : JavaScript, React Native, Expo',
      journalName: 'Compétence : A.10. Expérience utilisateur',
      authors: '',
      link: '',
      description:
      'En contribuant au projet StudyPlace, j\'ai placé l\'utilisateur au cœur du développement. J\'ai soigneusement étudié leurs besoins, itéré sur les fonctionnalités et les interfaces pour garantir une expérience intuitive et efficace. Cette approche axée sur l\'utilisateur a conduit à une application conviviale, répondant parfaitement aux attentes des utilisateurs et renforçant leur engagement.'
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
  footer: `Made with <a 
  className="text-primary" href="https://github.com/arifszn/gitprofile"
  target="_blank"
  rel="noreferrer"
  ><u>GitProfile</u></a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
