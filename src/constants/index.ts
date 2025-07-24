import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  php,
  git,
  figma,
  serti1,
  tuku,
  carrent,
  serti2,
  threejs,
  laravel,
  serti3,
  globalvista,
  cyber,
  retrolux,
  AI,
  phplaravel,
  cloud,
  aws,
} from "../assets";

export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services: TService[] = [
  { title: "Web Developer", icon: web },
  { title: "Front End Developer", icon: mobile },
  { title: "Backend Developer", icon: backend },
  { title: "Application Developer", icon: creator },
];

const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "PHP", icon: php },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "laravel", icon: laravel },
];

const experiences: TExperience[] = [
  {
    title: "Lomba Sagasitas",
    companyName: "Tuku",
    icon: tuku,
    iconBg: "#ffffffff",
    date: "March 2020 - April 2021",
    points: [
      "Merupakan Lomba pertama saya di bidang IT",
      "Di lomba ini saya bersama rekan saya ber 4",
      "Lomba ini Mengacu pada tema Sekolah Sehat",
    ],
  },
  {
    title: "Pelatihan bersama komdigi",
    companyName: "Cyber",
    icon: cyber,
    iconBg: "#ff0000ff",
    date: "2025-Present",
    points: [
     "Mempelajari dasar-dasar keamanan siber, termasuk enkripsi, firewall, dan keamanan jaringan.",
  "Melakukan simulasi Ethical Hacking dan Penetration Testing untuk mengidentifikasi serta mengamankan celah pada sistem.",
  "Mengembangkan strategi manajemen risiko keamanan siber dan kebijakan mitigasi untuk compliance regulasi.",
  "Melatih respon insiden dan investigasi forensik digital untuk menangani ancaman siber secara efektif.",
],
  },
  {
  title: "Lomba di SMKN 8",
  companyName: "SMKN 8",
  icon: cloud, // Ganti dengan ikon yang sesuai jika ada
  iconBg: "#383E56",
  date: "2025-Present",
  points: [
    "Mengikuti lomba pengembangan aplikasi web dengan menggunakan Html dan Css,Js,Scss, dan berbagai framework yang lumayan banyak.",
    "Bekerja sama dengan tim yang terdiri dari desainer, pembimbing, dan rekan satu tim untuk menghasilkan proyek berkualitas.",
    "Menerapkan desain responsif dan memastikan aplikasi dapat berjalan di berbagai jenis browser.",
    "Melakukan presentasi proyek dan menerima masukan dari juri serta peserta lain untuk peningkatan kualitas.",
  ],
},
 {
  title: "Pelatihan Laravel Bersama PT Indi Tech",
  companyName: "Indi Tech",
  icon: phplaravel, // Bisa diganti dengan ikon pelatihan jika ada
  iconBg: "#E6DEDD",
  date: " 2025 - Present",
  points: [
    "Mengikuti pelatihan intensif Laravel yang diselenggarakan oleh PT Indi Tech untuk memperdalam pemahaman tentang pengembangan aplikasi web berbasis PHP.",
    "Mempelajari konsep MVC, routing, blade templating, serta integrasi database menggunakan Eloquent ORM.",
    "Mengerjakan studi kasus proyek nyata secara individu maupun tim sebagai bagian dari evaluasi pelatihan.",
    "Mendapatkan arahan dan feedback langsung dari mentor profesional di bidang web development.",
  ],
},
  {
    title: "Pelatihan bersama Sagasitas AWS Cloud Computing",
companyName: "AWS",
icon: aws,
iconBg: "#E6DEDD",
date:  "2025 - Present",
points: [
  "Mengikuti pelatihan intensif yang difokuskan pada layanan dan infrastruktur AWS Cloud Computing.",
  "Melakukan praktik langsung dalam membangun, mengelola, dan mengamankan infrastruktur cloud menggunakan AWS.",
  "Bekerja dalam tim untuk menyelesaikan studi kasus dan proyek berbasis cloud sesuai dengan standar industri.",
],

  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Zidane",
    designation: "Student",
    company: "Smkn 46",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Filthan",
    designation: "Student",
    company: "Smkn 46",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Raffah",
    designation: "Student",
    company: "Smkn 46",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Sekolah Sehat",
    description: "Merupakan Website pertama saya",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JS", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/haikalrsy/sekolah-sehat",
  },
  // Project tambahanmu
  {
    name: "Global Vista",
    description: "Website lomba di Smkn 8",
    tags: [
      { name: "Tailwind", color: "text-blue-500" },
      { name: "Scss", color: "text-green-500" },
    ],
    image: globalvista,
    sourceCodeLink: "https://github.com/haikalrsy/lomba",
  },
   {
    name: "retrolux",
    description: "Merupakan Website project akhir saya di Smkn 46",
    tags: [
      { name: "Html", color: "blue-text-gradient" },
      { name: "Tailwind", color: "green-text-gradient" },
      { name: "Js", color: "pink-text-gradient" },
    ],
    image: retrolux,
    sourceCodeLink: "https://github.com/haikalrsy/retro-lux",
  },
   {
    name: "46 Tech",
    description: "Merupakan Website Lomba saya di uty",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JS", color: "pink-text-gradient" },
    ],
    image: AI,
    sourceCodeLink: "https://github.com/haikalrsy/46tecch",
  },
];

const certificates = [
  {
    name: "Lomba UTY",
    issuer: "Web Design",
    image: serti1,
    certificateLink: "https://www.freecodecamp.org/certificate/your-link",
  },
  {
    name: "Komdigi Cyber Security",
    issuer: "Komdigi",
    image: serti3,
    certificateLink: "https://www.aws.training/certificate/your-link",
  },
  {
    name: "Lomba SMKN 8",
    issuer: "Web Design",
    image: serti2,
    certificateLink: "https://www.aws.training/certificate/your-link",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
};
