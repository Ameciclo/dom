import React, { useEffect, useState } from 'react';
import header_image from "../images/carta_compromisso.png"
import { newsApi } from '../services/request';
import newsImage from "../images/news00.png"


function News() {
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await newsApi()
      setDataNews(data.slice().sort((a, b) => b.id - a.id))
    }

    return fetchData();
  }, []);

  useEffect(() => console.log(dataNews), [dataNews])

  return (
    <main>
      <div className="home-last-news">
        <h1>Últimas Notícias</h1>
        <a href={`/noticias/1`} className='news-card'>
          <img src={newsImage} alt="" />
          <div className='news-card-text'>
            <span>03 de setembro de 2024</span>
            <div className='news-card-title'>
              <h1>Semana da Mobilidade 2024</h1>
            </div>
            <p>Prepare-se para a Semana da Mobilidade 2024!
Vamos celebrar o Dia Mundial Sem Carro, participar do Desafio Intermodal, e muito mais!
Vamos transformar a mobilidade urbana em Recife.</p>
          </div>
        </a><br />
        <a href={`/noticias/0`} className='news-card'>
          <img src={header_image} alt="" />
          <div className='news-card-text'>
            <span>01 de setembro de 2024</span>
            <div className='news-card-title'>
              <h1>Lançamento da Carta de Compromisso 2024</h1>
            </div>
            <p>No último sábado lançamos a Carta Compromisso 2024, e ainda estamos abertos a novas assinaturas. Se você deseja contribuir para a mobilidade sustentável, esperamos por você na Ameciclo.

              Sua participação é essencial!

              Atenciosamente,
              Equipe Ameciclo</p>
          </div>
        </a>
        
        <a href='/noticias'>Todas as notícias</a>
      </div>
    </main>
  );
}

export default News;