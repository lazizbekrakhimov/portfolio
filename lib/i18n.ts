export const languages = {
  en: 'EN',
  ru: 'RU',
  uz: 'UZ',
  de: 'DE',
  fr: 'FR',
  ja: 'JA',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const greetings: Record<Lang, string> = {
  en: 'Hello',
  ru: 'Здравствуйте',
  uz: 'Salom',
  de: 'Hallo',
  fr: 'Bonjour',
  ja: 'こんにちは',
};

export const t: Record<Lang, Record<string, string>> = {
  en: {
    role: 'Full-Stack Developer',
    tagline: 'Crafting reliable and scalable digital products.',
    nav_skills: 'Skills',
    nav_about: 'About',
    nav_projects: 'Projects',
    nav_contact: 'Contact',

    skills_title: 'Skills',
    skills_sub: 'Technologies I use in production',

    about_title: 'About Me',
    about_text:
      'I am a full-stack developer based in Tashkent. I build clean, scalable, and high-performance web applications using modern technologies. Outside of coding, I enjoy cars and listening to Daft Punk.',

    projects_title: 'Projects',
    projects_sub: 'Selected work — more coming soon',

    contact_title: 'Let’s Collaborate',
    contact_sub: 'Currently open to opportunities',
    contact_btn: 'Send Message',

    loading: 'Initializing...',

    not_found_title: 'Signal Lost',
    not_found_sub: 'This page does not exist in this dimension.',
    not_found_btn: 'Return Home',

    interests_title: 'Beyond Coding',

    advanced: 'Advanced',
    medium: 'Intermediate',
    basic: 'Basic',
  },

  ru: {
    role: 'Full-Stack разработчик',
    tagline: 'Создаю надёжные и масштабируемые цифровые решения.',
    nav_skills: 'Навыки',
    nav_about: 'Обо мне',
    nav_projects: 'Проекты',
    nav_contact: 'Контакты',

    skills_title: 'Навыки',
    skills_sub: 'Технологии, которые я применяю на практике',

    about_title: 'Обо мне',
    about_text:
      'Я full-stack разработчик из Ташкента. Создаю чистые, масштабируемые и производительные веб-приложения с использованием современных технологий.',

    projects_title: 'Проекты',
    projects_sub: 'Избранные работы — скоро будет больше',

    contact_title: 'Сотрудничество',
    contact_sub: 'Открыт для новых возможностей',
    contact_btn: 'Написать сообщение',

    loading: 'Инициализация...',

    not_found_title: 'Сигнал потерян',
    not_found_sub: 'Эта страница не существует.',
    not_found_btn: 'Вернуться на главную',

    interests_title: 'Вне разработки',

    advanced: 'Продвинутый',
    medium: 'Средний',
    basic: 'Базовый',
  },

  uz: {
    role: 'Full-Stack Dasturchi',
    tagline: 'Ishonchli va kengaytiriladigan veb-ilovalar yarataman.',
    nav_skills: 'Ko‘nikmalar',
    nav_about: 'Men haqimda',
    nav_projects: 'Loyihalar',
    nav_contact: 'Aloqa',

    skills_title: 'Ko‘nikmalar',
    skills_sub: 'Amalda foydalanadigan texnologiyalarim',

    about_title: 'Men haqimda',
    about_text:
      'Men Toshkentda faoliyat yurituvchi full-stack dasturchiman. Zamonaviy texnologiyalar yordamida toza, tezkor va kengaytiriladigan veb-ilovalar yarataman.',

    projects_title: 'Loyihalar',
    projects_sub: 'Tanlangan ishlar — tez orada yana qo‘shiladi',

    contact_title: 'Hamkorlik',
    contact_sub: 'Yangi imkoniyatlarga ochiqman',
    contact_btn: 'Xabar yuborish',

    loading: 'Yuklanmoqda...',

    not_found_title: 'Signal topilmadi',
    not_found_sub: 'Bu sahifa mavjud emas.',
    not_found_btn: 'Bosh sahifaga qaytish',

    interests_title: 'Koddan tashqarida',

    advanced: 'Yuqori daraja',
    medium: 'O‘rta daraja',
    basic: 'Boshlang‘ich daraja',
  },

  de: {
    role: 'Full-Stack Entwickler',
    tagline: 'Ich entwickle zuverlässige und skalierbare Weblösungen.',
    nav_skills: 'Fähigkeiten',
    nav_about: 'Über mich',
    nav_projects: 'Projekte',
    nav_contact: 'Kontakt',

    skills_title: 'Fähigkeiten',
    skills_sub: 'Technologien, die ich produktiv einsetze',

    about_title: 'Über mich',
    about_text:
      'Ich bin ein Full-Stack-Entwickler aus Taschkent. Ich entwickle saubere, skalierbare und performante Webanwendungen mit modernen Technologien.',

    projects_title: 'Projekte',
    projects_sub: 'Ausgewählte Arbeiten — mehr folgt bald',

    contact_title: 'Zusammenarbeit',
    contact_sub: 'Offen für neue Möglichkeiten',
    contact_btn: 'Nachricht senden',

    loading: 'Initialisierung...',

    not_found_title: 'Signal verloren',
    not_found_sub: 'Diese Seite existiert nicht.',
    not_found_btn: 'Zur Startseite',

    interests_title: 'Außerhalb des Codes',

    advanced: 'Fortgeschritten',
    medium: 'Mittel',
    basic: 'Grundlegend',
  },

  fr: {
    role: 'Développeur Full-Stack',
    tagline: 'Je conçois des applications web fiables et évolutives.',
    nav_skills: 'Compétences',
    nav_about: 'À propos',
    nav_projects: 'Projets',
    nav_contact: 'Contact',

    skills_title: 'Compétences',
    skills_sub: 'Technologies que j’utilise en pratique',

    about_title: 'À propos de moi',
    about_text:
      'Je suis développeur full-stack basé à Tachkent. Je crée des applications web propres, performantes et évolutives avec des technologies modernes.',

    projects_title: 'Projets',
    projects_sub: 'Travaux sélectionnés — bientôt plus',

    contact_title: 'Collaborons',
    contact_sub: 'Disponible pour de nouvelles opportunités',
    contact_btn: 'Envoyer un message',

    loading: 'Initialisation...',

    not_found_title: 'Signal perdu',
    not_found_sub: 'Cette page n’existe pas.',
    not_found_btn: 'Retour à l’accueil',

    interests_title: 'Au-delà du code',

    advanced: 'Avancé',
    medium: 'Intermédiaire',
    basic: 'Débutant',
  },

  ja: {
    role: 'フルスタック開発者',
    tagline: '信頼性と拡張性の高いWebアプリを開発します。',
    nav_skills: 'スキル',
    nav_about: '自己紹介',
    nav_projects: 'プロジェクト',
    nav_contact: '連絡先',

    skills_title: 'スキル',
    skills_sub: '実務で使用している技術',

    about_title: '自己紹介',
    about_text:
      'タシケントを拠点とするフルスタック開発者です。最新技術を用いて、クリーンで高性能かつ拡張性の高いWebアプリを開発しています。',

    projects_title: 'プロジェクト',
    projects_sub: '主な制作物 — 近日追加予定',

    contact_title: 'お問い合わせ',
    contact_sub: '新しい機会を歓迎します',
    contact_btn: 'メッセージ送信',

    loading: '初期化中...',

    not_found_title: 'ページが見つかりません',
    not_found_sub: 'このページは存在しません。',
    not_found_btn: 'ホームへ戻る',

    interests_title: 'コード以外の関心',

    advanced: '上級',
    medium: '中級',
    basic: '初級',
  },
};