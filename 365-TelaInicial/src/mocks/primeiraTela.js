import base from '../../assets/base.png';
import logo from '../../assets/logo.png';
import topo from '../../assets/topo.png';

import pergunta from '../../assets/pergunta.png';
import tresCoisas from '../../assets/tresCoisas.png';

const primeiraTela = {
  //primeira tela
  topo: {
    titulo: "1ªpg AV1 22.2 JanaT²",
    logo: logo,
    topo: topo,
  },
  detalhes: {
    subtitulo: "O que te fez feliz hoje?",
    login:"LOGIN",
    senha: "SENHA",
    botao: "entrar",
    base: base,
  },
  //segunda tela
  topo2: {
    titulo: "2ªpg AV1 22.2 JanaT²",
    pergunta: pergunta,
    topo: topo,
    tresCoisas: tresCoisas, 
  }, 
  detalhes2: {
    subtitulo: "DESEJOS PARA A VIDA",

    caixaTexto:"",
    //botãoEditar: "Editar",
    //botaoExcluir: "Excluir",
    botaoSalvar: "Salvar",
    base: base,
  },
}

export default primeiraTela;