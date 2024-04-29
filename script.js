// Array para armazenar os favoritos
let favoritos = [];

// Função para adicionar um novo favorito
function adicionarFavorito() {
  const novoFavoritoInput = document.getElementById('novoFavorito');
  const novoFavorito = novoFavoritoInput.value.trim();

  if (novoFavorito !== '') {
    favoritos.push(novoFavorito);
    novoFavoritoInput.value = ''; // Limpa o campo de entrada

    exibirFavoritos();
  }
}

// Função para exibir a lista de favoritos
function exibirFavoritos() {
  const listaFavoritos = document.getElementById('listaFavoritos');
  listaFavoritos.innerHTML = ''; // Limpa a lista antes de exibir os favoritos atualizados

  favoritos.forEach((favorito, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = favorito;

    const deleteButton = document.createElement('span');
    deleteButton.innerHTML = ' &times;'; // "×" é o símbolo "x" para excluir
    deleteButton.className = 'delete';
    deleteButton.onclick = () => removerFavorito(index);

    listItem.appendChild(deleteButton);
    listaFavoritos.appendChild(listItem);
  });
}

// Função para remover um favorito
function removerFavorito(index) {
  favoritos.splice(index, 1);
  exibirFavoritos();
}
