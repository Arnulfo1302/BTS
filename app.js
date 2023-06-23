const sidebarToggle = document.querySelector('.boton-sidebar');
const sidebar = document.querySelector('.sidebar');
const barra = document.querySelector('.barra');
const body = document.body;

sidebarToggle.addEventListener('click', function(event) {
  event.stopPropagation();
  sidebar.classList.toggle('sidebar-open');
  barra.classList.toggle('barra-open');
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;
  const isClickInsideSidebar = sidebar.contains(targetElement);
  const isClickInbarra = barra.contains(targetElement);
  
  if (!isClickInsideSidebar & !isClickInbarra) {
    sidebar.classList.remove('sidebar-open');
    barra.classList.remove('barra-open');
  }
});
