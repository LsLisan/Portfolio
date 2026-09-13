"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import {
  Apple, ArrowUpRight, BrainCircuit, Code2,
  Database, Download, ExternalLink, Laptop,
  Mail, MapPin, Menu, Moon, Phone, Sparkles, Sun, Trophy, X
} from 'lucide-react';
import { FaAndroid } from 'react-icons/fa';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), { ssr: false });

const profiles = {
  flutter: {
    label: 'Mobile engineering',
    title: 'Flutter developer and AI/ML engineer building useful products.',
    intro: 'I combine polished cross-platform apps with applied AI, data science, and research to turn thoughtful ideas into useful products.',
        skills: ['Dart', 'Flutter', 'Riverpod', 'GetX', 'BLoC', 'Firebase', 'REST APIs', 'Google Maps', 'WebSocket'],
    projects: [
          { name: 'Aira', type: 'Hospitality & reservations · Client project', tech: 'Flutter · Maps · WebSocket', description: 'Guest and host workflows for hotel, vehicle, and place reservations with maps and real-time updates.', icon: '⌂' },
          { name: 'B2B Solutions', type: 'Vendor operations · Client project', tech: 'Flutter · Riverpod · REST APIs · Stripe', description: 'A vendor-to-vendor platform with business workflows, real-time messaging, maps, geolocation, and Stripe payments.', icon: '↔' },
          { name: 'Geo Paving', type: 'Property valuation · Client project', tech: 'Flutter · GetX · WebSocket', description: 'Role-based property assessment, valuation, billing, and contractor site management workflows.', icon: '⌖', platformLinks: [{ label: 'Apple', href: 'https://apps.apple.com/us/app/geo-paving/id6766808924', icon: 'apple' }, { label: 'Android', href: 'https://play.google.com/store/apps/details?id=app.kalsayegh.geopaving.geo.paving&hl=en', icon: 'android' }] },
          { name: 'Bridge Network', type: 'Mentorship & social · Client project', tech: 'Flutter · REST APIs · Firebase', description: 'A two-role mentor and mentee platform maintained through production fixes, workflow improvements, and releases.', icon: '∞', platformLinks: [{ label: 'Apple', href: 'https://apps.apple.com/sa/app/bridge-system/id6762170336', icon: 'apple' }, { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.app.bridge_network&hl=en', icon: 'android' }] },
          { name: 'Boujee Pet Service', type: 'Pet care booking · Client project', tech: 'Flutter · REST APIs · Firebase', description: 'Customer and employee apps for discovering services, booking care, managing schedules, and tracking tasks.', icon: '♡' },
          { name: 'Allo Taf', type: 'Job search · Client project', tech: 'Flutter · REST APIs', description: 'An Android platform for discovering small job opportunities with search, filtering, and API workflows.', icon: '⌕' },
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

const navItems = ['about', 'experience', 'projects', 'skills', 'education', 'research', 'contact'];

function App() {
  const [mode, setMode] = useState('flutter');
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const active = profiles[mode];

  useEffect(() => {
    setDark(localStorage.getItem('theme') !== 'light');
  }, []);

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
      <ThreeScene />
      <header className="topbar">
        <button className="wordmark" onClick={() => switchSection('top')} aria-label="Back to top">LI<span>.</span></button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map((item) => <button key={item} onClick={() => switchSection(item)}>{item}</button>)}
        </nav>
        <div className="top-actions">
          <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <div className="resume-menu">
            <button className="nav-resume" onClick={() => setResumeOpen(!resumeOpen)} aria-expanded={resumeOpen}>Resume <Download size={15} /></button>
            {resumeOpen && <div className="resume-options"><a href="/Lisan_Flutter_SWE_New.pdf" download onClick={() => setResumeOpen(false)}><Laptop size={15} /><span>Flutter / SWE</span><Download size={14} /></a><a href="/AI_ML_Engineer.pdf" download onClick={() => setResumeOpen(false)}><BrainCircuit size={15} /><span>AI / ML Engineer</span><Download size={14} /></a></div>}
          </div>
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
            <div className="portrait-frame"><img src="/lisanprofile.jpg" alt="MD. Lisan Islam" /><div className="portrait-note"><Sparkles size={15} /><span>Building with<br /><strong>purpose & curiosity</strong></span></div></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          </div>
        </section>

        <section className="mode-band"><div className="section-wrap mode-inner"><span className="mode-label">Choose a lens</span><div className="mode-switch"><button className={mode === 'flutter' ? 'selected' : ''} onClick={() => setMode('flutter')}><Laptop size={16} /> Flutter / Mobile</button><button className={mode === 'aiml' ? 'selected' : ''} onClick={() => setMode('aiml')}><BrainCircuit size={16} /> AI / ML</button></div><span className="mode-hint">The work changes. The curiosity stays.</span></div></section>

        <section id="about" className="section-wrap content-section"><div className="section-heading"><span>01 / About</span><h2>A builder with<br /><em>range.</em></h2></div><div className="about-content"><div><p className="lead">I am a Computer Science graduate who likes working where engineering meets human behavior. From mobile interfaces to machine learning experiments, I care about making technology clear, useful, and dependable.</p><p>My work is grounded in curiosity, ownership, and the belief that good software should feel considered from the first tap to the last detail.</p><blockquote>“Refine your vision with wisdom from others, but stay true to your unique way of thinking.”</blockquote></div><div className="principles"><div><span>01</span><strong>Think in systems</strong><p>Good experiences are shaped by the details behind them.</p></div><div><span>02</span><strong>Make it legible</strong><p>Complex problems deserve simple, honest interfaces.</p></div><div><span>03</span><strong>Keep learning</strong><p>Every project is a new excuse to get better.</p></div></div></div></section>

          <section id="experience" className="section-wrap content-section split-section"><div className="section-heading"><span>02 / Experience</span><h2>Where I've<br /><em>contributed.</em></h2></div><div className="experience-list"><div className="experience-item"><div className="experience-date">MAR 2026<br />AUG 2026</div><div><div className="experience-title"><h3>Flutter Developer</h3><span>SM Technology / Betopia Groups · Dhaka</span></div><p>Developed production cross-platform applications using clean architecture, Riverpod, GetX, REST APIs, backend services, and real-time features for Android and iOS.</p><div className="chip-row"><span>Flutter</span><span>Clean architecture</span><span>Riverpod · GetX</span><span>Production apps</span></div></div></div><div className="experience-item"><div className="experience-date">FEB 2024<br />AUG 2024</div><div><div className="experience-title"><h3>Junior Software Developer</h3><span>QueryBD · Gazipur</span></div><p>Built scalable software and analytics systems for business clients, including real-time dashboards and API-driven inventory solutions.</p><div className="chip-row"><span>Product systems</span><span>Data dashboards</span><span>API integration</span></div></div></div></div></section>

        <section id="projects" className="section-wrap content-section projects-section"><div className="section-heading inline-heading"><div><span>03 / Selected work</span><h2>Things I've<br /><em>made.</em></h2></div><span className="project-count">{active.projects.length.toString().padStart(2, '0')} projects</span></div><div className="project-grid">{active.projects.map((project, index) => <article className="project-card" key={`${mode}-${project.name}`}><div className="project-top"><span className="project-index">0{index + 1}</span><span className="project-icon">{project.icon}</span>{project.link && <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ExternalLink size={18} /></a>}{project.platformLinks && <div className="platform-links">{project.platformLinks.map((platform) => <a key={platform.label} href={platform.href} target="_blank" rel="noreferrer" aria-label={`${project.name} on ${platform.label}`} title={`${project.name} on ${platform.label}`}>{platform.icon === 'apple' ? <Apple size={18} /> : <FaAndroid size={18} />}</a>)}</div>}</div><p className="project-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="project-tech">{project.tech.split(' · ').map((tech) => <span key={tech}>{tech}</span>)}</div></article>)}</div></section>

          <section id="skills" className="section-wrap content-section skills-section"><div className="section-heading"><span>04 / Toolkit</span><h2>How I<br /><em>work.</em></h2></div><div className="skills-content"><div className="skill-feature"><Code2 size={23} /><h3>Core tools</h3><p>Technologies I reach for when the idea needs to become real.</p><div className="skill-list">{active.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="skill-feature"><Database size={23} /><h3>Also in the mix</h3><p>Python, Java, C, SQL, MySQL, PostgreSQL, Firestore, Django (learning), Git, GitHub, Android Studio, VS Code, Jupyter, Flask, NumPy, Pandas, PyTorch, Transformers, Google Cloud.</p><div className="skill-list"><span>Always learning</span><span>Always shipping</span></div></div></div><div className="achievement-row"><Trophy size={20} /><span><strong>ICPC participant</strong> · DIU regional seasons 2021–2023</span><span><strong>Beecrowd top 1%</strong> · MD.LisanIslam</span><span><strong>LeetCode</strong> · Lisan00 / 140+ problems</span><span><strong>Published dataset</strong> · Mendeley Data, December 2024</span></div></section>

  <section id="education" className="section-wrap content-section education-section"><div className="section-heading"><span>05 / Education</span><h2>Still<br /><em>learning.</em></h2></div><div className="education-list"><div className="education-item"><span>2026 — Present</span><div><h3>M.Sc. in Computer Science &amp; Engineering</h3><p>Daffodil International University · Data Science</p></div></div><div className="education-item"><span>2022 — 2026</span><div><h3>B.Sc. in Computer Science &amp; Engineering</h3><p>Daffodil International University · CGPA 3.49 / 4.00</p></div></div><div className="education-item"><span>2018 — 2020</span><div><h3>Higher Secondary Certificate</h3><p>Tejgaon College · GPA 4.50 / 5.00</p></div></div><div className="education-item"><span>2018</span><div><h3>Secondary School Certificate</h3><p>Government Gournadi Pilot Secondary School · GPA 4.44 / 5.00</p></div></div></div></section>

          <section id="research" className="section-wrap content-section research-section"><div className="section-heading"><span>06 / Research</span><h2>Questions worth<br /><em>following.</em></h2></div><div className="research-stack"><div className="research-card"><div className="research-mark"><span>DATA</span><Database size={48} /></div><div><span className="project-type">Published · Mendeley Data · 2024</span><h3>Carambola Leaf Disease Dataset</h3><p>A labeled image dataset supporting machine learning research in agricultural disease classification.</p><a href="https://data.mendeley.com/datasets/jn857kmcnf/1" target="_blank" rel="noreferrer" className="inline-link">View dataset <ArrowUpRight size={16} /></a></div></div><div className="research-note"><span className="project-type">In progress · Expected 2025</span><h3>Machine Learning for Plant Disease Classification</h3><p>Exploring CNNs and transfer learning for agricultural AI and precision farming applications.</p><div className="skill-list"><span>AI for agriculture</span><span>Data-driven research</span><span>Human-AI interaction</span></div></div></div></section>

        <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><div><span className="kicker">06 / Contact</span><h2>Have a good<br /><em>problem?</em></h2><p>I'm open to thoughtful collaborations, product work, and conversations about applied AI.</p></div><div className="contact-links"><a href="mailto:mdlisan36@gmail.com"><Mail size={19} /><span>mdlisan36@gmail.com</span><ArrowUpRight size={17} /></a><a href="tel:+8801798714217"><Phone size={19} /><span>+880 1798714217</span><ArrowUpRight size={17} /></a><a href="https://github.com/lslisan" target="_blank" rel="noreferrer"><Code2 size={19} /><span>github.com/lslisan</span><ArrowUpRight size={17} /></a><a href="https://www.linkedin.com/in/lslisan/" target="_blank" rel="noreferrer"><Code2 size={19} /><span>linkedin.com/in/lslisan</span><ArrowUpRight size={17} /></a></div></div></section>
      </main>

      <footer className="section-wrap footer"><span>© 2026 MD. Lisan Islam</span><span>Built with Next.js + Three.js</span><a href="/AI_ML_Engineer.pdf" download>AI/ML resume <Download size={14} /></a></footer>
    </div>
  );
}

export default App;
