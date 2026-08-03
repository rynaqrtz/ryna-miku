import { Skill, SocialLink, WaifuImage } from './types';

export const GITHUB_USERNAME = 'rynaqrtz';

export const SKILLS: Skill[] = [
  { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
  { name: 'Express.js', slug: 'express', color: '000000' },
  { name: 'NestJS', slug: 'nestjs', color: 'E0234E' },
  { name: 'Bun', slug: 'bun', color: 'FBF0DF' },
  { name: 'Go', slug: 'go', color: '00ADD8' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
  { name: 'MySQL', slug: 'mysql', color: '4479A1' },
  { name: 'Redis', slug: 'redis', color: 'DC382D' },
  { name: 'Docker', slug: 'docker', color: '2496ED' },
  { name: 'Prisma', slug: 'prisma', color: '2D3748' },
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
