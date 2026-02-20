export const DEFAULT_LANGUAGE = 'es';
export const NAVBAR_ITEMS = [
  "NAVBAR.nav-home",
  "NAVBAR.nav-about",
  "NAVBAR.nav-services",
  "NAVBAR.nav-skills",
  "NAVBAR.nav-works",
  "NAVBAR.nav-faq",
  "NAVBAR.nav-contact"
];

/** Número para WhatsApp (sin espacios ni +). México: +52 747 175 2140 */
export const WHATSAPP_NUMBER = '527471752140';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Habilidades desde CV - hardcodeadas por el momento */
export const SKILLS = {
  frontend: [
    'Angular (v12+)',
    'React',
    'Flutter',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'SCSS'
  ],
  backend: [
    'Node.js',
    'Express',
    'Java'
  ],
  databases: [
    'MongoDB',
    'MySQL',
    'Firebase'
  ],
  cloudDevOps: [
    'AWS',
    'Docker',
    'Git',
    'CI/CD',
    'IaC'
  ],
  tools: [
    'Jira',
    'GitHub',
    'Postman',
    'Figma'
  ],
  methodologies: [
    'Ágil',
    'Scrum'
  ]
} as const;

/** Proyectos destacados con imagen y clave de traducción (title, desc, alt para SEO en búsqueda de imágenes) */
export const PROJECTS = [
  { id: 'club51', image: 'assets/images/projects/club51.png', titleKey: 'PROJECTS.club51.title', descKey: 'PROJECTS.club51.desc', altKey: 'PROJECTS.club51.alt' },
  { id: 'ado', image: 'assets/images/projects/ado.png', titleKey: 'PROJECTS.ado.title', descKey: 'PROJECTS.ado.desc', altKey: 'PROJECTS.ado.alt' },
  { id: 'donaciones', image: 'assets/images/projects/donaciones.jpg', titleKey: 'PROJECTS.donaciones.title', descKey: 'PROJECTS.donaciones.desc', altKey: 'PROJECTS.donaciones.alt' },
  { id: 'weedapolis', image: 'assets/images/projects/weedapolis.png', titleKey: 'PROJECTS.weedapolis.title', descKey: 'PROJECTS.weedapolis.desc', altKey: 'PROJECTS.weedapolis.alt' },
  { id: 'lumbini', image: 'assets/images/projects/lumbini.png', titleKey: 'PROJECTS.lumbini.title', descKey: 'PROJECTS.lumbini.desc', altKey: 'PROJECTS.lumbini.alt' },
  { id: 'cumbres', image: 'assets/images/projects/cumbres.png', titleKey: 'PROJECTS.cumbres.title', descKey: 'PROJECTS.cumbres.desc', altKey: 'PROJECTS.cumbres.alt' },
  { id: 'cuautepec', image: 'assets/images/projects/cuautepec.png', titleKey: 'PROJECTS.cuautepec.title', descKey: 'PROJECTS.cuautepec.desc', altKey: 'PROJECTS.cuautepec.alt' },
  { id: 'auriga', image: 'assets/images/projects/auriga.png', titleKey: 'PROJECTS.auriga.title', descKey: 'PROJECTS.auriga.desc', altKey: 'PROJECTS.auriga.alt' },
];
