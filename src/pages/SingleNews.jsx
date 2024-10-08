import React from 'react';
import { useParams } from 'react-router-dom';
import news_img_00 from "../images/carta_compromisso.png"
import news_img_01 from "../images/news00.png"

function SingleNews(props) {
  const { id } = useParams();

  const dataNew = [
    { title: "Carta da Mobilidade Sustentável no Recife 2024",
      text: "O contexto atual impõe desafios sem precedentes para a cidade do Recife, que se vê no epicentro de crises que ameaçam sua sustentabilidade e resiliência. O colapso climático já não é mais uma previsão distante; é uma realidade que afeta diretamente nossas vidas. As recentes tragédias, como as enchentes devastadoras no Rio Grande do Sul, que desalojaram comunidades inteiras, são um alerta sombrio de que eventos semelhantes podem atingir nossa cidade a qualquer momento. \n \n O Recife, é a capital do Brasil mais vulnerável às mudanças climáticas, de acordo com o Painel Intergovernamental sobre Mudanças Climáticas (IPCC) da ONU, precisa urgentemente de políticas que integrem a mobilidade urbana ao esforço de resiliência climática. Não podemos mais nos dar ao luxo de manter um modelo de mobilidade que prioriza o automóvel, ampliando a vulnerabilidade da cidade frente às mudanças climáticas. As consequências desse modelo estão evidentes: aumento das emissões de gases de efeito estufa, agravamento das inundações urbanas e ampliação das desigualdades sociais. De acordo com o 3o Inventário de Emissões de Gases do Efeito Estufa do Recife, observa-se “um protagonismo do setor de Transportes, em especial pelo consumo de gasolina” como principal emissor, combustível utilizado principalmente por carros e motos. É imperativo que a mobilidade seja repensada para garantir o Direito Humano que dá acesso aos demais Direitos e a própria sobrevivência de nossa cidade diante do colapso climático iminente. A falta de investimento em alternativas sustentáveis de transporte tem levado ao crescimento alarmante das mortes no trânsito, sem opções de transporte, as pessoas migram para usar o carro e a moto como modo de transporte, impulsionados pelo investimento nesse setor. \n \n Estamos assistindo a uma migração crescente para formas individuais de mobilidade, como motocicletas e serviços de aplicativo de transporte por motocicleta, que apenas intensificam o caos urbano e ampliam a mortalidade nas vias. Os dados indicam que, entre 2015 e 2023, série histórica disponível pela própria Prefeitura do Recife, o número de sinistros de trânsito com vítimas aumentou mais que duplicou, passando de 1.420 para 3.437. Esta carta, portanto, se dirige a todas as pessoas elegíveis e comprometidas com a construção de um Recife mais resiliente e seguro. Não há mais tempo para postergar ações que podem salvar vidas e garantir um futuro para a cidade. \n\n A mobilidade urbana precisa ser vista como uma peça central na luta contra o colapso climático e pela saúde da população e as políticas públicas devem refletir essa urgência. Conclamamos todos e todas a se comprometerem com uma agenda que coloque a vida e a sustentabilidade no centro do planejamento urbano, reconhecendo que a nossa sobrevivência depende das escolhas que fazemos hoje. Esta carta será apresentada para todas(os) as(os) candidatas(os) à prefeita(o) do Recife. Na ocasião, será recolhida a assinatura das(os) prefeituráveis que se comprometem, desta maneira, a executar as propostas aqui apresentadas, demandas da sociedade civil recifense para a mobilidade da cidade.\n\n CANDIDADOS QUE ASSINARAM:\n\nPREFEITURÁVEIS\nDani Portela\n\nVEREANÇA\nAlice Moreira\nBispa Jacimara\nCarol Vergolino\nCéu Ramos\nCida Pedrosa\nEdvaldo dos Santos Sales\nEduardo Paysan\nErnando Loloia\nJaize Metódio\nJô Pereira\nLiana Cirne\nNise Santos\nRicardo Gadelha\nThyago Amorim\nTomás Agra\nVictor Monte\nYasmim Alves",
      img: news_img_00,
      date: "1 de setembro de 2024",
    },
    {
      title: "Semana da Mobilidade 2024 acontecerá de 22 a 30 de setembro",
      text: "Prepare-se para a Semana da Mobilidade 2024!\n\n Vamos celebrar o Dia Mundial Sem Carro, participar do Desafio Intermodal, e muito mais! Vamos transformar a mobilidade urbana em Recife. Marque na sua agenda e junte-se a nós!\n\n Programação Completa em Breve. Fique de olho para mais detalhes e novidades!",
      img: news_img_01,
      date: "3 de setembro de 2024",
    }
  ].find((_new, index) => index === Number(id))

  return (
    <main>
      <div className='news-pg fade-in'>
        <h1>{dataNew.title}</h1>
        <span>{dataNew.date}</span>
        <p className='news-text'>{dataNew.text}</p>
      </div>
      <img className="news-img" src={dataNew.img} alt="imagem da noticia" />
    </main>
  );
}

export default SingleNews;