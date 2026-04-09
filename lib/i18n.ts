export const languages = {
  en: 'EN',
  uz: 'UZ',
  ru: 'RU'
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const greetings: Record<Lang, string> = {
  en: 'Hello',
  uz: 'Salom',
  ru: 'Привет',
};

export const t: Record<Lang, Record<string, string>> = {
  en: {
    role: 'Full-Stack Developer',
    tagline: 'I build web apps that are fast, reliable, and easy to love.',

    nav_skills: 'Skills',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_contact: 'Contact',

    skills_title: 'Skills',
    skills_sub: 'The tools and tech I actually use day-to-day',

    about_title: 'About Me',
    about_text:
      'Hey! I’m a full-stack developer based in Tashkent. I recently completed my studies at Najot Ta’lim, and I love pushing myself to show my full potential by turning ideas into clean, fast, and reliable web apps. When I’m not coding, I’m usually exploring retro music, tinkering with cars, or keeping up with design trends.',

    projects_title: 'Projects',
    projects_sub: 'Some of my favorite work — and more coming soon',

    contact_title: 'Let’s Chat',
    contact_sub: 'Always open for cool projects or collaborations',
    contact_btn: 'Say Hello',

    loading: 'Loading…',

    not_found_title: 'Oops! Page not found',
    not_found_sub: 'Looks like you took a wrong turn somewhere.',
    not_found_btn: 'Back Home',

    interests_title: 'Beyond Code',

    advanced: 'Advanced',
    medium: 'Intermediate',
    basic: 'Beginner',
  },

  uz: {
    role: 'Full-Stack Dasturchi',
    tagline: 'Men tez, ishonchli va yoqimli web-ilovalar yarataman.',

    nav_skills: 'Ko‘nikmalar',
    nav_about: 'Men haqimda',
    nav_projects: 'Loyihalar',
    nav_contact: 'Aloqa',

    skills_title: 'Ko‘nikmalar',
    skills_sub: 'Kunlik ishlashda foydalanuvchi texnologiyalarim',

    about_title: 'Men haqimda',
    about_text:
      'Salom! Men Toshkentda faoliyat yurituvchi full-stack dasturchiman va yaqinda Najot Ta’limda o‘qishni tamomlaganman. Kod yozish orqali o‘z potentsialimni to‘liq namoyon qilishni va g‘oyalarni tez, toza va ishonchli web-ilovalarga aylantirishni yaxshi ko‘raman. Bo‘sh vaqtimda retro musiqini tinglash, avtomobillar bilan shug‘ullanish va dizayn trendlarini o‘rganishni yoqtiraman.',

    projects_title: 'Loyihalar',
    projects_sub: 'Eng sevimli ishlashlarim — va yana tez orada ko‘proq',

    contact_title: 'Gaplashamiz',
    contact_sub: 'Qiziqarli loyihalar va hamkorliklarga har doim ochiqman',
    contact_btn: 'Salom aytish',

    loading: 'Yuklanmoqda…',

    not_found_title: 'Ups! Sahifa topilmadi',
    not_found_sub: 'Qayerdadir yo‘lni adashtirdingiz.',
    not_found_btn: 'Bosh sahifaga',

    interests_title: 'Koddan tashqarida',

    advanced: 'Yuqori daraja',
    medium: 'O‘rta daraja',
    basic: 'Boshlang‘ich daraja',
  },

  ru: {
    role: 'Full-Stack разработчик',
    tagline: 'Создаю быстрые, надежные и удобные веб-приложения.',

    nav_skills: 'Навыки',
    nav_about: 'Обо мне',
    nav_projects: 'Проекты',
    nav_contact: 'Контакты',

    skills_title: 'Навыки',
    skills_sub: 'Технологии, которые я реально использую каждый день',

    about_title: 'Обо мне',
    about_text:
      'Привет! Я full-stack разработчик из Ташкента. Недавно я завершил обучение в Najot Ta’lim, и мне нравится показывать свой полный потенциал, превращая идеи в чистые, быстрые и надежные веб-приложения. В свободное время слушаю ретро музыку, интересуюсь автомобилями и слежу за трендами в дизайне.',

    projects_title: 'Проекты',
    projects_sub: 'Некоторые из моих любимых проектов — и скоро добавлю ещё',

    contact_title: 'Давай поговорим',
    contact_sub: 'Всегда открыт для интересных проектов и сотрудничества',
    contact_btn: 'Сказать привет',

    loading: 'Загрузка…',

    not_found_title: 'Упс! Страница не найдена',
    not_found_sub: 'Похоже, вы свернули не туда.',
    not_found_btn: 'На главную',

    interests_title: 'Вне кода',

    advanced: 'Продвинутый',
    medium: 'Средний',
    basic: 'Начальный',
  }
};