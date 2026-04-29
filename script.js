//obs.: este código é responsável por destacar o link do menu correspondente à seção atualmente visível na página, melhorando a navegação e a experiência do usuário. adicionei alguns comentários explicativos para ver como funciona cada parte do código.

// sleciona todas as seções e os links do menu
const sections = document.querySelectorAll("section");

// seleciona os links do menu para destacar o link ativo
const links = document.querySelectorAll("nav a");

// adicionar um evento que é disparado sempre que o usuário rolar a página
window.addEventListener("scroll", () => {
  // variável para armazenar a seção atual
  let current = "";

  // percorre todas as seções para verificar qual está atualmente visível
  sections.forEach((section) => {
    // verifica se a posição de rolagem é maior ou igual à posição da seção
    if (scrollY >= section.offsetTop - 100) {
      // se for, atualiza a variável 'current' com o ID da seção
      current = section.id;
    }
  });

  // percorre todos os links do menu para destacar o link ativo
  links.forEach((link) => {
    // ativa o link se o href do link corresponder ao ID da seção atual
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + current,
    );
  });
});
