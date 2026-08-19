import { useEffect, useState } from 'react';
import {
  ArrowUpRight, BrainCircuit, Code2,
  Database, Download, ExternalLink, Laptop,
  Mail, MapPin, Menu, Moon, Phone, Sparkles, Sun, Trophy, X
} from 'lucide-react';

const profiles = {
  flutter: {
    label: 'Mobile engineering',
    title: 'Flutter developer building products people enjoy using.',
    intro: 'I turn thoughtful product ideas into fast, polished cross-platform apps with Flutter, Firebase, and a strong eye for detail.',
    skills: ['Dart', 'Flutter', 'Firebase', 'REST APIs', 'Material Design'],
    projects: [
      { name: 'Doctor Lagbea', type: 'Healthcare platform', tech: 'Flutter · Firebase', description: 'A two-sided appointment experience with serial-based scheduling, doctor discovery, and medical history.', icon: '✚' },
      { name: 'NoteHUB', type: 'Student community', tech: 'Flutter · Firebase', description: 'A social note-sharing platform with search, moderation, likes, comments, and reporting.', icon: '↗' },
      { name: 'My Shop', type: 'Desktop operations', tech: 'Java Swing · MySQL', description: 'A practical shop management tool for inventory, purchases, sales, and reporting.', icon: '▦' },
      { name: 'DailyS', type: 'Education & chat', tech: 'Python · Firebase', description: 'A role-based chat workspace for teachers and students with group controls and approvals.', icon: '◌' }
    ]
  },
  aiml: {
    label: 'Applied AI & research',
    title: 'AI/ML engineer turning messy data into useful signals.',
    intro: 'I explore computer vision, NLP, and data products that make complex information easier to understand and act on.',
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NLP'],
    projects: [
      { name: 'Synopsize', type: 'NLP product', tech: 'Python · Flask · NLTK', description: 'An intelligent document summarisation platform with format support, metrics, and a statistics dashboard.', icon: '≡', link: 'https://github.com/LsLisan/Synopsize' },
      { name: 'Carambola Leaf Disease', type: 'Computer vision', tech: 'TensorFlow · CNN', description: 'A CNN-based classifier for plant disease detection, supported by augmentation and transfer learning.', icon: '◒', link: 'https://data.mendeley.com/datasets/jn857kmcnf/1' },
      { name: 'DailyS', type: 'Education & chat', tech: 'Python · Firebase', description: 'A secure educational messaging system with role-based access and teacher approval workflows.', icon: '◌' }
    ]
  }
};

const navItems = ['about', 'experience', 'projects', 'skills', 'research', 'contact'];

function App() {
  const [mode, setMode] = useState('flutter');
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  const active = profiles[mode];

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const switchSection = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="wordmark" onClick={() => switchSection('top')} aria-label="Back to top">LI<span>.</span></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => <button key={item} onClick={() => switchSection(item)}>{item}</button>)}
        </nav>
        <div className="top-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <a className="nav-resume" href="Lisan_Flutter_SWE_New.pdf" download>Resume <Download size={15} /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
            <p className="kicker">MD. LISAN ISLAM <span>/</span> {active.label}</p>
            <h1>{active.title}</h1>
            <p className="hero-intro">{active.intro}</p>
            <div className="hero-actions"><button className="button primary" onClick={() => switchSection('projects')}>Explore my work <ArrowUpRight size={17} /></button><button className="button text-button" onClick={() => switchSection('contact')}>Let's talk <span>↗</span></button></div>
            <div className="hero-meta"><span><MapPin size={15} /> Dhaka, Bangladesh</span><span><Mail size={15} /> mdlisan36@gmail.com</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><img src="lisanprofile.jpg" alt="MD. Lisan Islam" /><div className="portrait-note"><Sparkles size={15} /><span>Building with<br /><strong>purpose & curiosity</strong></span></div></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          </div>
        </section>

        <section className="mode-band"><div className="section-wrap mode-inner"><span className="mode-label">Choose a lens</span><div className="mode-switch"><button className={mode === 'flutter' ? 'selected' : ''} onClick={() => setMode('flutter')}><Laptop size={16} /> Flutter / Mobile</button><button className={mode === 'aiml' ? 'selected' : ''} onClick={() => setMode('aiml')}><BrainCircuit size={16} /> AI / ML</button></div><span className="mode-hint">The work changes. The curiosity stays.</span></div></section>

        <section id="about" className="section-wrap content-section"><div className="section-heading"><span>01 / About</span><h2>A builder with<br /><em>range.</em></h2></div><div className="about-content"><div><p className="lead">I am a Computer Science graduate who likes working where engineering meets human behavior. From mobile interfaces to machine learning experiments, I care about making technology clear, useful, and dependable.</p><p>My work is grounded in curiosity, ownership, and the belief that good software should feel considered from the first tap to the last detail.</p><blockquote>“Refine your vision with wisdom from others, but stay true to your unique way of thinking.”</blockquote></div><div className="principles"><div><span>01</span><strong>Think in systems</strong><p>Good experiences are shaped by the details behind them.</p></div><div><span>02</span><strong>Make it legible</strong><p>Complex problems deserve simple, honest interfaces.</p></div><div><span>03</span><strong>Keep learning</strong><p>Every project is a new excuse to get better.</p></div></div></div></section>

        <section id="experience" className="section-wrap content-section split-section"><div className="section-heading"><span>02 / Experience</span><h2>Where I've<br /><em>contributed.</em></h2></div><div className="experience-item"><div className="experience-date">FEB 2024<br />AUG 2024</div><div><div className="experience-title"><h3>Junior Software Developer</h3><span>QueryBD / Gazipur</span></div><p>Built scalable software and analytics systems for business clients, including real-time dashboards and API-driven inventory solutions.</p><div className="chip-row"><span>Product systems</span><span>Data dashboards</span><span>API integration</span></div></div></div></section>

        <section id="projects" className="section-wrap content-section projects-section"><div className="section-heading inline-heading"><div><span>03 / Selected work</span><h2>Things I've<br /><em>made.</em></h2></div><span className="project-count">{active.projects.length.toString().padStart(2, '0')} projects</span></div><div className="project-grid">{active.projects.map((project, index) => <article className="project-card" key={`${mode}-${project.name}`}><div className="project-top"><span className="project-index">0{index + 1}</span><span className="project-icon">{project.icon}</span>{project.link && <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ExternalLink size={18} /></a>}</div><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="project-tech">{project.tech.split(' · ').map((tech) => <span key={tech}>{tech}</span>)}</div></article>)}</div></section>

        <section id="skills" className="section-wrap content-section skills-section"><div className="section-heading"><span>04 / Toolkit</span><h2>How I<br /><em>work.</em></h2></div><div className="skills-content"><div className="skill-feature"><Code2 size={23} /><h3>Core tools</h3><p>Technologies I reach for when the idea needs to become real.</p><div className="skill-list">{active.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="skill-feature"><Database size={23} /><h3>Also in the mix</h3><p>Java, C, SQL, MySQL, Git, GitHub, Android Studio, Jupyter, Flask, NumPy, Pandas, REST APIs.</p><div className="skill-list"><span>Always learning</span><span>Always shipping</span></div></div></div><div className="achievement-row"><Trophy size={20} /><span><strong>ICPC participant</strong> · represented DIU in regional contests from 2021–2023</span><span><strong>Published dataset</strong> · Mendeley Data, December 2024</span></div></section>

        <section id="research" className="section-wrap content-section research-section"><div className="section-heading"><span>05 / Research</span><h2>Questions worth<br /><em>following.</em></h2></div><div className="research-card"><div className="research-mark"><span>DATA</span><Database size={48} /></div><div><span className="project-type">Published · Mendeley Data · 2024</span><h3>Carambola Leaf Disease Dataset</h3><p>A labeled image dataset supporting machine learning research in agricultural disease classification.</p><a href="https://data.mendeley.com/datasets/jn857kmcnf/1" target="_blank" rel="noreferrer" className="inline-link">View dataset <ArrowUpRight size={16} /></a></div></div></section>

        <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><div><span className="kicker">06 / Contact</span><h2>Have a good<br /><em>problem?</em></h2><p>I'm open to thoughtful collaborations, product work, and conversations about applied AI.</p></div><div className="contact-links"><a href="mailto:mdlisan36@gmail.com"><Mail size={19} /><span>mdlisan36@gmail.com</span><ArrowUpRight size={17} /></a><a href="tel:+8801798714217"><Phone size={19} /><span>+880 1798714217</span><ArrowUpRight size={17} /></a><a href="https://github.com/lslisan" target="_blank" rel="noreferrer"><Code2 size={19} /><span>github.com/lslisan</span><ArrowUpRight size={17} /></a><a href="https://www.linkedin.com/in/lslisan/" target="_blank" rel="noreferrer"><Code2 size={19} /><span>linkedin.com/in/lslisan</span><ArrowUpRight size={17} /></a></div></div></section>
      </main>

      <footer className="section-wrap footer"><span>© 2026 MD. Lisan Islam</span><span>Built with React + Vite</span><a href="AI_ML_Engineer.pdf" download>AI/ML resume <Download size={14} /></a></footer>
    </div>
  );
}

export default App;
