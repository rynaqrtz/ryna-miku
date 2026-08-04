import { Skill, SocialLink, WaifuImage } from './types';

export const GITHUB_USERNAME = 'rynaqrtz';

export const SKILLS: Skill[] = [
  { name: 'Node.js', slug: 'nodedotjs', color: '339933', darkColor: '339933' },
  { name: 'Express.js', slug: 'express', color: '000000', darkColor: 'FFFFFF' },
  { name: 'NestJS', slug: 'nestjs', color: 'E0234E', darkColor: 'E0234E' },
  { name: 'Bun', slug: 'bun', color: 'CC9B4B', darkColor: 'FBF0DF' },
  { name: 'Go', slug: 'go', color: '00ADD8', darkColor: '00ADD8' },
  { name: 'Next.js', slug: 'nextdotjs', color: '000000', darkColor: 'FFFFFF' },
  { name: 'Hono', slug: 'hono', color: 'FF5A1F', darkColor: 'FF5A1F' },
  { name: 'Elysia', slug: 'elysia', color: '8B5CF6', darkColor: '8B5CF6' },
  { name: 'Deno', slug: 'deno', color: '000000', darkColor: 'FFFFFF' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6', darkColor: '3178C6' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E', darkColor: 'F7DF1E' },
  { name: 'Python', slug: 'python', color: '3776AB', darkColor: '3776AB' },
  { name: 'Rust', slug: 'rust', color: '000000', darkColor: 'FFFFFF' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1', darkColor: '4169E1' },
  { name: 'MySQL', slug: 'mysql', color: '4479A1', darkColor: '4479A1' },
  { name: 'MongoDB', slug: 'mongodb', color: '47A248', darkColor: '47A248' },
  { name: 'Redis', slug: 'redis', color: 'DC382D', darkColor: 'DC382D' },
  { name: 'GraphQL', slug: 'graphql', color: 'E10098', darkColor: 'E10098' },
  { name: 'Docker', slug: 'docker', color: '2496ED', darkColor: '2496ED' },
  { name: 'Prisma', slug: 'prisma', color: '2D3748', darkColor: 'FFFFFF' },
];

export const SOCIALS: SocialLink[] = [
  { name: 'GitHub', url: `https://github.com/${GITHUB_USERNAME}`, icon: 'github', color: 'bg-zinc-900' },
  { name: 'Community', url: 'https://whatsapp.com/channel/0029Vb8NhkoCHDyep1i2s00m', icon: 'globe', color: 'bg-green-600' },
  { name: 'WhatsApp', url: 'https://wa.me/6285775853364', icon: 'phone', color: 'bg-green-500' },
];

export const WAIFU_GALLERY: WaifuImage[] = [
  { url: 'https://cdn.zass.in/TyOAa5p9MX.jpg', alt: 'Miku 1' },
  { url: 'https://cdn.zass.in/2vhU9lHmPa.jpg', alt: 'Miku 2' },
  { url: 'https://cdn.zass.in/s21ov6OLBp.jpg', alt: 'Miku 3' },
  { url: 'https://cdn.zass.in/jpuFzbHGeX.jpg', alt: 'Miku 4' },
  { url: 'https://cdn.zass.in/MoqV0lNVa3.jpg', alt: 'Miku 5' },
  { url: 'https://cdn.zass.in/bkd4J2GPyI.jpg', alt: 'Miku 6' },
];

export const BGM_TITLE = 'Ambient Focus';

export const HERO_QUOTE = 'In the syntax of life, you are my favorite tag.';

export const NOW_LEARNING = {
  title: 'Go Routing & gRPC',
  description: 'Lagi dalemin routing pattern di Go dan komunikasi service-to-service pakai gRPC — protobuf, streaming, sama gimana desain contract API yang bener.',
};

export const TYPING_ROLES = ['Backend Developer', 'Cat Lover', 'Anime Lover', 'Otaku'];
