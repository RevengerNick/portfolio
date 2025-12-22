<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0f172a&height=250&section=header&text=Revenger.dev&fontSize=70&fontColor=38bdf8&animation=fadeIn&desc=Personal%20Portfolio%20running%20on%20Raspberry%20Pi%20Cluster&descAlignY=60&descAlign=50" />
</div>

## 🚀 About The Project

This repository contains the source code for my personal portfolio website, [revenger.dev](https://revenger.dev). 

Unlike standard static deployments, this project is a demonstration of **DevOps and Self-Hosting capabilities**. The entire infrastructure runs on my home lab cluster using **Raspberry Pi 5**, managed via Docker and Nginx.

### 🏗️ Architecture & Infrastructure

*   **Hardware:** Raspberry Pi 5 (8GB RAM), Ubuntu Server.
*   **Orchestration:** Docker Compose.
*   **Reverse Proxy:** Nginx (handling SSL & routing).
*   **CI/CD:** GitHub Actions (Self-hosted runner architecture planned).

---

## 🛠️ Tech Stack

<div align="center">

| **Frontend** | **Infrastructure** | **Tools** |
| :---: | :---: | :---: |
| ![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) | ![Docker](https://img.shields.io/badge/Docker-Container-2496ED?style=for-the-badge&logo=docker&logoColor=white) | ![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | ![Nginx](https://img.shields.io/badge/Nginx-Proxy-009639?style=for-the-badge&logo=nginx&logoColor=white) | ![ESLint](https://img.shields.io/badge/ESLint-Linter-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) | ![Linux](https://img.shields.io/badge/Linux-Ubuntu_Server-FCC624?style=for-the-badge&logo=linux&logoColor=black) | ![PostCSS](https://img.shields.io/badge/PostCSS-Parser-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white) |

</div>

---

## ⚡ Features

*   **Custom Design:** Dark mode aesthetics with cyberpunk elements.
*   **Responsive:** Fully adaptive layout for mobile and desktop.
*   **High Performance:** Optimized assets and Nginx caching strategies.
*   **3D Elements:** Integration of light 3D components (where applicable).

## 🏃‍♂️ Running Locally

```bash
# Clone the repository
git clone https://github.com/RevengerNick/portfolio.git

# Install dependencies
pnpm install

# Start development server
pnpm dev
