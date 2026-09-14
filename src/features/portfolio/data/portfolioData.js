export const profiles = {
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

export const navItems = ['about', 'experience', 'projects', 'skills', 'education', 'research', 'contact'];
