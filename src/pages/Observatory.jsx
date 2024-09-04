import React, { useEffect, useState } from 'react';
import ActionCarousel from '../components/ActionsCarousel';
import LazyLoad from 'react-lazyload';
import Loading from '../components/Loading';
import Chart from 'react-google-charts';

function Observatory() {
  const [renderOthers, setRenderOthers] = useState(false);

  const [totalGoodActions, setTotalGoodActions] = useState([])
  const [totalBadActions, setTotalBadActions] = useState([])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderOthers(true);
    }, 3000);
    setTotalGoodActions([
      {
        cod: 5011,
        name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
        subcod: 1590,
        subname: "Requalificação Urbanística E Inclusão Social Da Comunidade do Pilar",
        total: 3150000,
      },
      {
        cod: 5011,
        name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
        subcod: 1028,
        subname: "Ampliação E Melhoria Da Infraestrutura Urbana",
        total: 4340000,
      },
      {
        cod: 5011,
        name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
        subcod: 1576,
        subname: "Urbanização Das Margens De Rios E Canais",
        total: 4240000,
      },
      {
        cod: 5011,
        name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
        subcod: 1577,
        subname: "Projeto Capibaribe Melhor",
        total: 14640000,
      },
      {
        cod: 6401,
        name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
        subcod: 2032,
        subname: "Ações Para O Desenvolvimento Da Cidade Sustentável",
        total: 8795.000,
      },
      {
        cod: 6401,
        name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
        subcod: 2042,
        subname: " Promoção Da Gestão E A Articulação Das Ações Ambientais",
        total: 10000,
      },
    ]);

    setTotalBadActions(
      [
        {
          cod: 1012,
          name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
          subcod: 1012,
          subname: "Requalificação Da Mobilidade Urbana - Via Mangue",
          total: 300000,
        },
        {
          cod: 1563,
          name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
          subcod: 1012,
          subname: "Consolidação E Melhoramento Do Sistema Viário",
          total: 63960000,
        },
        {
          cod: 2510,
          name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
          subcod: 1012,
          subname: "Gerenciamento Do Trânsito E Do Transporte Público",
          total: 67285000,
        },
        {
          cod: 1035,
          name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
          subcod: 1012,
          subname: "Expansão E Melhoria Da Infraestrutura Da Cttu",
          total: 10000,
        },
        {
          cod: 2723,
          name: "PROJETO / ATIVIDADE / OPERÇÃO ESPECIAL (2024)",
          subcod: 1012,
          subname: "Apoio Administrativo Às Ações Da Unidade Orçamentária ",
          total: 17160000,
        }
      ]
    );
    return () => clearTimeout(timeout);
  }, []);

  const numParse = (numero) => numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  function AnimatedNumber({ initialValue, finalValue, duration }) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      const increment = (finalValue - initialValue) / (duration / 10);

      const interval = setInterval(() => {
        setValue((prevValue) => {
          const newValue = prevValue + increment;
          return newValue >= finalValue ? finalValue : newValue;
        });
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }, [initialValue, finalValue, duration]);

    return `${numParse(value)}`;
  }

  return (
    <main>
      {
        renderOthers ? (
          <>
            <h1 className='observatory-title'>Observatório</h1>
            <h1 className='observatory-titles'>Valores orçados para ações sustentáveis no Município em 2024</h1>
            <div className="data-cards fade-in">
              <div className="value-card display-flex-center good-value">
                <LazyLoad height={400} offset={0}>
                  <h1><AnimatedNumber initialValue={0} finalValue={35.2} duration={500} /> Bi</h1>
                  <h3>Valor orçado em ações sustentáveis:</h3>
                  <h3>R$ <AnimatedNumber initialValue={0} finalValue={
                    35175000} duration={2000} /></h3>
                </LazyLoad>
              </div>
              <div className="value-card display-flex-center bad-value">
                <LazyLoad height={400} offset={0}>
                  <h1><AnimatedNumber initialValue={0} finalValue={148.7} duration={500} /> Bi</h1>
                  <h3>Valor orçado em ações NÃO sustentáveis:</h3>
                  <h3>R$ <AnimatedNumber initialValue={0} finalValue={
                    148715000} duration={2000} /></h3>
                </LazyLoad>
              </div>
            </div><br /><br />
            <h1 className='observatory-titles'>Quanto é gasto por emissão de carbono em nosso Município</h1>
            <div className="data-cards fade-in">
              <div className="value-card display-flex-center carbon-value">
                <LazyLoad height={400} offset={0}>
                  <h1>R$ 3 Mil / CO2e</h1>
                  <h3>Valor por emissão de carbono (2020)</h3>
                  <h3>R$ 3.045,957</h3>
                </LazyLoad>
              </div>
            </div><br /><br />
            <h1 className='observatory-titles'>Qual valor total orçado e qual valor real executado em boas ações para a sustentabilidade em nosso Município</h1>
            <div className="data-cards fade-in">
              <div className="value-card display-flex-center">
                <LazyLoad height={400} offset={0}>
                  <h1><AnimatedNumber initialValue={0} finalValue={35.2} duration={500} /> Bi</h1>
                  <h3>Valor orçado em ações sustentáveis:</h3>
                  <h3>R$ <AnimatedNumber initialValue={0} finalValue={
                    35175000} duration={2000} /></h3>
                </LazyLoad>
              </div>
              <div className="value-card display-flex-center">
                <LazyLoad height={400} offset={0}>
                  <h1>---.- Mi</h1>
                  <h3>Valor Executado (em breve)</h3>
                  <h3>R$ ---.---.---</h3>
                </LazyLoad>
              </div>
            </div><br /><br />
            <h1 className='observatory-titles'>Gráfico de projeção de valores orçados em boas e más ações sustentáveis em 2021, 2023 e 2024</h1><br />
            <Chart
              chartType="Bar"
              data={
                [
                  ["Ano", "Sustentável (R$)", 'Não sustentável (R$)'],
                  ['2021', 111884449, 75073016],
                  ['2023', 11315000, 171801000],
                  ['2024', 35175000, 148715000],
                ]
              }
              width="100%"
              height="400px"
              options={{
                chart: {
                  subtitle: "Valores totais (R$) de orçados em 2021, 2023 e 2024",
                },
              }}
              legendToggle
            /><br /><br />

            <h1 className='observatory-titles'>Gráfico de projeção de valores orçados em boas ações sustentáveis no Município em 2021, 2023 e 2024</h1><br />
            <Chart
              chartType="Bar"
              data={
                [
                  ["Ano", "Orçado em boas ações"],
                  ['2021', 111884449],
                  ['2023', 11315000],
                  ['2024', 35175000],
                ]
              }
              width="100%"
              height="400px"
              options={{
                chart: {
                  subtitle: "Valores totais (R$) orçados em 2021, 2023 e 2024",
                },
              }}
              legendToggle
            /><br /><br />

            <h1 className='observatory-titles'>Gráfico de projeção de gastos totais no Município em 2021, 2023 e 2024</h1><br />
            <Chart
              chartType="Bar"
              data={
                [
                  ["Ano", "Total Boas/Más"],
                  ['2021', 186957465],
                  ['2023', 183116000],
                  ['2024', 183890000],
                ]
              }
              width="100%"
              height="400px"
              options={{
                chart: {
                  subtitle: "Valor total (R$) gasto em 2021, 2023 e 2024",
                },
              }}
              legendToggle
            /><br /><br /><br /><br />

            <h1 className="observatory-titles">Ações Sustentáveis</h1>
            <LazyLoad height={400} offset={0}>
              <ActionCarousel actions={totalGoodActions} actionType='good-action' />
            </LazyLoad>
            <h1 className="observatory-titles">Ações Não Sustentáveis</h1>
            <LazyLoad height={400} offset={0}>
              <ActionCarousel
                actionType='bad-action'
                actions={totalBadActions}
              />
            </LazyLoad>
            <br />
            <nav className='observatory-docs'>
              <div>
                <h1>Documentos Orçamentários</h1><br />
                <a href="http://dados.recife.pe.gov.br/dataset/despesas-orcamentarias/resource/718e6705-a7e1-4395-a7c5-13c141c182f7" target="_blank" rel="noopener noreferrer">Despesas orçamentárias 2021 - Portal de Dados Abertos de Pernambuco</a><br /><br />
                <a href="http://dados.recife.pe.gov.br/dataset/despesas-orcamentarias/resource/df6d4a2a-7f78-4f98-a38b-8cf74b7823d7" target="_blank" rel="noopener noreferrer">Despesas orçamentárias 2022 - Portal de Dados Abertos de Pernambuco</a><br /><br />
                <a href="http://dados.recife.pe.gov.br/dataset/despesas-orcamentarias/resource/a4b97fb4-7dc6-4e70-a87d-3c3503f00b1e">Despesas orçamentárias 2023 - Portal de Dados Abertos de Pernambuco</a><br /><br />
                <a href="http://dados.recife.pe.gov.br/dataset/despesas-orcamentarias/resource/6e5be9b8-7fe3-4831-abb2-44817d2f5417" target="_blank" rel="noopener noreferrer">Despesas Totais 2024 - Portal de Dados Abertos de Pernambuco</a><br /><br />
              </div>
              <div>
                <h1>Documentos Climáticos</h1><br />
                <a href="https://semas.pe.gov.br/wp-content/uploads/2022/03/2022_03_16_GIZ_plano_descarbonizacao_pernambuco-v6_reduzido.pdf">Plano de descarbonização de Pernambuco</a><br /><br />
                <a href="https://www.gov.br/mma/pt-br/assuntos/climaozoniodesertificacao/clima/diretrizes-para-uma-estrategia-nacional-para-neutralidade-climatica_.pdf">Diretrizes para uma estratégia nacional para neutralidade climática</a><br /><br />
                <a href="https://semas.pe.gov.br/grafico-inventario-gee/">Gráfico Dinâmico – Inventário de Gases de Efeito Estufa de Pernambuco</a><br /><br />
              </div>
              <div>
                <h1>Baixe os Dados</h1><br />
                <a href="http://dados.recife.pe.gov.br/datastore/dump/df6d4a2a-7f78-4f98-a38b-8cf74b7823d7?bom=True">(CSV) Despesas orçamentárias 2021 - Portal de Dados Abertos de Pernambuco</a><br /><br />
                <a href="http://dados.recife.pe.gov.br/datastore/dump/ea074e10-46a1-46a4-a2a4-47d1b331544d?bom=True" target="_blank" rel="noopener noreferrer">(CSV) Despesas orçamentárias 2022 - Portal de Dados Abertos de Pernambuco</a><br /><br />
                <a href="http://dados.recife.pe.gov.br/datastore/dump/a4b97fb4-7dc6-4e70-a87d-3c3503f00b1e?bom=True">(CSV) Despesas orçamentárias 2023 - Portal de Dados Abertos de Pernambuco</a><br /><br />
                <a href="http://dados.recife.pe.gov.br/datastore/dump/6e5be9b8-7fe3-4831-abb2-44817d2f5417?bom=True" target="_blank" rel="noopener noreferrer">(CSV) Despesas Totais 2024 - Portal de Dados Abertos de Pernambuco</a><br /><br />
              </div>
              <div>
                <a href="http://dados.recife.pe.gov.br/datastore/dump/df6d4a2a-7f78-4f98-a38b-8cf74b7823d7?format=json">(JSON) Despesas orçamentárias 2021 - Portal de Dados Abertos de Pernambuco</a><br /><br />
                <a href="http://dados.recife.pe.gov.br/datastore/dump/a4b97fb4-7dc6-4e70-a87d-3c3503f00b1e?format=json" target="_blank" rel="noopener noreferrer">(JSON) Despesas orçamentárias 2022 - Portal de Dados Abertos de Pernambuco</a><br /><br />
                <a href="http://dados.recife.pe.gov.br/datastore/dump/ea074e10-46a1-46a4-a2a4-47d1b331544d?format=json">(JSON) Despesas orçamentárias 2023 - Portal de Dados Abertos de Pernambuco</a><br /><br />
                <a href="http://dados.recife.pe.gov.br/datastore/dump/6e5be9b8-7fe3-4831-abb2-44817d2f5417?format=json">(JSON) Despesas Totais 2024 - Portal de Dados Abertos de Pernambuco</a><br /><br />
              </div>
              <div>
                <h1>Outros Documentos</h1><br />
                <a href="http://dados.recife.pe.gov.br/dataset/despesas-orcamentarias">Despesas Orçamentárias de 2001 à 2024 - Portal de Dados Abertos de Pernambuco</a><br /><br />
              </div>
            </nav>
          </>
        ) : <Loading />
      }
    </main>
  )
}

export default Observatory;