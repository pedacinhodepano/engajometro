// Função para carregar e exibir o conteúdo de uma página
function loadContent(elementId, url) {
   console.log("[loaded] - Main");
   console.log("Debug");
   console.log(`${BASE_PATH}${url}`);
    fetch(`${BASE_PATH}${url}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .then(() => {
        // Carregar e executar o JavaScript da página inserida
        var scriptElement = document.createElement('script');
        scriptElement.src =  PAGE ? 'page.js':'pages/page.js'; 
        document.body.appendChild(scriptElement);
    })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
      
  }
  
  // Carregar os diferentes conteúdos nas áreas apropriadas
  loadContent('header', 'pages/bodyHeader.html');
  loadContent('footer', 'pages/bodyFooter.html');
  
