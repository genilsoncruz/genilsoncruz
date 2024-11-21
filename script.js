document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('nav ul li');
  const sections = document.querySelectorAll('main section');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const sectionId = item.getAttribute('data-section');

      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
          section.classList.add('active');
        }
      });
    });
  });

  // Ativa a primeira seção por padrão
  sections[0].classList.add('active');
});
