function mudarFundo(imagem) {
  document.body.style.backgroundImage = `url('${imagem}')`;
}

function mostrarEtapa(idMostrar) {
  const etapas = ['etapa1', 'etapa2', 'etapa3'];
  etapas.forEach(etapa => {
    const el = document.getElementById(etapa);
    if (etapa === idMostrar) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}

function responderPreparada(resposta) {
  if (!resposta) {
    document.getElementById('naoPreparada').style.display = 'none';
    return;
  }
  mostrarEtapa('etapa2');
  mudarFundo('imagens/fundo2.jpg');
}

function responderJulgar(resposta) {
  const msg = document.getElementById('mensagemJulgar');

  if (!resposta) {
    msg.style.display = 'block';
    msg.textContent = 'Tá de sacanagem né? usarei as areias do tempo para você clicar sim kkkk 😜';
    return;
  }
  msg.style.display = 'none';
  mostrarEtapa('etapa3');
  mudarFundo('imagens/fundo3.jpg');
}

function escolherVersao(tipo) {
  const link = document.getElementById('linkEscolhido');

  if (tipo === 'implicito') {
    link.href = 'arquivos/La Danza de Los Cuerpos (Implicita).pdf';
    link.textContent = '📄 La Danza de los Cuerpos';
  } else {
    link.href = 'arquivos/La Danza de Los Cuerpos (Explicita).pdf';
    link.textContent = '📄 La Danza de los Cuerpos';
  }

  document.getElementById('pdfLinks').style.display = 'block';
}

window.onload = () => {
  mudarFundo('imagens/fundo1.jpg');
  mostrarEtapa('etapa1');
};