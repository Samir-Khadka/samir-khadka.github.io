/* ===========================================================
   Samir Khadka — Portfolio interactions (light theme)
   =========================================================== */

// Skills for the searchable sidebar drawer
const skillsArchive = [
  { name: "React.js", category: "Frontend Web", icon: "fa-react", level: "Advanced" },
  { name: "Node.js", category: "Backend Runtime", icon: "fa-node-js", level: "Intermediate" },
  { name: "Express.js", category: "Backend Framework", icon: "fa-server", level: "Advanced" },
  { name: "FastAPI", category: "Python Framework", icon: "fa-bolt", level: "Advanced" },
  { name: "JavaScript", category: "Programming Language", icon: "fa-js-square", level: "Expert" },
  { name: "TypeScript", category: "Programming Language", icon: "fa-code", level: "Intermediate" },
  { name: "Python", category: "Programming Language", icon: "fa-python", level: "Advanced" },
  { name: "C++", category: "Programming Language", icon: "fa-code", level: "Intermediate" },
  { name: "Docker", category: "DevOps / Containers", icon: "fa-docker", level: "Intermediate" },
  { name: "Kubernetes", category: "DevOps / Orchestration", icon: "fa-cubes", level: "Intermediate" },
  { name: "AWS", category: "Cloud Infrastructure", icon: "fa-aws", level: "Intermediate" },
  { name: "Terraform", category: "Infrastructure as Code", icon: "fa-network-wired", level: "Intermediate" },
  { name: "Git & GitHub", category: "Version Control", icon: "fa-git-alt", level: "Advanced" },
  { name: "Linux", category: "Operating System", icon: "fa-linux", level: "Advanced" },
  { name: "Jenkins", category: "CI/CD Automations", icon: "fa-robot", level: "Intermediate" },
  { name: "SQL & Databases", category: "Data Storage", icon: "fa-database", level: "Advanced" },
  { name: "Tailwind CSS", category: "Styling Framework", icon: "fa-css3-alt", level: "Advanced" },
  { name: "Vite", category: "Frontend Bundler", icon: "fa-bolt", level: "Advanced" },
  { name: "WebSocket", category: "Real-time Protocols", icon: "fa-exchange-alt", level: "Intermediate" },
  { name: "REST APIs", category: "Web Standards", icon: "fa-cloud", level: "Advanced" },
  { name: "Django", category: "Python Framework", icon: "fa-terminal", level: "Intermediate" },
  { name: "Flask", category: "Python Microframework", icon: "fa-feather", level: "Intermediate" }
];

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile navigation
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    }));
  }

  // 2. Scroll reveal animations
  const revealEls = document.querySelectorAll('.reveal-up');
  if ('IntersectionObserver' in window && revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // 3. About modal
  const modalOverlay = document.getElementById('aboutModal');
  window.toggleInfoModal = function(show) {
    if (!modalOverlay) return;
    if (show) {
      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  };
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) toggleInfoModal(false);
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { toggleInfoModal(false); toggleSidebar(false); }
  });

  // 4. Sidebar drawer
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarDrawer = document.getElementById('sidebarDrawer');
  const allSkillsList = document.getElementById('allSkillsList');
  const sidebarSearch = document.getElementById('sidebarSearch');
  const sidebarNoResults = document.getElementById('sidebarNoResults');

  window.toggleSidebar = function(show) {
    if (!sidebarDrawer || !sidebarOverlay) return;
    if (show) {
      sidebarDrawer.classList.add('open');
      sidebarOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      if (sidebarSearch) { sidebarSearch.value = ''; renderSkills(skillsArchive); sidebarSearch.focus(); }
    } else {
      sidebarDrawer.classList.remove('open');
      sidebarOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  };
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => toggleSidebar(false));
  }
  function renderSkills(skills) {
    if (!allSkillsList) return;
    allSkillsList.innerHTML = '';
    if (skills.length === 0) {
      if (sidebarNoResults) sidebarNoResults.style.display = 'block';
      return;
    }
    if (sidebarNoResults) sidebarNoResults.style.display = 'none';
    skills.forEach((skill) => {
      allSkillsList.insertAdjacentHTML('beforeend',
        '<div class="skill-item"><strong><i class="fab ' + (skill.icon || 'fa-code') +
        '" style="color:var(--violet);margin-right:8px;"></i>' + skill.name +
        '</strong><span>' + skill.category + ' &middot; ' + skill.level + '</span></div>');
    });
  }
  if (sidebarSearch) {
    sidebarSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      renderSkills(skillsArchive.filter(skill =>
        skill.name.toLowerCase().includes(term) ||
        skill.category.toLowerCase().includes(term) ||
        skill.level.toLowerCase().includes(term)
      ));
    });
  }

  // 5. Vedic Numerology Calculator
  const numForm = document.getElementById('numerology-form');
  if (numForm) {
    const dobInput = document.getElementById('dob-input');
    const resultBox = document.getElementById('num-result');

    const reduceNumber = (n) => {
      while (n > 9) {
        n = String(n).split('').reduce((a, b) => a + parseInt(b, 10), 0);
      }
      return n;
    };

const vedicData = {
      1: {
        planet: 'Sun (Surya)',
        nature: 'The King / Leader',
        traits: 'People ruled by the Sun are highly independent, creative, and confident. They radiate authority and are natural leaders. They possess strong willpower and are determined to overcome obstacles. However, they can sometimes be perceived as arrogant, stubborn, or overly dominant. They dislike being told what to do and prefer to pave their own way.',
        career: 'They excel in leadership roles, business, politics, and management. They make great CEOs, government officials, or independent entrepreneurs. They prefer positions of authority and struggle when forced to work in subordinate roles.',
        love: 'In love, they are loyal and protective but expect to be the dominant partner. They need a partner who respects their ambition and gives them space. They match best with 2, 3, and 9.',
        colors: 'Gold, Yellow, Orange, Light Red',
        days: 'Sunday, Monday',
        friendly: '2, 3, 9',
        enemy: '6, 8',
        remedy: 'Offer water to the Sun every morning. Fast on Sundays and avoid unnecessary ego clashes.'
      },
      2: {
        planet: 'Moon (Chandra)',
        nature: 'The Queen / Peacemaker',
        traits: 'Governed by the Moon, they are highly intuitive, emotional, and nurturing. They are the ultimate peacemakers, always seeking harmony and balance in their environment. They have a deep appreciation for art and beauty. On the downside, their emotional nature makes them prone to mood swings, over-sensitivity, and a lack of self-confidence.',
        career: 'They thrive in collaborative environments and excel in fields related to arts, counseling, teaching, psychology, and public relations. They make excellent diplomats and healers.',
        love: 'Love is extremely important. They are romantic, sensitive, and deeply devoted partners. They need constant reassurance and affection. They match best with 1, 3, and 5.',
        colors: 'White, Silver, Pale Green',
        days: 'Monday, Friday',
        friendly: '1, 3, 5',
        enemy: '8, 9',
        remedy: 'Meditate regularly to calm the mind. Wear silver and offer milk to Lord Shiva on Mondays.'
      },
      3: {
        planet: 'Jupiter (Guru)',
        nature: 'The Counselor / Teacher',
        traits: 'Ruled by Jupiter, 3s are wise, expressive, and highly optimistic. They have a natural thirst for knowledge and are excellent communicators. They are often seen as the advisors in their social circles. However, their confidence can sometimes border on dictatorial behavior, and they may struggle with focusing their energy.',
        career: 'They are destined for careers in education, law, religion, writing, and acting. Their strong communication skills make them excellent public speakers and spiritual guides.',
        love: 'They are joyful and supportive partners. They seek a relationship built on mutual respect and intellectual stimulation. They are highly compatible with 1, 2, and 9.',
        colors: 'Yellow, Purple, Violet',
        days: 'Thursday',
        friendly: '1, 2, 9',
        enemy: '6',
        remedy: 'Respect elders and teachers. Donate yellow items (like bananas or chana dal) on Thursdays.'
      },
      4: {
        planet: 'Rahu (North Node)',
        nature: 'The Rebel / Builder',
        traits: 'Rahu makes them unconventional, practical, and highly methodical. They are the builders of society, working tirelessly to establish order. They often face sudden ups and downs in life, making them resilient. They can be overly rigid, critical, and sometimes secretive or rebellious against traditional norms.',
        career: 'They excel in engineering, mechanics, IT, architecture, and event management. Their ability to handle details makes them great planners and administrators.',
        love: 'They are steadfast and loyal but may struggle to express their emotions romantically. They show love through practical support rather than grand gestures. Compatible with 1, 5, 6, 8.',
        colors: 'Blue, Grey, Khaki',
        days: 'Sunday, Monday, Saturday',
        friendly: '1, 5, 6, 8',
        enemy: '2, 9',
        remedy: 'Keep your workspace organized. Donate to sweepers or the less fortunate on Saturdays to appease Rahu.'
      },
      5: {
        planet: 'Mercury (Buddh)',
        nature: 'The Prince / Communicator',
        traits: 'Mercury gives them a quick, restless, and highly adaptable mind. They love freedom, travel, and experiencing new things. They are excellent conversationalists and can charm anyone. However, their love for variety can make them inconsistent, easily bored, and prone to abandoning projects halfway.',
        career: 'Ideal careers involve communication, sales, journalism, travel, and stock trading. They need a dynamic work environment where no two days are the same.',
        love: 'They need a partner who can keep up with their fast pace and intellectual curiosity. Stagnant or overly emotional relationships will push them away. Compatible with 1, 4, 6.',
        colors: 'Light Green, White, Silver',
        days: 'Wednesday, Friday',
        friendly: '1, 4, 6',
        enemy: '2',
        remedy: 'Feed green grass or vegetables to cows on Wednesdays. Practice mindfulness to calm the restless mind.'
      },
      6: {
        planet: 'Venus (Shukra)',
        nature: 'The Artist / Lover',
        traits: 'Venus bestows them with charm, magnetism, and a deep love for luxury and beauty. They are naturally drawn to aesthetics, comfort, and harmonious relationships. They are incredibly nurturing and protective of their family. However, they can be overly materialistic, prone to indulgence, or overly stubborn in arguments.',
        career: 'They shine in creative fields, fashion, interior design, music, and the luxury industry. They also make great counselors and medical professionals due to their nurturing nature.',
        love: 'They are the ultimate romantics. Family and marriage are usually their highest priorities. They are devoted and expect the same in return. Best matches are 4, 5, and 8.',
        colors: 'Light Blue, Pink, White',
        days: 'Friday',
        friendly: '4, 5, 8',
        enemy: '1, 3',
        remedy: 'Respect women and keep your surroundings clean and beautiful. Donate white sweets or milk on Fridays.'
      },
      7: {
        planet: 'Ketu (South Node)',
        nature: 'The Mystic / Seeker',
        traits: 'Ketu makes them deeply spiritual, analytical, and intuitive. They are the philosophers and researchers of the world, constantly seeking truth beneath the surface. They often prefer solitude and have a unique perspective on life. Their aloofness can sometimes make them appear detached, moody, or overly critical.',
        career: 'They excel in research, writing, astrology, psychology, and investigative work. They do best in roles that allow them to work independently and dive deep into complex subjects.',
        love: 'They are highly sensitive but struggle to express their feelings. They need a partner who understands their need for solitude and deep, intellectual connection. Compatible with 1, 2, 9.',
        colors: 'Light Green, Light Yellow, Pearl',
        days: 'Sunday, Monday, Wednesday',
        friendly: '1, 2, 9',
        enemy: '8',
        remedy: 'Feed stray dogs. Practice grounding exercises and meditation to balance intense mental energy.'
      },
      8: {
        planet: 'Saturn (Shani)',
        nature: 'The Judge / Achiever',
        traits: 'Saturn brings discipline, delays, and immense endurance. Number 8s are hardworking, practical, and highly ambitious. They face many struggles early in life but achieve great material and spiritual success later. They are serious and responsible but can become overly materialistic, melancholic, or authoritarian.',
        career: 'They are destined for large-scale business, real estate, law, politics, and heavy industries. They are slow but steady climbers who eventually reach the top of their fields.',
        love: 'They are not naturally romantic but are deeply committed and loyal providers. They need a patient partner who understands their dedication to their career. Compatible with 3, 4, 5, 6.',
        colors: 'Dark Blue, Black, Dark Grey',
        days: 'Saturday',
        friendly: '3, 4, 5, 6',
        enemy: '1, 2, 9',
        remedy: 'Light a mustard oil lamp under a Peepal tree on Saturdays. Practice selfless service and charity to the poor.'
      },
      9: {
        planet: 'Mars (Mangal)',
        nature: 'The Warrior / Humanitarian',
        traits: 'Mars fuels them with courage, energy, and a strong sense of justice. They are fiercely independent and often fight for the underdog. They have a global perspective and are deeply humanitarian. However, their intense energy makes them prone to anger, impulsiveness, and unnecessary conflicts.',
        career: 'They thrive in the military, police, sports, engineering, and surgery. They also make excellent social workers and leaders of humanitarian causes.',
        love: 'They love fiercely and passionately. They are protective of their partners but can be aggressive in arguments. They need a partner who can handle their intensity. Compatible with 1, 2, 3.',
        colors: 'Red, Crimson, Rose',
        days: 'Tuesday, Thursday',
        friendly: '1, 2, 3',
        enemy: '4, 8',
        remedy: 'Donate blood if healthy. Recite Hanuman Chalisa and avoid impulsive anger or unnecessary arguments.'
      }
    };

    numForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const dobVal = dobInput.value;
      if (!dobVal) return;
      const dobParts = dobVal.split('-');
      if (dobParts.length !== 3) return;

      const mulank = reduceNumber(parseInt(dobParts[2], 10));
      const bhagyank = reduceNumber(
        reduceNumber(parseInt(dobParts[1], 10)) +
        reduceNumber(parseInt(dobParts[2], 10)) +
        reduceNumber(parseInt(dobParts[0], 10))
      );

      const mData = vedicData[mulank];
      const bData = vedicData[bhagyank];

      const traitRow = (d) => `
        <div class="num-traits">
          <div class="num-trait-group"><h6>Friendly Numbers</h6><div><i class="fas fa-handshake"></i> ${d.friendly}</div></div>
          <div class="num-trait-group"><h6>Enemy Numbers</h6><div><i class="fas fa-bolt"></i> ${d.enemy}</div></div>
          <div class="num-trait-group"><h6>Lucky Days</h6><div><i class="far fa-calendar-check"></i> ${d.days}</div></div>
          <div class="num-trait-group"><h6>Lucky Colors</h6><div><i class="fas fa-palette"></i> ${d.colors}</div></div>
        </div>`;

      resultBox.innerHTML = `
        <div class="num-core-grid">
          <div class="num-core-card">
            <div class="digit">${mulank}</div>
            <h5>Mulank (Root)</h5>
            <p>Who you are natively.</p>
          </div>
          <div class="num-core-card">
            <div class="digit">${bhagyank}</div>
            <h5>Bhagyank (Destiny)</h5>
            <p>Your path and karma.</p>
          </div>
        </div>
        <div class="num-section-title">Deep Analysis: Mulank ${mulank}</div>
        <div class="num-details">
          <h4>${mData.planet} — ${mData.nature}</h4>
          <p><strong>Characteristics.</strong> ${mData.traits}</p>
          <p><strong>Career &amp; Finance.</strong> ${mData.career}</p>
          <p><strong>Love &amp; Relationships.</strong> ${mData.love}</p>
          ${traitRow(mData)}
          <div class="num-traits" style="margin-top:16px;">
            <div class="num-trait-group"><h6>Vedic Remedy &amp; Advice</h6><div><i class="fas fa-om"></i> ${mData.remedy}</div></div>
          </div>
        </div>
        <div class="num-section-title">Deep Analysis: Bhagyank ${bhagyank}</div>
        <div class="num-details">
          <h4>${bData.planet} — ${bData.nature}</h4>
          <p><strong>Destiny &amp; Karma.</strong> ${bData.traits}</p>
          <p><strong>Destined Career Path.</strong> ${bData.career}</p>
          <p><strong>Destined Love Path.</strong> ${bData.love}</p>
          ${traitRow(bData)}
          <div class="num-traits" style="margin-top:16px;">
            <div class="num-trait-group"><h6>Vedic Remedy &amp; Advice for Destiny</h6><div><i class="fas fa-om"></i> ${bData.remedy}</div></div>
          </div>
        </div>`;
    });
  }
});
