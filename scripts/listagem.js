function exibirEstoque() {
    let lista = document.getElementById("lista");
  
    if (lista.children.length > 0) {
      return;
    }
  
    const dadosArmazenadosString = localStorage.getItem("dadosDoFormulario");
  
    const dadosArmazenados = JSON.parse(dadosArmazenadosString);
  
    dadosArmazenados.forEach((dado) => {
      let novoDiv = document.createElement("div");
  
      let idParagrafo = document.createElement("p");
      idParagrafo.textContent = `ID: ${dado.id}`;
      novoDiv.appendChild(idParagrafo);
  
      let nomePecaParagrafo = document.createElement("p");
      nomePecaParagrafo.textContent = `Nome: ${dado.nomePeca}`;
      novoDiv.appendChild(nomePecaParagrafo);
  
      let tipoPecaParagrafo = document.createElement("p");
      tipoPecaParagrafo.textContent = `Tipo: ${dado.tipoPeca}`;
      novoDiv.appendChild(tipoPecaParagrafo);
  
      let corParagrafo = document.createElement("p");
      corParagrafo.textContent = `Cor: ${dado.cor}`;
      novoDiv.appendChild(corParagrafo);
  
      let quantidadeParagrafo = document.createElement("p");
      quantidadeParagrafo.textContent = `Quantidade: ${dado.quantidade}`;
      novoDiv.appendChild(quantidadeParagrafo);
  
      lista.appendChild(novoDiv);
    });
  }
  