// Função para redirecionar o cliente para a página de menu
function redirectToMenu(menuType) {
    if (menuType === 'lunch') {
      window.location.href = 'almoço.html';
    } else if (menuType === 'dinner') {
      window.location.href = 'jantar.html';
    }
  }
  