document.addEventListener('DOMContentLoaded', function() {
  // Atualizar o ano no footer
  const footerYear = document.querySelector('.footer p');
  const currentYear = new Date().getFullYear();
  footerYear.textContent = footerYear.textContent.replace('2025', currentYear);
  
  // Adicionar efeito de revelação ao rolar
  function revealOnScroll() {
      const elements = document.querySelectorAll('.preceptor, .mentor-chief');
      
      elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementTop < windowHeight - 50) {
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
          }
      });
  }
  
  // Inicializar elementos com opacidade 0
  const animatedElements = document.querySelectorAll('.preceptor, .mentor-chief');
  animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  
  // Adicionar evento de scroll para revelar elementos
  window.addEventListener('scroll', revealOnScroll);
  
  // Chamar uma vez para elementos visíveis na carga inicial
  revealOnScroll();
  
  // Verificar se as imagens foram carregadas corretamente
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
      img.addEventListener('error', function() {
          this.src = 'placeholder.png'; // Imagem de fallback
          console.log('Erro ao carregar imagem: ' + this.alt);
      });
  });
  
  // Adicionar confirmação ao clicar nos botões de agendamento
  const scheduleBtns = document.querySelectorAll('.schedule-btn');
  
  scheduleBtns.forEach(btn => {
      btn.addEventListener('click', function(e) {
          // Não bloqueamos a navegação, apenas mostramos uma mensagem informativa
          setTimeout(() => {
              alert('Redirecionando para o agendamento. Por favor, escolha um horário disponível.');
          }, 100);
      });
  });
});