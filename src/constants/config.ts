type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
    certificates: Required<TSection>; 
  };
};

export const config: TConfig = {
  html: {
    title: "Haikal — Portfolio",
    fullName: "Muhammad Haikal Rasyaputra",
    email: "Muhammad Haikal Rasyaputra",
  },
  hero: {
    name: "Haikal Rasya",
    p: ["Saya adalah Pelajar Smkn ", "Yang mengambil jurusan Rpl atau Pplg ","yang ingin menjadi full stack developer"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `Saya adalah seorang siswa SMKN 46 Jakarta yang mengambil jurusan Rekayasa Perangkat Lunak (RPL). Saya memiliki minat yang besar di bidang teknologi dan terus belajar untuk mengembangkan kemampuan saya sebagai calon Fullstack Developer.
Selama masa belajar, saya aktif mengikuti berbagai lomba, pelatihan, dan kegiatan pembelajaran untuk memperluas wawasan serta meningkatkan keterampilan di dunia pemrograman. Saya bersemangat untuk terus belajar teknologi baru, membangun solusi yang bermanfaat, dan siap berkolaborasi untuk mewujudkan ide-ide menjadi aplikasi nyata.`,
    },
    experience: {
      p: "What I  have done so far",
      h2: "My Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Berikut adalah beberapa proyek unggulan yang saya kembangkan selama perjalanan saya di dunia teknologi. Setiap karya lahir dari proses eksplorasi ide, riset mendalam, hingga implementasi yang berfokus pada pengalaman pengguna. Semua ini mencerminkan semangat saya untuk terus berinovasi melalui desain dan pengembangan digital.`,
    },
  certificates: {
    p: "My Achievements",
    h2: "Certificates.",
    content: "Ini adalah sertifikat yang sudah saya peroleh.",
  },
},

  };
