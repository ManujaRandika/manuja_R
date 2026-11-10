// ── Everything on the page lives here. Swap these values for your own. ───────
// Images: drop files in /public and reference them as "/my-photo.jpg",
// or leave the value empty ("") to show a placeholder block.

import {
  RiAdvertisementLine, RiEmotionLine, RiFilmLine, RiImageAiLine, RiInstagramFill, RiLinkedinFill, RiMicLine,
  RiPaletteLine, RiPlayCircleLine, RiQuillPenLine, RiShapesLine, RiUserVoiceLine, RiYoutubeFill,
} from '@remixicon/react'

export const site = {
  name: 'Manuja',
  fullName: ['Manuja', 'Ranaweera'],
  role: 'AI Content Creator & Project Manager',
  // An empty email hides the copy button, an empty youtube hides the channel link.
  email: 'manujarandika67@gmail.com',
  youtube: '',
  location: 'Sri Lanka, working worldwide',
  available: true,
  availableLabel: 'Available for new project',
  portrait: '/hero.webp',
  // Links start with "/" so they work from the projects page too.
  nav: [
    { label: 'Home', href: '/#top' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Education', href: '/#education' },
    { label: 'Services', href: '/#services' },
  ],
  footerNav: [
    { label: 'Home', href: '/#top' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Services', href: '/#services' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Education', href: '/#education' },
  ],
  // Footer icons. An icon only shows once its href is filled in.
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manuja-randika-216776345/', icon: RiLinkedinFill },
    { label: 'Instagram', href: '', icon: RiInstagramFill },
    { label: 'YouTube', href: '', icon: RiYoutubeFill },
  ],
}

export const stats = [
  { label: 'Experience:', value: '1+ Year of Experience' },
  { label: 'Speciality:', value: 'AI Video, Visual Content Creation & Project Management' },
  { label: 'Projects:', value: '150+ Projects Completed' },
  { label: 'Location:', value: 'Sri Lanka, working worldwide' },
]

// Every project shows on /projects/. Set featured to a number (1–9) to also show it on the home page in that spot of the 3x3 grid.
// full: optional full-size version (.mp4 with sound, or an image); clicking the card opens it in a viewer.
// sub drives the filter buttons on /projects/.
export const projects = [
  { category: 'AI Content Creation', featured: 1, sub: 'Realistic', name: 'Morning Ritual | AI Lifestyle Film', tags: ['AI Video', 'Cinematic Ad', 'Storytelling'], image: '/projects/morning-ritual-poster.webp', video: '/projects/morning-ritual.mp4', full: '/projects/full/morning-ritual.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: 4, sub: 'Motion Graphics', name: 'Karva | AI Motion Product Ad', tags: ['AI Video', 'Motion Design', 'Product Ad'], image: '/projects/karva-poster.webp', video: '/projects/karva.mp4', full: '/projects/full/karva.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: 6, sub: 'UGC & Talking Heads', name: 'AI UGC Talking Head Hook', tags: ['AI UGC', 'Ad Hook', 'Talking Head'], image: '/projects/ai-ugc-hook-poster.webp', video: '/projects/ai-ugc-hook.mp4', full: '/projects/full/ai-ugc-hook.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: 2, sub: 'Claymation', name: 'Zumbra | AI Claymation Product Ad', tags: ['AI Video', 'Claymation Style', 'Product Ad'], image: '/projects/zumbra-poster.webp', video: '/projects/zumbra.mp4', full: '/projects/full/zumbra.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: '3D Animation', name: 'Better Habits | AI 3D Animated Story Ad', tags: ['AI Animation', 'Character Design', 'Storytelling'], image: '/projects/better-habits-poster.webp', video: '/projects/better-habits.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: 7, sub: 'UGC & Talking Heads', name: 'Ayurveda Guru | AI Talking Head Presenter', tags: ['AI Avatar', 'Talking Head', 'Lip-sync'], image: '/projects/ai-talking-head-ayurveda-poster.webp', video: '/projects/ai-talking-head-ayurveda.mp4', full: '/projects/full/ai-talking-head-ayurveda.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'UGC & Talking Heads', name: 'TCM Master | AI Talking Head Presenter', tags: ['AI Avatar', 'Talking Head', 'Lip-sync'], image: '/projects/ai-talking-head-tcm-poster.webp', video: '/projects/ai-talking-head-tcm.mp4', full: '/projects/full/ai-talking-head-tcm.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: 8, sub: 'Realistic', name: 'Quiet Distance | AI Realistic Drama Ad', tags: ['AI Video', 'Photorealistic', 'Storytelling'], image: '/projects/quiet-distance-poster.webp', video: '/projects/quiet-distance.mp4', full: '/projects/full/quiet-distance.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Realistic', name: 'Checkout Line | AI Realistic Drama Ad', tags: ['AI Video', 'Photorealistic', 'Emotional Ad'], image: '/projects/checkout-line-poster.webp', video: '/projects/checkout-line.mp4', full: '/projects/full/checkout-line.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Realistic', name: 'Hot Flash at 30,000 ft | AI Realistic Drama Ad', tags: ['AI Video', 'Photorealistic', 'Storytelling'], image: '/projects/hot-flash-poster.webp', video: '/projects/hot-flash.mp4', full: '/projects/full/hot-flash.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Claymation', name: 'Zinc Boost | AI Claymation Supplement Ad', tags: ['AI Video', 'Claymation Style', 'Product Ad'], image: '/projects/zinc-boost-poster.webp', video: '/projects/zinc-boost.mp4', full: '/projects/full/zinc-boost.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Claymation', name: 'Looked Like Herself | AI Claymation Story Ad', tags: ['AI Video', 'Claymation Style', 'Storytelling'], image: '/projects/clay-mirror-poster.webp', video: '/projects/clay-mirror.mp4', full: '/projects/full/clay-mirror.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Song Ads', name: 'The Receipt | AI Animated Menopause Song Ad', tags: ['AI Song Ad', '3D Animation', 'Storytelling'], image: '/projects/the-receipt-poster.webp', video: '/projects/the-receipt.mp4', full: '/projects/full/the-receipt.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: 3, sub: 'Song Ads', name: 'BuzzyBooth | AI Animated Song Ad', tags: ['AI Song Ad', '3D Animation', 'Product Ad'], image: '/projects/buzzybooth-poster.webp', video: '/projects/buzzybooth.mp4', full: '/projects/full/buzzybooth.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: 5, sub: '3D Animation', name: 'General Juice | AI 3D Animated Character Ad', tags: ['AI Animation', 'Character Design', 'Product Ad'], image: '/projects/general-juice-poster.webp', video: '/projects/general-juice.mp4', full: '/projects/full/general-juice.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: '3D Animation', name: 'Crowned Hero | AI 3D Animated Character Ad', tags: ['AI Animation', 'Character Design', 'Product Ad'], image: '/projects/crowned-hero-poster.webp', video: '/projects/crowned-hero.mp4', full: '/projects/full/crowned-hero.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Motion Graphics', name: 'Brez | AI Motion Product Ad', tags: ['AI Video', 'Motion Design', 'Product Ad'], image: '/projects/brez-poster.webp', video: '/projects/brez.mp4', full: '/projects/full/brez.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: '3D Animation', name: 'Gym Day | ZackD-Style AI Animated Story', tags: ['AI Animation', 'ZackD Style', 'Storytelling'], image: '/projects/gym-day-poster.webp', video: '/projects/gym-day.mp4', full: '/projects/full/gym-day.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: 9, sub: 'Fitness', name: 'Treadmill Run | AI Realistic Fitness Clip', tags: ['AI Video', 'Photorealistic', 'Fitness'], image: '/projects/treadmill-run-poster.webp', video: '/projects/treadmill-run.mp4', full: '/projects/full/treadmill-run.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Fitness', name: 'Weighted Core | AI Realistic Fitness Clip', tags: ['AI Video', 'Photorealistic', 'Fitness'], image: '/projects/weighted-core-poster.webp', video: '/projects/weighted-core.mp4', full: '/projects/full/weighted-core.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Fitness', name: 'Garden Squats | AI Realistic Fitness Clip', tags: ['AI Video', 'Photorealistic', 'Fitness'], image: '/projects/garden-squats-poster.webp', video: '/projects/garden-squats.mp4', full: '/projects/full/garden-squats.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Fitness', name: 'Home Cardio | AI Realistic Fitness Clip', tags: ['AI Video', 'Photorealistic', 'Fitness'], image: '/projects/home-cardio-poster.webp', video: '/projects/home-cardio.mp4', full: '/projects/full/home-cardio.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Fitness', name: 'Chair Squats | AI Realistic Fitness Clip', tags: ['AI Video', 'Photorealistic', 'Fitness'], image: '/projects/chair-squats-poster.webp', video: '/projects/chair-squats.mp4', full: '/projects/full/chair-squats.mp4', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Illustrations', name: 'Rough Morning Cat | AI Character Illustration', tags: ['AI Image', 'Character Art', 'Storytelling'], image: '/projects/art/morning-cat.webp', full: '/projects/art/morning-cat-full.webp', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Illustrations', name: 'Work From Home | AI Humor Illustration', tags: ['AI Image', 'Cartoon Style', 'Relatable Humor'], image: '/projects/art/wfh-slippers.webp', full: '/projects/art/wfh-slippers-full.webp', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Illustrations', name: 'January 1st vs 5th | AI Meme Illustration', tags: ['AI Image', 'Meme Format', 'Social Post'], image: '/projects/art/january-dog.webp', full: '/projects/art/january-dog-full.webp', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Illustrations', name: '1% Battery | AI Cartoon Illustration', tags: ['AI Image', 'Cartoon Style', 'Social Post'], image: '/projects/art/low-battery.webp', full: '/projects/art/low-battery-full.webp', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Illustrations', name: 'Late-Night Delivery | AI Story Illustration', tags: ['AI Image', 'Cartoon Style', 'Storytelling'], image: '/projects/art/late-night-delivery.webp', full: '/projects/art/late-night-delivery-full.webp', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Illustrations', name: 'Runtime Error | AI Developer Humor Illustration', tags: ['AI Image', 'Cartoon Style', 'Relatable Humor'], image: '/projects/art/runtime-error.webp', full: '/projects/art/runtime-error-full.webp', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Character Design', name: 'Fox Mascot | AI Character Sheet', tags: ['AI Image', 'Mascot Design', 'Turnaround & Expressions'], image: '/projects/art/fox-character-sheet.webp', full: '/projects/art/fox-character-sheet-full.webp', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Character Design', name: 'Panda | AI Sticker Set', tags: ['AI Image', 'Sticker Design', 'Kawaii Style'], image: '/projects/art/panda-stickers.webp', full: '/projects/art/panda-stickers-full.webp', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Digital Art', name: 'Rainy Café | AI Cozy Scene Art', tags: ['AI Image', 'Atmospheric Scene', 'Digital Painting'], image: '/projects/art/rainy-cafe.webp', full: '/projects/art/rainy-cafe-full.webp', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Digital Art', name: 'Visit the Tropics | AI Retro Travel Poster', tags: ['AI Image', 'Retro Poster', 'Print Design'], image: '/projects/art/tropics-poster.webp', full: '/projects/art/tropics-poster-full.webp', href: '#projects' },
  { category: 'AI Content Creation', featured: false, sub: 'Digital Art', name: 'Seaside Summer | AI Anime Landscape', tags: ['AI Image', 'Anime Style', 'Landscape'], image: '/projects/art/seaside-anime.webp', full: '/projects/art/seaside-anime-full.webp', href: '#projects' },
]

export const skills = [
  {
    title: 'AI Video Production',
    items: ['AI Product Ads', 'Cinematic Lifestyle Films', 'Short-form Vertical Video', 'UGC & Talking Head Ads', '3D & Claymation Animation', 'Song & Jingle Ads'],
  },
  {
    title: 'AI Images & Design',
    items: ['Character Design & Mascots', 'Illustrations & Social Posts', 'Sticker Sets', 'Posters & Print Art', 'Product Visuals', 'Brand-consistent Visual Assets'],
  },
  {
    title: 'Creative Direction',
    items: ['Concepts & Ad Angles', 'Scripts & Hooks', 'Storyboarding & Visual Storytelling', 'AI Voiceovers & Lip-sync', 'Editing & Sound Design', 'Platform-ready Delivery'],
  },
]

export const services = [
  {
    title: 'AI Video',
    items: [
      { label: 'AI Product Ads', icon: RiAdvertisementLine },
      { label: 'Motion Graphics', icon: RiShapesLine },
      { label: 'Cinematic Brand Films', icon: RiFilmLine },
      { label: 'Short-form Social Videos', icon: RiPlayCircleLine },
      { label: 'AI UGC & Talking Heads', icon: RiUserVoiceLine },
      { label: 'AI Voiceovers', icon: RiMicLine },
    ],
  },
  {
    title: 'AI Visuals',
    items: [
      { label: 'AI Image Generation', icon: RiImageAiLine },
      { label: 'Character Design', icon: RiEmotionLine },
      { label: 'Brand Visual Assets', icon: RiPaletteLine },
      { label: 'Scripts & Storyboards', icon: RiQuillPenLine },
    ],
  },
]

// Section stays hidden until this has entries. Shape:
// { company: 'Company', dates: 'Jan 2025 - Present', role: 'Role', desc: 'One sentence', location: 'Sri Lanka', type: 'Full time' }
export const jobs = []

export const education = [
  { school: 'SLIIT City Uni', degree: 'B.Sc. in Software Engineering', level: 'Undergraduate' },
]

// Section stays hidden until this has entries. Real quotes only, with permission. Shape:
// { company: 'Company', quote: '2–3 sentences', name: 'Full Name', title: 'Their role', avatar: '/testimonials/name.webp' or '' }
export const testimonials = []

export const faqs = [
  { q: 'What kind of projects do you take on?', a: 'AI-generated content: product ads, UGC and talking head videos, cinematic brand films, 3D and claymation animation, illustrations and character designs. I work with brands, agencies, startups and creators.' },
  { q: 'How does AI content creation work?', a: 'You share your product, brand and goal. I shape the concept and script, generate and edit the visuals, and deliver ready-to-post videos and images in the formats you need, from vertical social clips to widescreen films, with rounds of feedback along the way.' },
  { q: 'Can you keep characters and products consistent across videos?', a: 'Yes. I build reference sheets for characters, avatars and products first, so the same look carries through every shot and every video in a campaign.' },
  { q: 'How long does a project take?', a: 'It depends on the scope. A single image set or short clip moves much faster than a multi-shot ad or a full campaign. After a quick chat about your requirements, I’ll give you a clear timeline before we start.' },
  { q: 'How much does a project cost?', a: 'Every project is quoted based on its scope, length and number of variations, so you only pay for what you need. You’ll get a clear quote upfront, with no surprises.' },
  { q: 'Do you work with clients outside Sri Lanka?', a: 'Yes, I work with clients worldwide. We can stay in touch over email, chat or video calls, and I adjust to your time zone for check-ins.' },
]

// Section stays hidden until this has entries. Shape:
// { title: 'Article title', date: 'Jan 12, 2026', read: '5 min read', image: '/articles/cover.webp', href: 'https://...' }
export const articles = []
