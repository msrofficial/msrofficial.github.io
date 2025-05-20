document.addEventListener('DOMContentLoaded', function() {
  // Animate background elements
  const bgElements = document.querySelectorAll('.bg-anime');
  bgElements.forEach((el, index) => {
    el.style.left = `${Math.random() * 100}vw`;
    el.style.top = `${Math.random() * 100}vh`;
    el.style.animationDuration = `${15 + Math.random() * 10}s`;
    el.style.width = `${30 + Math.random() * 40}px`;
    el.style.height = el.style.width;
  });

  // Skill bars animation
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    const level = skill.getAttribute('data-level');
    skill.style.setProperty('--level', `${level}%`);
  });

  // Add more interactive elements as needed
});
