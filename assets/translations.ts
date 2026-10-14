import { Language, TranslationContent } from './types';

export const translations: Record<Language, TranslationContent> = {
  en: {
    brand: 'ALIREZA DANESHMAND',
    nav: {
      home: 'Home',
      about: 'About Me',
      languageToggle: 'فارسی',
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Alireza Daneshmand',
      headline: 'Software Developer & Technology Enthusiast',
      supportingText: 'Exploring technology, building digital experiences, and turning ideas into reality through code.',
      ctaButton: 'Discover More',
      avatarAlt: 'Portrait of Alireza Daneshmand, Software Developer and Student',
    },
    about: {
      sectionTag: 'Background & Mission',
      title: 'About Me',
      paragraph1:
        'I am a student passionate about computer science, software development, web technologies, and programming. My journey is rooted in an active curiosity about how software powers modern digital experiences and solves real-world challenges.',
      paragraph2:
        'I am dedicated to continuous learning—deepening my foundational understanding of algorithms, exploring modern software paradigms, and refining my programming skills through deliberate practice and hands-on experimentation.',
      paragraph3:
        'For me, programming is both an intellectual craft and a creative discipline: turning abstract ideas into reliable, clean, and elegant code.',
      focusAreasTitle: 'Areas of Exploration',
    },
    interests: {
      title: 'Personal Interests',
      subtitle: 'Key technical domains that inspire my work and continuous study.',
      cards: [
        {
          id: 'software-dev',
          title: 'Software Development',
          description:
            'Focusing on foundational computer science principles, algorithmic problem solving, clean code architecture, and building structured applications.',
          icon: 'code',
        },
        {
          id: 'web-tech',
          title: 'Web Technologies',
          description:
            'Exploring modern reactive ecosystems, scalable frontend architectures, responsive design systems, and fast, accessible web experiences.',
          icon: 'globe',
        },
        {
          id: 'innovation-tech',
          title: 'Innovation & Technology',
          description:
            'Actively studying emerging technological advancements, developer tooling, modern software engineering workflows, and future-forward computing paradigms.',
          icon: 'sparkles',
        },
      ],
    },
    footer: {
      copyright: '© 2026 Alireza Daneshmand',
    },
  },
  fa: {
    brand: 'علیرضا دانشمند',
    nav: {
      home: 'صفحه اصلی',
      about: 'درباره من',
      languageToggle: 'English',
    },
    hero: {
      greeting: 'درود، من',
      name: 'علیرضا دانشمند',
      headline: 'توسعه‌دهنده نرم‌افزار و علاقه‌مند به فناوری',
      supportingText: 'کاوش در فناوری، خلق تجربه‌های دیجیتال و تبدیل ایده‌ها به واقعیت از طریق کدنویسی.',
      ctaButton: 'بیشتر بدانید',
      avatarAlt: 'تصویر پرتره علیرضا دانشمند، توسعه‌دهنده نرم‌افزار و دانشجو',
    },
    about: {
      sectionTag: 'پیشینه و مسیر',
      title: 'درباره من',
      paragraph1:
        'من دانشجویی علاقه‌مند به علوم کامپیوتر، توسعه نرم‌افزار، توسعه وب و برنامه‌نویسی هستم. اشتیاق من ریشه در کاوش پیرامون چگونگی شکل‌گیری دنیای دیجیتال و حل مسائل از طریق نرم‌افزار دارد.',
      paragraph2:
        'همواره در حال یادگیری فناوری‌های نوین و ارتقای مهارت‌های برنامه‌نویسی خود هستم؛ با تمرکز بر درک عمیق‌تر مبانی الگوریتمی و اصول مهندسی نرم‌افزار از طریق تمرین و کسب تجربه مداوم.',
      paragraph3:
        'برنامه‌نویسی برای من تلفیقی از تفکر دقیق و هنر آفرینش است: تبدیل ایده‌های نو به نرم‌افزارهای خوانا، بهینه و قابل اعتماد.',
      focusAreasTitle: 'حوزه‌های مورد علاقه',
    },
    interests: {
      title: 'علاقه‌مندی‌های فردی',
      subtitle: 'حوزه‌های فنی اصلی که الهام‌بخش یادگیری و پیشرفت مستمر من هستند.',
      cards: [
        {
          id: 'software-dev',
          title: 'توسعه نرم‌افزار',
          description:
            'تمرکز بر اصول بنیادین علوم کامپیوتر، حل الگوریتمی مسائل، معماری کدنویسی تمیز و ساخت سیستم‌های پایدار.',
          icon: 'code',
        },
        {
          id: 'web-tech',
          title: 'فناوری‌های وب',
          description:
            'کاوش در اکوسیستم‌های مدرن وب، ساختارهای واکنش‌گرا، طراحی رابط‌های کاربری چشم‌نواز و دسترس‌پذیر.',
          icon: 'globe',
        },
        {
          id: 'innovation-tech',
          title: 'نوآوری و فناوری',
          description:
            'مطالعه و پیگیری مداوم پیشرفت‌های نوظهور در دنیای فناوری، ابزارهای نوین توسعه نرم‌افزار و روندهای آینده کامپیوتر.',
          icon: 'sparkles',
        },
      ],
    },
    footer: {
      copyright: '© ۲۰۲۶ علیرضا دانشمند',
    },
  },
};
