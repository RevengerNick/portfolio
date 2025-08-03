export const projects = [
  // ПРОЕКТ №1 (Ваш новый)
  {
    title: 'Xabar.dev - B2B Платформа уведомлений',
    description: 'Отказоустойчивая B2B-платформа для отправки транзакционных уведомлений. Реализована микросервисная архитектура с асинхронной обработкой задач через Kafka, динамической настройкой провайдеров (SMTP/API) и полной изоляцией сервисов с помощью Docker.',
    tags: [
      'Next.js', 'NestJS', 'TypeScript', 'Kafka', 'PostgreSQL', 
      'Redis', 'GraphQL', 'Docker', 'GitHub Actions', 'Prisma', 'Tailwind'
    ],
    liveUrl: 'https://rehab.revenger.dev', // Поставите ссылку на ваш домен
    githubUrl: 'https://github.com/revengernick/Xabar.dev', // Проверьте ссылку
  },
  // ПРОЕКТ №2 (Обновленный)
  {
    title: 'Wasabi Sushi - E-commerce Telegram App',
    description: 'Гибридное Telegram-приложение (Web App) для заказа суши. Включает в себя каталог, корзину, full-stack бэкенд на Node.js с ORM Prisma и адаптивный UI, оптимизированный для мобильных устройств внутри Telegram.',
    tags: ['React', 'TypeScript', 'Node.js', 'Prisma', 'MariaDB', 'Zustand', 'Tailwind', 'Telegram Web App'],
    liveUrl: 'https://sushi.revenger.dev', // У вас была другая ссылка, проверьте
    githubUrl: 'https://github.com/revengernick/wasabi_bot',
  },
  // ПРОЕКТ №3 (Обновленный)
  {
    title: 'CardBattleBot - Telegram Game',
    description: 'Многопользовательская карточная PvP-игра, реализованная как Telegram-бот. Система управляет состоянием матчей, обрабатывает ходы игроков, ведет рейтинг и хранит коллекции карт, используя Redis для быстрых операций и PostgreSQL для надежности.',
    tags: ['Python', 'Aiogram 3', 'Redis', 'PostgreSQL', 'PvP', 'GameDev'],
    liveUrl: '#', 
    githubUrl: 'https://github.com/revengernick/CardBattleBot', // Добавьте ссылку, если есть
  },
  // ПРОЕКТ №4 (Обновленный)
  {
    title: 'ImageForge - AI Image Generator',
    description: 'Веб-сервис для генерации изображений по текстовому запросу. Бэкенд на FastAPI асинхронно обрабатывает запросы и взаимодействует с моделью Stable Diffusion через библиотеку HuggingFace для создания уникальных изображений.',
    tags: ['Python', 'FastAPI', 'HuggingFace', 'Stable Diffusion', 'AI/ML', 'AsyncIO'],
    liveUrl: '#',
    githubUrl: 'https://github.com/revengernick/ImageForge', // Добавьте ссылку, если есть
  },
];