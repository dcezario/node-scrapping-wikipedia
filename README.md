## Projeto de estudos sobre Node.js e web scrapping
Esse projeto é apenas para estudos de Node.Js e outras ferramentas.
A ideia é capturarmos as informações de cidades através de web scrapping das páginas da wikipedia.
Na primeira solicitação, os dados serão inseridos buscados no mongodb.
Nas próximas solicitações, as informações retornarão do mongodb ou do redis, dependendo do tempo entre cada request.

## Utilização:

    docker-compose up -d
    http://localhost:3000/city/cityname

## Exemplo de resultado do scrap:

    {
	  "nome": "Itaguaí",
      "fundacao": "5 de julho de 1818 (200 anos)",
      "gentilico": "itaguaiense",
      "prefeito": "Carlo Busatto Junior (\"Charlinho\") (PMDB)(2017 – 2020)",
      "unidade_federativa": "Rio de Janeiro",
      "mesorregiao": "Metropolitana do Rio de Janeiro Instituto Brasileiro de Geografia e Estatistica/2008 [1]",
      "microrregiao": "Itaguai Instituto Brasileiro de Geografia e Estatistica/2008 [1]",
      "regiao_metropolitana": "Rio de Janeiro",
      "municipios_limitrofes": "Rio de Janeiro, Paracambi, Mangaratiba, Pirai, Rio Claro e Seropedica.",
      "distancia_ate_a_capital": "73 km",
      "caracteristicas_geograficas": "",
      "area": "275,870 km² [2]",
      "populacao": "122 369 hab.  Censo Instituto Brasileiro de Geografia e Estatistica/2011[3]",
      "densidade": "443,57 hab./km²",
      "altitude": "15  [4] m",
      "clima": "Tropical Atlantico Aw",
      "fuso_horario": "UTC−3",
      "indicadores": "",
      "idh_m": "0,715 (38º) – elevado PNUD/2010 [5]",
      "pib": "R$ 2 966 910,694 mil Instituto Brasileiro de Geografia e Estatistica/2008[6]",
      "pib_per_capita": "R$ 28 661,65 Instituto Brasileiro de Geografia e Estatistica/2008[6]",
      "pagina_oficial": "",
      "prefeitura": "www.itaguai.rj.gov.br"
    }
