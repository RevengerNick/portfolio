# portfolio/frontend/Dockerfile

# --- СТАДИЯ 1: Сборка проекта ---
# Используем базовый образ Node.js, совместимый с ARM64 на Raspberry Pi
FROM --platform=linux/arm64/v8 node:20-alpine AS builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы проекта
COPY . .

# Собираем оптимизированную продакшн-версию фронтенда
RUN npm run build

# --- СТАДИЯ 2: Раздача статики через Nginx ---
# Используем легкий образ Nginx, совместимый с ARM64
FROM --platform=linux/arm64/v8 nginx:alpine

# Копируем только собранные файлы из папки /app/dist стадии "builder"
# в папку, откуда Nginx раздает файлы по умолчанию.
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем нашу кастомную конфигурацию Nginx.
# Путь внутри контейнера. Мы укажем путь снаружи в docker-compose.yml
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Сообщаем Docker, что контейнер будет слушать порт 80
EXPOSE 80

# Команда для запуска Nginx в "нефоновом" режиме
CMD ["nginx", "-g", "daemon off;"]