import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  
  return (
    <div className="bg-bg-dark text-text-main font-sans">
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