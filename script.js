// Satisfying motion graphics loop videos
const backgroundVideos = [
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_070034_60e5670b-6bb0-402b-a6c1-c9a8c05ae3a4.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_115139_0fc6bd3d-3631-4d26-ab9b-28293887dcc9.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260422_112520_ee819691-f2e8-4c54-bb77-3fb72c84eaa5.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_061226_74f0749c-a22d-42b3-895e-5d6203bc741c.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_074327_a4d6275d-82d9-4c83-bfbe-f1fb2213c17c.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260520_133010_cb9c806d-bc9d-47f1-ac4c-b1759134ec8b.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260423_161253_c72b1869-400f-45ed-ac0c-52f68c2ed5bd.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_144509_89e2d612-8af2-45c3-90f4-4831bc60715d.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260416_101255_3099d3e4-d0cf-4e59-9666-97fbf521ac71.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_115655_b4d9cd77-feed-43cd-a198-af78ebdf1f7a.mp4",
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
];

// Complete list of skills with metadata for the searchable sidebar
const skillsArchive = [
  { name: "React.js", category: "Frontend Web", icon: "fa-react", level: "Advanced" },
  { name: "Node.js", category: "Backend Runtime", icon: "fa-node-js", level: "Intermediate" },
  { name: "Express.js", category: "Backend Framework", icon: "fa-server", level: "Advanced" },
  { name: "JavaScript", category: "Programming Language", icon: "fa-js-square", level: "Expert" },
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
  // 0. Light / Dark Theme Toggle
  const htmlEl = document.documentElement;
  const savedTheme = localStorage.getItem('portfolioTheme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);

  function updateThemeBtn() {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      const isDark = htmlEl.getAttribute('data-theme') !== 'light';
      btn.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
      btn.querySelector('.theme-label').textContent = isDark ? 'Light' : 'Dark';
      btn.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    });
  }

  window.toggleTheme = function() {
    const current = htmlEl.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('portfolioTheme', next);
    updateThemeBtn();
  };

  updateThemeBtn();

  // 1. Mobile navigation toggler
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('nav.links');
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

  // 2. Scroll reveal animations (Intersection Observer)
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-side');
  if ('IntersectionObserver' in window && revealEls.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once visible, we can unobserve if we only want it to animate once
          obs.unobserve(entry.target);
        }
      });
    }, { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.05 });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // 3. Floating Background Video Controls
  const bgVideoElement = document.getElementById('bgVideo');
  if (bgVideoElement) {
    let currentVidIndex = localStorage.getItem('bgVideoIndex');
    
    // Choose random if none stored, or ensure it's in bounds
    if (currentVidIndex === null || isNaN(currentVidIndex)) {
      currentVidIndex = Math.floor(Math.random() * backgroundVideos.length);
    } else {
      currentVidIndex = parseInt(currentVidIndex, 10) % backgroundVideos.length;
    }

    const loadVideo = (index) => {
      bgVideoElement.style.opacity = '0';
      setTimeout(() => {
        bgVideoElement.src = backgroundVideos[index];
        bgVideoElement.load();
        bgVideoElement.play().catch(err => console.log("Autoplay blocked:", err));
        bgVideoElement.style.opacity = '1';
      }, 300);
    };

    // Load initial video
    loadVideo(currentVidIndex);

    // Change Background click handler
    window.changeBackground = function() {
      currentVidIndex = (currentVidIndex + 1) % backgroundVideos.length;
      localStorage.setItem('bgVideoIndex', currentVidIndex);
      loadVideo(currentVidIndex);
    };
  }

  // 4. Floating About Modal Popup
  const modalOverlay = document.getElementById('aboutModal');
  window.toggleInfoModal = function(show) {
    if (!modalOverlay) return;
    if (show) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Close modal when clicking outside box
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) toggleInfoModal(false);
    });
  }

  // 5. Sidebar Drawer for Skills
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarDrawer = document.getElementById('sidebarDrawer');
  const allSkillsList = document.getElementById('allSkillsList');
  const sidebarSearch = document.getElementById('sidebarSearch');
  const sidebarNoResults = document.getElementById('sidebarNoResults');

  window.toggleSidebar = function(show) {
    if (!sidebarDrawer || !sidebarOverlay) return;
    if (show) {
      sidebarDrawer.classList.add('active');
      sidebarOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (sidebarSearch) {
        sidebarSearch.value = '';
        sidebarSearch.focus();
      }
      renderSkills(skillsArchive);
    } else {
      sidebarDrawer.classList.remove('active');
      sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Close sidebar clicking outside
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', () => toggleSidebar(false));
  }

  // Render skills in the drawer list
  function renderSkills(skills) {
    if (!allSkillsList) return;
    allSkillsList.innerHTML = '';
    
    if (skills.length === 0) {
      if (sidebarNoResults) sidebarNoResults.style.display = 'flex';
      return;
    }

    if (sidebarNoResults) sidebarNoResults.style.display = 'none';

    skills.forEach((skill) => {
      const itemHTML = `
        <div class="sidebar-list-item">
          <div class="sidebar-list-icon">
            <i class="fab ${skill.icon || 'fa-code'}"></i>
          </div>
          <div class="sidebar-list-info">
            <h4 class="sidebar-list-title">${skill.name}</h4>
            <p class="sidebar-list-subtitle">${skill.category}</p>
          </div>
          <span class="sidebar-list-tag">${skill.level}</span>
        </div>
      `;
      allSkillsList.insertAdjacentHTML('beforeend', itemHTML);
    });
  }

  // Filter skills on search input
  if (sidebarSearch) {
    sidebarSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = skillsArchive.filter(skill => 
        skill.name.toLowerCase().includes(term) || 
        skill.category.toLowerCase().includes(term) ||
        skill.level.toLowerCase().includes(term)
      );
      renderSkills(filtered);
    });
  }

  // 6. Professional Vedic Numerology Calculator
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
      
      const yearStr = dobParts[0];
      const monthStr = dobParts[1];
      const dayStr = dobParts[2];
      
      const m = reduceNumber(parseInt(monthStr, 10));
      const d = reduceNumber(parseInt(dayStr, 10));
      const y = reduceNumber(parseInt(yearStr, 10));
      
      // Calculate Mulank (Root / Day)
      const mulank = reduceNumber(parseInt(dayStr, 10));
      
      // Calculate Bhagyank (Destiny / Full DOB)
      const bhagyank = reduceNumber(m + d + y);

      const mData = vedicData[mulank];
      const bData = vedicData[bhagyank];

      resultBox.innerHTML = `
        <div class="num-report-header">
          <h3>Your Complete Vedic Numerology Report</h3>
        </div>
        
        <div class="num-core-grid" style="grid-template-columns: 1fr 1fr; margin-bottom: 32px;">
          <div class="num-core-card" style="padding: 32px 20px;">
            <div class="digit" style="width: 80px; height: 80px; font-size: 3rem;">${mulank}</div>
            <h5 style="font-size: 0.9rem;">Mulank (Root)</h5>
            <p style="font-size: 0.8rem; margin-top: 8px; color: var(--text-muted);">Who you are natively.</p>
          </div>
          <div class="num-core-card" style="padding: 32px 20px;">
            <div class="digit" style="width: 80px; height: 80px; font-size: 3rem;">${bhagyank}</div>
            <h5 style="font-size: 0.9rem;">Bhagyank (Destiny)</h5>
            <p style="font-size: 0.8rem; margin-top: 8px; color: var(--text-muted);">Your path and karma.</p>
          </div>
        </div>
        
        <div class="num-section-title">Deep Analysis: Mulank ${mulank}</div>
        <div class="num-details" style="margin-bottom: 32px;">
          <h4>${mData.planet} — ${mData.nature}</h4>
          <div style="margin-bottom: 20px;">
            <h6 style="color: var(--nav-hover); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; margin-bottom: 4px;">Characteristics</h6>
            <p>${mData.traits}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <h6 style="color: var(--nav-hover); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; margin-bottom: 4px;">Career & Finance</h6>
            <p>${mData.career}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <h6 style="color: var(--nav-hover); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; margin-bottom: 4px;">Love & Relationships</h6>
            <p>${mData.love}</p>
          </div>
          
          <div class="num-traits">
            <div class="num-trait-group">
              <h6>Friendly Numbers</h6>
              <div><i class="fas fa-handshake"></i> ${mData.friendly}</div>
            </div>
            <div class="num-trait-group">
              <h6>Enemy Numbers</h6>
              <div><i class="fas fa-bolt"></i> ${mData.enemy}</div>
            </div>
            <div class="num-trait-group">
              <h6>Lucky Days</h6>
              <div><i class="far fa-calendar-check"></i> ${mData.days}</div>
            </div>
            <div class="num-trait-group">
              <h6>Lucky Colors</h6>
              <div><i class="fas fa-palette"></i> ${mData.colors}</div>
            </div>
          </div>
          
          <div class="num-traits" style="margin-top: 20px; grid-template-columns: 1fr;">
            <div class="num-trait-group">
              <h6>Vedic Remedy & Advice</h6>
              <div><i class="fas fa-om"></i> ${mData.remedy}</div>
            </div>
          </div>
        </div>

        <div class="num-section-title">Deep Analysis: Bhagyank ${bhagyank}</div>
        <div class="num-details">
          <h4>${bData.planet} — ${bData.nature}</h4>
          <div style="margin-bottom: 20px;">
            <h6 style="color: var(--nav-hover); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; margin-bottom: 4px;">Destiny & Karma</h6>
            <p>${bData.traits}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <h6 style="color: var(--nav-hover); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; margin-bottom: 4px;">Destined Career Path</h6>
            <p>${bData.career}</p>
          </div>
          <div style="margin-bottom: 20px;">
            <h6 style="color: var(--nav-hover); text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.1em; margin-bottom: 4px;">Destined Love Path</h6>
            <p>${bData.love}</p>
          </div>
          <div class="num-traits" style="margin-top: 20px; grid-template-columns: 1fr;">
            <div class="num-trait-group">
              <h6>Vedic Remedy & Advice for Destiny</h6>
              <div><i class="fas fa-om"></i> ${bData.remedy}</div>
            </div>
          </div>
        </div>
      `;
      resultBox.classList.add('active');
    });
  }
});
