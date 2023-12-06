document
  .getElementById("formulario-cadastrar-roupa")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const dadosFormulario = {
      id: document.getElementById("id").value,
      nomePeca: document.getElementById("nome-peca").value,
      tipoPeca: obterValorRadio("peca"),
      cor: obterValorRadio("cor"),
      quantidade: document.getElementById("quantidade").value,
    };

    exibirMensagem("Roupa cadastrada com sucesso!");
    this.reset();

    adicionarAoLocalStorage(dadosFormulario);
  });

function obterValorRadio(nome) {
  const opcoesRadio = document.getElementsByName(nome);
  for (const opcao of opcoesRadio) {
    if (opcao.checked) {
      return opcao.value;
    }
  }
  return null;
}

function adicionarAoLocalStorage(novoObjeto) {
  const dadosArmazenadosString = localStorage.getItem("dadosDoFormulario");
 

  
  var dadosArmazenados = JSON.parse(dadosArmazenadosString) || [];
 

  dadosArmazenados.push(novoObjeto);

  const novaStringJSON = JSON.stringify(dadosArmazenados);

  localStorage.setItem("dadosDoFormulario", novaStringJSON);
}

function exibirMensagem(mensagem) {
  const elementoMensagem = document.getElementById("mensagem");
  elementoMensagem.textContent = mensagem;
  elementoMensagem.style.display = "block";

  elementoMensagem.scrollIntoView({ behavior: "smooth" });

  setTimeout(function () {
    elementoMensagem.style.display = "none";
  }, 3000);
}
