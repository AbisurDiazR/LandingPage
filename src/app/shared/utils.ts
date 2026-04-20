export const DEFAULT_LANGUAGE = 'es';
export const NAVBAR_ITEMS = [
  "NAVBAR.nav-home",
  "NAVBAR.nav-about",
  "NAVBAR.nav-skills",
  "NAVBAR.nav-services",
  "NAVBAR.nav-portfolio",
  "NAVBAR.nav-testimonial",
  "NAVBAR.nav-contact"
];

/** Define una imagen WebP responsiva con varias dimensiones (widths en píxeles) */
export interface ResponsiveImage {
  base: string;
  widths: number[];
  defaultWidth: number;
}

/** Imagen de perfil para Hero y About: WebP responsiva con varias dimensiones */
export const HERO_PROFILE_IMAGE: ResponsiveImage = {
  base: 'assets/images/hero-profile',
  widths: [400, 800, 1200],
  defaultWidth: 800,
};

/** Testimonios desde perfil Workana (avatar externo, sin srcset) */
export interface TestimonialItem {
  clientName: string;
  projectTitle: string;
  quote: string;
  avatarUrl: string;
  rating: number;
  date?: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    clientName: 'Iker Llona',
    projectTitle: 'Diseño de MVP para app, gestión cocinas en Glide',
    quote: '',
    avatarUrl: 'https://cf.workana.com/logos/07/e8286023ec11e9bfaffbfda8828b12/1960676.jpg',
    rating: 5,
    date: 'Hace 6 meses',
  },
  {
    clientName: 'cayu mendoza',
    projectTitle: 'Arrendamiento',
    quote: '',
    avatarUrl: 'https://cf.workana.com/logos/be/114dd009f611e88d594f951694ab88/50990.png',
    rating: 0,
    date: 'Hace 7 meses',
  },
  {
    clientName: 'Salvador Gonzalez',
    projectTitle: 'Formulario de Prospección',
    quote: 'Todo muy bien, pronta respuesta y sobre todo en cuanto solicitaba cambios los hacía rápidamente.',
    avatarUrl: 'https://cf.wkncdn.com/static/assets/build/img/jobs/sneak-peek-user.dc8777a76.svg',
    rating: 5,
    date: 'Hace 8 meses',
  },
  {
    clientName: 'carlos juarez',
    projectTitle: 'App para conectar profesores con alumnos (tareas y proyectos)',
    quote: '',
    avatarUrl: 'https://cf.workana.com/logos/ba/b456f994d84befa42dd90bc02ea9c7/IMG-20181112-WA0005.jpg',
    rating: 0,
    date: 'Hace 4 años',
  },
  {
    clientName: 'Juan J da Rosa',
    projectTitle: 'Base de datos de twitters',
    quote: '',
    avatarUrl: 'https://cf.workana.com/logos/b7/e9f0c588534cdf80a55ae87c366c9e/2886462.jpg',
    rating: 4,
    date: 'Hace 5 años',
  },
];

/** Genera la cadena srcset para una imagen responsiva WebP */
export function getSrcSet(img: ResponsiveImage, ext: string = 'webp'): string {
  return img.widths.map(w => `${img.base}-${w}.${ext} ${w}w`).join(', ');
}

/** Devuelve la URL por defecto de una imagen responsiva */
export function getDefaultSrc(img: ResponsiveImage, ext: string = 'webp'): string {
  return `${img.base}-${img.defaultWidth}.${ext}`;
}

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

/** Proyectos destacados: imagen WebP responsiva con dimensiones distintas por proyecto */
export const PROJECTS: ProjectItem[] = [
  { id: 'club51', image: { base: 'assets/images/projects/club51', widths: [320, 640, 960], defaultWidth: 640 }, titleKey: 'PROJECTS.club51.title', descKey: 'PROJECTS.club51.desc', altKey: 'PROJECTS.club51.alt' },
  { id: 'ado', image: { base: 'assets/images/projects/ado', widths: [320, 640, 960], defaultWidth: 640 }, titleKey: 'PROJECTS.ado.title', descKey: 'PROJECTS.ado.desc', altKey: 'PROJECTS.ado.alt' },
  { id: 'donaciones', image: { base: 'assets/images/projects/donaciones', widths: [320, 640, 960], defaultWidth: 640 }, titleKey: 'PROJECTS.donaciones.title', descKey: 'PROJECTS.donaciones.desc', altKey: 'PROJECTS.donaciones.alt' },
  { id: 'weedapolis', image: { base: 'assets/images/projects/weedapolis', widths: [320, 640, 960], defaultWidth: 640 }, titleKey: 'PROJECTS.weedapolis.title', descKey: 'PROJECTS.weedapolis.desc', altKey: 'PROJECTS.weedapolis.alt' },
  { id: 'lumbini', image: { base: 'assets/images/projects/lumbini', widths: [320, 640, 960], defaultWidth: 640 }, titleKey: 'PROJECTS.lumbini.title', descKey: 'PROJECTS.lumbini.desc', altKey: 'PROJECTS.lumbini.alt' },
  { id: 'cumbres', image: { base: 'assets/images/projects/cumbres', widths: [320, 640, 960], defaultWidth: 640 }, titleKey: 'PROJECTS.cumbres.title', descKey: 'PROJECTS.cumbres.desc', altKey: 'PROJECTS.cumbres.alt' },
  { id: 'cuautepec', image: { base: 'assets/images/projects/cuautepec', widths: [320, 640, 960], defaultWidth: 640 }, titleKey: 'PROJECTS.cuautepec.title', descKey: 'PROJECTS.cuautepec.desc', altKey: 'PROJECTS.cuautepec.alt' },
  { id: 'auriga', image: { base: 'assets/images/projects/auriga', widths: [320, 640, 960], defaultWidth: 640 }, titleKey: 'PROJECTS.auriga.title', descKey: 'PROJECTS.auriga.desc', altKey: 'PROJECTS.auriga.alt' },
];

export interface ProjectItem {
  id: string;
  image: ResponsiveImage;
  titleKey: string;
  descKey: string;
  altKey: string;
}
