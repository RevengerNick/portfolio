import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Helmet } from 'react-helmet-async';

function App() {
  const siteUrl = "https://revenger.dev";
  const title = "Никита Кошельков - Full-Stack Портфолио";
  const description = "Проектирую и создаю масштабируемые веб-сервисы и кросс-платформенные решения с фокусом на чистой архитектуре.";
  // Прямая ссылка на красивое изображение для превью.
  // Загрузите его куда-нибудь (например, в папку public) или на хостинг картинок.
  const imageUrl = `${siteUrl}/revenger_banner.jpg`; 
  return (
    <div className="bg-bg-dark text-text-main font-sans">
      <Helmet>
        {/* Основные теги */}
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={siteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={imageUrl} />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-6 text-text-muted text-sm bg-bg-light">
        © {new Date().getFullYear()} Nikita Koshelkov. All rights reserved.
      </footer>
    </div>
  );
}

export default App;