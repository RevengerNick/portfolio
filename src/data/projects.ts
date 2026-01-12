export const projects = [
  {
    title: "Production Showcase Platform",
    description:
      "Современная портфолио-платформа для видео-продакшена. Разработана с использованием монорепозитория, кастомного Express API и React 19. Полностью контейнеризирована через Docker Compose для работы в закрытом контуре Cloudflare Tunnel. Реализована сложная анимация переходов и адаптивная галерея.",
    tags: [
      "React 19",
      "TypeScript",
      "Express.js",
      "Docker",
      "Nginx",
      "Framer Motion",
      "Tailwind v4",
      "Monorepo",
    ],
    liveUrl: "https://production.revenger.dev",
    githubUrl: "https://github.com/revengernick/production-site",
  },
  {
    title: "CloudGallery - Telegram Web App",
    description:
      "Облачное хранилище медиафайлов, интегрированное прямо в Telegram. Позволяет загружать фото/видео через бота, управлять альбомами через Web App интерфейс и делиться ими через Inline-режим. Реализована JWT-авторизация на основе валидации данных Telegram и асинхронная обработка медиа.",
    tags: [
      "FastAPI",
      "MongoDB",
      "Aiogram 3",
      "React",
      "Telegram Web App",
      "Docker Compose",
      "JWT Auth",
    ],
    // Если демо пока не доступно публично, можно оставить "#" или ссылку на бота
    liveUrl: "#",
    githubUrl: "https://github.com/revengernick/tg-gallery-bot",
  },
  {
    title: "Xabar.dev - B2B Платформа уведомлений",
    description:
      "Отказоустойчивая B2B-платформа для отправки транзакционных уведомлений. Реализована микросервисная архитектура с асинхронной обработкой задач через Kafka, динамической настройкой провайдеров (SMTP/API) и полной изоляцией сервисов с помощью Docker.",
    tags: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "Docker",
      "GitHub Actions",
    ],
    liveUrl: "https://rehab.revenger.dev",
    githubUrl: "https://github.com/revengernick/reHab",
  },
  {
    title: "Wasabi Sushi - E-commerce Telegram App",
    description:
      "Гибридное Telegram-приложение (Web App) для заказа суши. Включает в себя каталог, корзину, full-stack бэкенд на Node.js с ORM Prisma и адаптивный UI, оптимизированный для мобильных устройств внутри Telegram.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Prisma",
      "MariaDB",
      "Zustand",
      "Tailwind",
      "Telegram Web App",
    ],
    liveUrl: "https://sushi.revenger.dev",
    githubUrl: "https://github.com/revengernick/wasabi_bot",
  },
  {
    title: "CardBattleBot - Telegram Game",
    description:
      "Многопользовательская карточная PvP-игра, реализованная как Telegram-бот. Система управляет состоянием матчей, обрабатывает ходы игроков, ведет рейтинг и хранит коллекции карт, используя Redis для быстрых операций и PostgreSQL для надежности.",
    tags: ["Python", "Aiogram 3", "Redis", "PostgreSQL", "PvP", "GameDev"],
    liveUrl: "#",
    githubUrl: "https://github.com/revengernick/Card_game",
  },
  {
    title: "ImageForge - AI Image Generator",
    description:
      "Веб-сервис для генерации изображений по текстовому запросу. Бэкенд на FastAPI асинхронно обрабатывает запросы и взаимодействует с моделью Stable Diffusion через библиотеку HuggingFace для создания уникальных изображений.",
    tags: [
      "Python",
      "FastAPI",
      "HuggingFace",
      "Stable Diffusion",
      "AI/ML",
      "AsyncIO",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];
