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

  // 6. Numerology Life-Path Calculator
  const numForm = document.getElementById('numerology-form');
  if (numForm) {
    const input = document.getElementById('dob-input');
    const resultBox = document.getElementById('num-result');

    const reduceNumber = (n) => {
      while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
        n = String(n).split('').reduce((a, b) => a + parseInt(b, 10), 0);
      }
      return n;
    };

    const meanings = {
      1: 'Independent and pioneering — a natural starter and leader.',
      2: 'Cooperative and intuitive — strong in partnership and diplomacy.',
      3: 'Expressive and creative — drawn to communication and the arts.',
      4: 'Methodical and grounded — builds steady, lasting structures.',
      5: 'Adaptable and curious — thrives on change and new experience.',
      6: 'Responsible and caring — natural protector of community.',
      7: 'Analytical and reflective — a seeker of deeper understanding.',
      8: 'Ambitious and results-driven — comfortable with power and scale.',
      9: 'Compassionate and idealistic — driven by a wider sense of purpose.',
      11: 'Master Intuitive — heightened insight and inspiration.',
      22: 'Master Builder — visionary, capable of large-scale impact.',
      33: 'Master Teacher — selfless guidance and healing influence.'
    };

    numForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value;
      if (!val) return;
      const digits = val.replace(/[^0-9]/g, '');
      const sum = digits.split('').reduce((a, b) => a + parseInt(b, 10), 0);
      const lifePath = reduceNumber(sum);
      resultBox.innerHTML = `
        <div class="digit">${lifePath}</div>
        <p><strong>Life Path ${lifePath}.</strong> ${meanings[lifePath] || 'A number of meaningful pattern and balance.'}</p>
      `;
    });
  }
});
