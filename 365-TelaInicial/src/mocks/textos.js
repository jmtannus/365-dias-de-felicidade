import base from '../../assets/base.png';
import logo from '../../assets/logo.png';
import topo from '../../assets/topo.png';
import telaTucano from '../../assets/telaTucano.png';

const textos = {
  //primeira tela
  topo: {
    titulo: "1ªpg AV1 22.2 JanaT²",
    logo: logo,
    topo: topo,
  },
  detalhes: {
    subtitulo: "O que te fez feliz hoje?",
    botao: "entrar",
    botaoCadastro: "sou novo",
    base: base,
  },

  //segunda tela
  telaTucano: {
    telaTucano: telaTucano,
    logo: logo,
    titulo: "2ªpg AV1 22.2 JanaT²",
    subtitulo: ":) Descreva o que te",
    subtitulo1: " fez sorrir hoje: :D",
    botaoSalvar: "salvar",
  },

  //quarta tela
  cadastro: {
    titulo: "4ªpg AV1 22.2 JanaT²",
    subtitulo: " Crie sua Conta",
    subtitulo1: " ou use seu e-mail para cadastro:",
    caixaNome: "nome",
    caixaEmail: "e-mail",
    caixaNovaSenha: "nova senha",
    caixaConfirme: "confirme a senha",
    botao: "sign up",
  },

  //quinta tela
  telaTresTextos: {
    caixaNome: "nome",
    caixaEmail: "email",
    caixaNovaSenha: "primeira",
    caixaConfirme: "confirme",
    botaoSignUp: "salvar",
    textoBotao: "salvar",
  },
}

export default textos;