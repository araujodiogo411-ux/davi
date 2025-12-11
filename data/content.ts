import { BookData } from '../types';

export const textbookContent: BookData = {
  title: "UM MUNDO DE CIDADES",
  subtitle: "GEOGRAFIA",
  author: "Material Didático Interativo",
  grade: "6º ANO - ENSINO FUNDAMENTAL",
  publisher: "SAE Digital",
  publisherUrl: "https://sae.digital",
  chapters: [
    {
      id: "cap1-evolucao",
      title: "A EVOLUÇÃO INDUSTRIAL",
      illustrationPrompt: "Ilustração vetorial plana (flat design) comparando uma oficina artesanal antiga com uma fábrica moderna automatizada, estilo educativo, cores azul e roxo.",
      sections: [
        {
          title: "Da Manufatura à Maquinofatura",
          content: "A atividade industrial, tal como a concebemos na contemporaneidade, é o resultado cumulativo de um processo histórico longo, complexo e fascinante que transformou de maneira radical e irreversível a humanidade e o espaço geográfico global. Antes do advento das indústrias modernas, a produção de bens essenciais e supérfluos era predominantemente artesanal, familiar e descentralizada. O artesão, figura central desse período, detinha o controle absoluto sobre seu tempo e sobre todas as etapas dos meios de produção: era ele quem obtinha a matéria-prima diretamente na natureza, preparava-a cuidadosamente com ferramentas manuais simples e confeccionava o produto final no seu próprio ritmo biológico, muitas vezes no conforto de sua própria casa, envolvendo todos os membros da família — desde crianças a idosos — no processo produtivo cotidiano.\n\nContudo, a partir do século XVII, esse cenário bucólico começou a sofrer alterações significativas com o surgimento das manufaturas, onde dezenas de artesãos eram reunidos em grandes galpões sob o comando e vigilância de um patrão, iniciando uma divisão técnica do trabalho ainda incipiente. Mas a verdadeira, disruptiva e grande virada ocorreu com a Primeira Revolução Industrial, iniciada em meados do século XVIII na Inglaterra. Este período marcou a transição drástica para a maquinofatura, um sistema onde as máquinas, movidas inicialmente a vapor, assumiram o papel protagonista na produção, substituindo a força muscular humana e animal e impondo um novo ritmo frenético, mecânico e incessante à fabricação de mercadorias.\n\nO uso intensivo do carvão mineral como fonte de energia primária para alimentar as recém-inventadas máquinas a vapor permitiu que as fábricas produzissem em uma escala gigantesca, jamais vista na história da civilização. O que antes levava dias ou semanas para ser meticulosamente feito por um artesão habilidoso, passou a ser produzido em questão de minutos, padronizando e barateando os produtos, tornando-os acessíveis a uma parcela significativamente maior da população. É fundamental notar que essa mudança não foi apenas técnica ou econômica, mas profundamente cultural e social: a sociedade ocidental passou a se organizar quase que exclusivamente em torno da produção e consumo de mercadorias, e o lucro tornou-se o motor central das relações humanas, moldando as bases do capitalismo industrial que viria a dominar o globo nos séculos seguintes.",
          note: "Curiosidade: A Primeira Revolução Industrial foi marcada pelo motor a vapor. Hoje, vivemos a Indústria 4.0, caracterizada pela Inteligência Artificial, Big Data e Internet das Coisas (IoT).",
          qrCodeLabel: "Vídeo: Revolução Industrial",
          qrCodeLink: "https://pt.wikipedia.org/wiki/Revolução_Industrial"
        },
        {
          title: "Impactos Profundos na Sociedade e no Espaço",
          content: "A industrialização não se limitou a alterar a forma de produzir objetos; ela reorganizou completamente a estrutura do espaço geográfico e a vida cotidiana das pessoas. As primeiras cidades industriais, como Manchester, Liverpool e Londres, cresceram de forma caótica e desordenada ao redor das chaminés das fábricas, funcionando como poderosos ímãs que atraíam milhares de camponeses expulsos de suas terras pelas leis de cercamento ou simplesmente em busca de melhores oportunidades de sobrevivência, visto que o campo também passava por suas próprias transformações.\n\nIsso deu início ao processo de urbanização acelerada que moldaria a face do mundo moderno. Surgiu uma nova classe social: o proletariado urbano, uma massa de trabalhadores que, desprovida de terras, ferramentas ou capital, vendia sua única posse — a força de trabalho — em troca de salários muitas vezes irrisórios. O ritmo da vida, antes ditado organicamente pelo nascer e pôr do sol e pelas estações do ano no campo, passou a ser controlado rigorosamente pelo relógio da fábrica e pelo apito estridente da sirene. As chaminés das fábricas passaram a compor a paisagem urbana hegemônica, lançando fumaça negra e alterando o meio ambiente local, um prenúncio sombrio das graves questões climáticas que a humanidade enfrentaria séculos depois. Além disso, a separação física entre o local de trabalho (a fábrica) e o local de moradia criou, pela primeira vez, a necessidade de deslocamentos diários em massa, dando origem aos complexos problemas de transporte urbano e à segregação socioespacial dos bairros operários em contraste com os bairros burgueses.",
        }
      ],
      activities: [
        {
          id: "act-1",
          type: "multiple-choice",
          text: "Qual foi a principal fonte de energia da 1ª Revolução Industrial?",
          options: ["Energia Solar", "Petróleo e Gás", "Carvão Mineral (Vapor)", "Energia Nuclear"]
        },
        {
          id: "act-2",
          type: "open-ended",
          text: "Descreva detalhadamente as principais diferenças entre o modo de produção artesanal e a maquinofatura, focando especificamente no controle do tempo e na propriedade das ferramentas.",
          lines: 10
        }
      ]
    },
    {
      id: "cap2-tipos",
      title: "TIPOS DE INDÚSTRIA",
      illustrationPrompt: "Mapa mental ilustrado vetorial mostrando três fábricas diferentes: uma siderúrgica (fogo), uma de peças (engrenagens) e uma de sapatos (produto final).",
      sections: [
        {
          title: "Classificação Industrial Detalhada",
          content: "No complexo tecido da economia global, as indústrias não são entidades homogêneas; elas possuem funções altamente específicas e ocupam elos distintos na cadeia produtiva. Para fins de estudo geográfico e planejamento econômico estatal, elas são classificadas rigorosamente de acordo com o destino de sua produção e o tipo de tecnologia empregada. Essa classificação é essencial para entendermos como a economia de um país está estruturada e qual seu nível de desenvolvimento.\n\nPrimeiramente, identificamos as Indústrias de Base (ou indústrias de bens de produção). Estas são consideradas as indústrias 'pesadas', o alicerce da economia, pois são responsáveis por transformar grandes quantidades de matéria-prima bruta retirada da natureza (minérios, petróleo, madeira) em produtos processados que servirão de base fundamental para outras indústrias. Exemplos clássicos incluem as siderúrgicas (que transformam minério de ferro em aço), as metalúrgicas e as petroquímicas. Devido ao peso e volume de seus insumos, elas geralmente se localizam estrategicamente próximas às fontes de matéria-prima ou a grandes portos e ferrovias para facilitar o transporte de cargas massivas.\n\nEm um segundo nível estratégico, temos as Indústrias de Bens Intermediários (ou bens de capital). Elas produzem o maquinário, as ferramentas, os motores e os equipamentos que serão utilizados no chão de fábrica de outras empresas. Por exemplo, uma fábrica que produz robôs para montadoras de automóveis ou tratores para a agricultura moderna. Elas são vitais para a modernização tecnológica da economia, pois fornecem os meios necessários para que outros setores produzam com eficiência e competitividade.",
          qrCodeLabel: "Infográfico: Tipos de Indústria",
          qrCodeLink: "https://brasilescola.uol.com.br/geografia/tipos-industrias.htm"
        },
        {
          title: "Indústrias de Bens de Consumo",
          content: "As Indústrias de Bens de Consumo são as mais visíveis e presentes no nosso cotidiano, pois produzem as mercadorias voltadas diretamente para o mercado consumidor final, ou seja, para a população em geral. Elas são subdivididas em duas categorias principais baseadas na durabilidade de seus produtos: Bens de Consumo Duráveis e Bens de Consumo Não Duráveis.\n\nAs indústrias de bens duráveis fabricam produtos complexos com longa vida útil, projetados para durar anos, como automóveis, eletrodomésticos (geladeiras, fogões), móveis e eletrônicos. A compra desses itens geralmente envolve um planejamento financeiro maior por parte das famílias e muitas vezes depende de crédito. Já as indústrias de bens não duráveis (ou semiduráveis) produzem itens de consumo rápido, recorrente ou imediato, como alimentos processados, bebidas, roupas, calçados e medicamentos. A localização dessas indústrias geralmente busca uma proximidade estratégica com grandes centros urbanos densamente povoados, garantindo acesso rápido aos consumidores, reduzindo custos de logística de distribuição e permitindo que produtos frescos cheguem às prateleiras diariamente, atendendo à demanda constante das cidades."
        }
      ],
      activities: [
        {
          id: "act-3",
          type: "multiple-choice",
          text: "Uma fábrica que produz aço para outras fábricas é classificada como:",
          options: ["Indústria de Base", "Indústria de Bens Duráveis", "Indústria Têxtil", "Indústria de Ponta"]
        },
        {
          id: "act-4",
          type: "open-ended",
          text: "Cite três exemplos de bens de consumo duráveis e explique por que a localização dessas indústrias próxima às cidades é considerada estratégica.",
          lines: 9
        }
      ]
    },
    {
      id: "cap3-urbanizacao",
      title: "URBANIZAÇÃO ACELERADA",
      illustrationPrompt: "Ilustração isométrica vetorial de uma cidade densa com arranha-céus, ruas movimentadas e fluxo de pessoas, cores vibrantes.",
      sections: [
        {
          title: "Compreendendo o Fenômeno Urbano",
          content: "A urbanização é um conceito demográfico fundamental que descreve o processo dinâmico e contínuo em que a população urbana cresce em um ritmo percentualmente superior ao da população rural. Esse fenômeno transformador não ocorre por acaso; ele se intensificou globalmente após a consolidação da industrialização nos séculos XIX e XX. As fábricas e o setor de serviços nas cidades funcionaram como poderosos ímãs econômicos, atraindo trabalhadores do campo em massa e gerando o chamado êxodo rural.\n\nNo Brasil, esse processo foi historicamente tardio, ocorrendo principalmente na segunda metade do século XX, mas foi extremamente rápido, intenso e descontrolado. Em um intervalo de poucas décadas, o país deixou de ser uma nação predominantemente agrária e rural para se tornar uma nação massivamente urbana. Atualmente, mais de 85% dos brasileiros vivem em cidades. Esse crescimento vertiginoso, muitas vezes ocorrido sem o devido planejamento estatal ou infraestrutura prévia, gerou uma demanda explosiva e não atendida por serviços básicos, como saneamento, transporte, escolas e habitação. O resultado visível desse inchaço urbano rápido é a formação de grandes periferias carentes, onde a cidade cresceu mais rápido do que a capacidade do governo de organizá-la, gerando desafios sociais que persistem até hoje.",
          note: "Conceito Chave: Conurbação é a unificação física da malha urbana de duas ou mais cidades vizinhas que cresceram horizontalmente até se encontrar, formando uma mancha urbana contínua.",
          qrCodeLabel: "Dados do IBGE",
          qrCodeLink: "https://cidades.ibge.gov.br/"
        },
        {
          title: "Hierarquia e Rede Urbana",
          content: "As cidades não estão isoladas no mapa como ilhas autossuficientes; elas se conectam por fluxos constantes e intensos de pessoas, mercadorias, capital e informação, formando o que chamamos de rede urbana. Dentro dessa rede complexa, existe uma hierarquia de influência e poder muito clara, onde algumas cidades comandam e outras obedecem às dinâmicas econômicas regionais ou nacionais.\n\nNo topo dessa pirâmide hierárquica estão as Metrópoles (nacionais ou globais), verdadeiros nós de poder que concentram as decisões econômicas, o poder político e os serviços mais complexos e especializados, como hospitais de referência com tecnologias avançadas, grandes universidades de pesquisa, aeroportos internacionais e sedes de empresas multinacionais. Elas comandam a rede urbana, estendendo sua influência sobre as capitais regionais, centros sub-regionais e cidades menores ao seu redor. Essa relação cria uma teia de dependência onde os habitantes das cidades menores frequentemente precisam viajar para as metrópoles em busca de bens, serviços ou oportunidades que não encontram localmente."
        }
      ],
      activities: [
        {
          id: "act-5",
          type: "multiple-choice",
          text: "O que impulsionou o êxodo rural maciço no Brasil a partir de 1950?",
          options: ["O Turismo Rural", "A Industrialização", "A Seca no Sul", "A Mineração"]
        },
        {
          id: "act-6",
          type: "open-ended",
          text: "Explique com suas palavras o conceito de hierarquia urbana e qual o papel fundamental das metrópoles nessa organização territorial.",
          lines: 9
        }
      ]
    },
    {
      id: "cap4-ambiental",
      title: "PROBLEMAS AMBIENTAIS",
      illustrationPrompt: "Ilustração vetorial dividida: lado esquerdo cinza com poluição e lixo, lado direito verde com energia limpa e reciclagem.",
      sections: [
        {
          title: "A Pressão Humana sobre o Meio Ambiente",
          content: "O crescimento desordenado, rápido e muitas vezes predatório das grandes cidades gera graves impactos ambientais (os chamados macroproblemas urbanos) que afetam diretamente a qualidade de vida e a saúde da população. Um dos problemas mais visíveis e destrutivos é a impermeabilização do solo, causada pelo excesso de asfalto, calçadas, edifícios e construções de concreto que cobrem a terra nua. Essa camada impermeável impede a absorção natural e necessária da água da chuva pelo solo, sobrecarregando os sistemas de drenagem artificiais (bueiros e galerias) e causando enchentes frequentes e devastadoras em épocas de chuvas intensas, destruindo patrimônio e colocando vidas em risco.\n\nAlém disso, a poluição atmosférica é uma ameaça constante, silenciosa e invisível nos grandes centros. Gerada principalmente pela queima de combustíveis fósseis (gasolina e diesel) por milhões de veículos e pelas chaminés das indústrias, a poluição do ar causa problemas respiratórios severos, alergias e contribui para a chuva ácida, que corrói monumentos e altera o pH dos solos e águas. Outro ponto crítico é a geração massiva de resíduos sólidos (lixo). A cultura do descarte rápido, aliada a uma coleta ineficiente e a destinação inadequada, muitas vezes resulta em lixões a céu aberto, que contaminam o solo e os lençóis freáticos com chorume tóxico, além de atrair vetores de doenças perigosas. A sustentabilidade urbana tornou-se, portanto, o maior desafio do século XXI.",
          qrCodeLabel: "Vídeo: Ilhas de Calor",
          qrCodeLink: "https://www.youtube.com/results?search_query=ilhas+de+calor"
        },
        {
          title: "O Fenômeno das Ilhas de Calor",
          content: "As ilhas de calor representam um fenômeno climático tipicamente urbano e antropogênico (causado pela ação humana). Ele se caracteriza pelo fato de a temperatura média no centro da cidade (especialmente em áreas muito densas e verticalizadas) ser significativamente maior — às vezes 4°C a 6°C a mais — do que nas áreas rurais vizinhas ou em parques arborizados da mesma região.\n\nIsso ocorre devido a uma combinação fatal de fatores físicos e químicos: a alta concentração de asfalto e concreto (materiais escuros que absorvem e retêm muito calor do sol durante o dia e o liberam lentamente à noite), a presença de muitos prédios altos que barram a circulação natural dos ventos (efeito cânion urbano), a poluição que cria uma estufa local e, crucialmente, a escassez de áreas verdes, árvores e corpos d'água. A falta de vegetação elimina o 'ar-condicionado natural' proporcionado pela evapotranspiração, tornando o ambiente urbano hostil e excessivamente quente."
        }
      ],
      activities: [
        {
          id: "act-7",
          type: "multiple-choice",
          text: "Qual material urbano contribui mais para a formação de ilhas de calor?",
          options: ["Grama", "Asfalto e Concreto", "Água", "Madeira"]
        },
        {
          id: "act-8",
          type: "open-ended",
          text: "Como a impermeabilização do solo nas cidades agrava o problema das enchentes? Explique o processo detalhadamente.",
          lines: 9
        }
      ]
    },
    {
      id: "cap5-social",
      title: "DESAFIOS SOCIAIS",
      illustrationPrompt: "Ilustração vetorial mostrando contrastes sociais em uma cidade: transporte lotado vs transporte eficiente, moradia precária vs prédios modernos.",
      sections: [
        {
          title: "A Desigualdade Desenhada no Espaço Urbano",
          content: "As cidades brasileiras, infelizmente, são marcadas por profundas cicatrizes de desigualdade social que se refletem fisicamente na paisagem e na organização do espaço urbano. Enquanto algumas áreas nobres e centrais possuem infraestrutura de primeiro mundo — com saneamento básico completo, segurança privada, ruas asfaltadas, iluminação LED, parques bem cuidados e vastas opções de lazer cultural —, as periferias muitas vezes sofrem com a precariedade total ou parcial desses serviços essenciais.\n\nO déficit habitacional é um dos sintomas mais graves e visíveis dessa desigualdade estrutural. A falta de moradia digna e acessível no mercado formal leva milhões de famílias de baixa renda a ocuparem áreas inadequadas, vivendo em favelas, cortiços insalubres ou áreas de risco geológico (como encostas de morros sujeitas a deslizamentos e margens de rios sujeitas a inundações), sem acesso formal a água potável ou esgoto tratado. Essa exclusão territorial reforça o ciclo da pobreza.\n\nO transporte público é outro grande desafio diário que afeta a dignidade do cidadão e a economia da cidade. Em grandes metrópoles, os trabalhadores de baixa renda, que geralmente moram nas franjas distantes da cidade (cidades-dormitório), perdem horas preciosas do seu dia em deslocamentos longos, caros e desconfortáveis em ônibus superlotados ou trens precários. Esse tempo perdido no trânsito afeta diretamente sua saúde física e mental, reduz seu tempo de lazer e convívio familiar, e impacta sua produtividade. A mobilidade urbana precisa ser urgentemente repensada com foco no transporte coletivo de qualidade."
        },
        {
          title: "Em Busca de Soluções Sustentáveis",
          content: "Para tornar as cidades mais justas, humanas e funcionais para todos os seus habitantes, é necessário um planejamento urbano eficiente, democrático e participativo. Isso não se resolve apenas com obras faraônicas, mas com políticas públicas integradas e contínuas de longo prazo. É fundamental o investimento maciço em habitação popular de qualidade (urbanização de favelas e regularização fundiária), a melhoria e expansão da malha de transporte público de alta capacidade (metrô, trens, BRT) e políticas fiscais de redução da desigualdade.\n\nO conceito moderno de 'Cidades Inteligentes' (Smart Cities) busca usar a tecnologia e a análise de dados para otimizar serviços como o trânsito e a coleta de lixo, mas a verdadeira inteligência de uma cidade está em equilibrar o crescimento econômico com o bem-estar social e a sustentabilidade ambiental, garantindo o 'Direito à Cidade' para todos, independentemente de sua renda."
        }
      ],
      activities: [
        {
          id: "act-9",
          type: "multiple-choice",
          text: "O que caracteriza a segregação socioespacial nas grandes cidades?",
          options: ["Mistura de classes", "Separação por renda", "Excesso rural", "Falta de comércio"]
        },
        {
          id: "act-10",
          type: "open-ended",
          text: "Por que o tempo de deslocamento no transporte público é considerado um indicador de desigualdade social e qualidade de vida?",
          lines: 9
        }
      ]
    },
    {
      id: "cap6-campo",
      title: "O CAMPO MODERNO",
      illustrationPrompt: "Ilustração vetorial de agricultura de alta tecnologia: drones sobrevoando plantação, colheitadeira moderna com GPS, estilo flat design.",
      sections: [
        {
          title: "A Revolução Tecnológica no Campo",
          content: "No passado, havia uma distinção clara e rígida entre o modo de vida no campo (rural) e na cidade (urbano), com ritmos, culturas e tecnologias muito diferentes. Hoje, porém, essa fronteira está cada vez menos visível e mais fluida. A indústria e a tecnologia de ponta chegaram ao campo com força total, transformando radicalmente a paisagem agrária e as relações de trabalho.\n\nAtravés da mecanização pesada e da biotecnologia avançada, as fazendas modernas operam como verdadeiras fábricas a céu aberto, visando a máxima eficiência produtiva. O uso de tratores autônomos guiados por GPS de alta precisão, drones equipados com câmeras espectrais para monitoramento de saúde das plantas, sistemas de irrigação automatizados e sementes geneticamente modificadas (transgênicos) aumentou exponencialmente a produtividade agrícola por hectare. Não se planta mais 'na sorte' ou dependendo apenas da intuição; planta-se com base em análise de dados (Big Data) e meteorologia de precisão.\n\nEsse processo intenso de modernização deu origem aos chamados Complexos Agroindustriais. Neles, a produção agrícola não termina na colheita; ela está diretamente integrada às indústrias de processamento (fábricas de suco, usinas de açúcar e álcool, frigoríficos) e aos sistemas logísticos de exportação, criando uma cadeia produtiva global altamente eficiente, lucrativa e conectada aos mercados internacionais."
        },
        {
          title: "As Consequências Sociais e Ambientais",
          content: "Se por um lado a tecnologia aumentou drasticamente a produção de alimentos e commodities (soja, milho, algodão) para exportação, garantindo superávits comerciais, por outro, gerou profundas consequências sociais negativas. A mecanização reduziu a necessidade de mão de obra braçal no campo, substituindo dezenas de trabalhadores por uma única colheitadeira operada por satélite. Isso forçou (e continua forçando) muitos trabalhadores rurais e pequenos produtores a migrarem para as periferias das grandes cidades, mantendo o fluxo do êxodo rural e inchando os centros urbanos.\n\nAlém disso, o modelo do agronegócio moderno, muitas vezes baseado na monocultura em latifúndios extensos, depende do uso intensivo de fertilizantes químicos e agrotóxicos para manter a produtividade. Isso levanta sérias e urgentes preocupações ambientais sobre a contaminação do solo, o envenenamento dos rios e lençóis freáticos, a perda de biodiversidade (como a morte massiva de polinizadores essenciais como as abelhas) e a presença de resíduos tóxicos nos alimentos."
        }
      ],
      activities: [
        {
          id: "act-11",
          type: "multiple-choice",
          text: "O que define um Complexo Agroindustrial moderno?",
          options: ["Plantação familiar", "União campo-indústria", "Parque rural", "Feira livre"]
        },
        {
          id: "act-12",
          type: "open-ended",
          text: "Analise um ponto positivo (econômico) e um ponto negativo (social/ambiental) da mecanização intensiva do campo brasileiro.",
          lines: 9
        }
      ]
    },
    {
      id: "cap7-transporte",
      title: "REDES DE TRANSPORTE",
      illustrationPrompt: "Mapa estilizado vetorial mostrando conexões: rodovias, ferrovias, portos e aeroportos interligados, ícones de caminhões e navios.",
      sections: [
        {
          title: "A Circulação da Riqueza e a Logística",
          content: "Para que a indústria produza e a agricultura alimente o mundo, é fundamental que existam redes de transporte e comunicação eficientes e integradas. As mercadorias não se teletransportam; elas precisam sair das fábricas e fazendas para chegar até os centros de distribuição, lojas e, finalmente, aos consumidores. A logística é a ciência estratégica que estuda e otimiza esse fluxo físico.\n\nOs principais meios de transporte (chamados de modais) possuem características próprias de custo, velocidade e capacidade. Temos o transporte rodoviário (caminhões e carretas), ferroviário (trens de carga), hidroviário (navios e barcaças em rios ou mar) e aéreo (aviões de carga). No Brasil, há uma dependência histórica e excessiva do transporte rodoviário, fruto de escolhas políticas do século XX. Embora os caminhões tenham a vantagem da flexibilidade de entregar 'porta a porta' e alcançar locais difíceis, eles têm um custo de frete muito mais alto, menor capacidade de carga e são muito mais poluentes e perigosos para longas distâncias se comparados aos trens ou navios.\n\nUm sistema de transporte nacional equilibrado e inteligente deve buscar a Intermodalidade, ou seja, a integração eficiente entre diferentes modais, usando o melhor de cada um para cada etapa da viagem. Por exemplo: a soja sai da fazenda de caminhão (trecho curto) até um terminal ferroviário, segue de trem (trecho longo e barato) até o porto e viaja de navio até a China."
        },
        {
          title: "Os Fluxos Invisíveis de Informação",
          content: "No mundo globalizado contemporâneo, além de mercadorias físicas, existe um fluxo vital e invisível que sustenta a economia: o transporte de informações, dados e capital. A infraestrutura de telecomunicações — formada por cabos de fibra óptica submarinos que cruzam oceanos, antenas 5G e constelações de satélites — forma o 'sistema nervoso' da economia moderna.\n\nEssas redes permitem transações financeiras instantâneas entre bolsas de valores de continentes diferentes, o gerenciamento logístico em tempo real de frotas e containers, e a comunicação global instantânea entre pessoas e empresas. Sem esses fluxos imateriais de informação, a globalização como conhecemos hoje seria impossível, pois o capital financeiro precisa circular muito mais rápido do que as mercadorias físicas para gerar lucro e investimento em tempo real."
        }
      ],
      activities: [
        {
          id: "act-13",
          type: "multiple-choice",
          text: "Qual o principal problema da matriz de transporte de cargas brasileira?",
          options: ["Excesso de trens", "Dependência de rodovias", "Muitos portos", "Uso só de aviões"]
        },
        {
          id: "act-14",
          type: "open-ended",
          text: "Explique o que é intermodalidade e dê um exemplo prático de como ela funciona para reduzir custos logísticos.",
          lines: 9
        }
      ]
    },
    {
      id: "cap8-consumo",
      title: "CONSUMO E GLOBALIZAÇÃO",
      illustrationPrompt: "Ilustração vetorial de um globo terrestre cercado por produtos (celular, tênis, roupas) e sacolas de compras, representando o comércio mundial.",
      sections: [
        {
          title: "A Sociedade de Consumo em Massa",
          content: "A produção industrial em larga escala, aperfeiçoada ao longo do século XX (através de modelos produtivos como o Fordismo e o Toyotismo), permitiu o surgimento da chamada Sociedade de Consumo. Neste modelo econômico e cultural, a felicidade, a realização pessoal e o status social são muitas vezes associados diretamente à capacidade de adquirir bens e serviços. Somos constantemente bombardeados e estimulados pela publicidade, pelo marketing e pelas redes sociais a comprar novos produtos, muitas vezes sem ter uma necessidade real ou funcional para eles, buscando apenas satisfação psicológica momentânea.\n\nEsse fenômeno é alimentado pela estratégia da 'Obsolescência Programada' — onde produtos são intencionalmente desenhados para durar pouco, quebrar ou se tornarem ultrapassados tecnologicamente em pouco tempo — e pela moda efêmera (fast fashion). Esse ciclo frenético de extração de recursos naturais, produção industrial, compra, uso rápido e descarte movimenta a economia e gera empregos, mas gera também uma quantidade insustentável de lixo, esgota os recursos naturais finitos do planeta (água, minérios, petróleo) e acelera as mudanças climáticas e a poluição global.\n\nA Globalização intensificou dramaticamente esse processo, criando uma verdadeira fábrica mundial interconectada. Um simples tênis pode ser desenhado nos EUA (design e marketing), fabricado no Vietnã (mão de obra barata) com borracha da Indonésia e couro do Brasil, e vendido na Europa."
        },
        {
          title: "O Caminho Rumo à Sustentabilidade",
          content: "O grande desafio da humanidade no século XXI é transitar do consumismo desenfreado e predatório para o Consumo Consciente e Responsável. Isso não significa necessariamente parar de consumir, mas sim refletir profundamente sobre o impacto de nossas escolhas diárias. Significa perguntar antes de cada compra: 'Eu realmente preciso disso?', 'De onde veio esse produto?', 'Como ele foi feito (respeitou leis trabalhistas e ambientais)?', 'Para onde ele vai quando eu descartá-lo?'.\n\nPráticas inovadoras como a Economia Circular propõem um novo modelo industrial onde os produtos são projetados desde o início para serem duráveis, consertáveis e, no fim da vida útil, totalmente desmontados e transformados em nova matéria-prima, eliminando o conceito de 'lixo' e imitando os ciclos regenerativos perfeitos da natureza. A mudança depende tanto de novas tecnologias quanto de uma nova consciência cidadã global."
        }
      ],
      activities: [
        {
          id: "act-15",
          type: "multiple-choice",
          text: "O que é Obsolescência Programada na indústria?",
          options: ["Produtos eternos", "Feitos para estragar logo", "Reciclagem", "Venda de antigos"]
        },
        {
          id: "act-16",
          type: "open-ended",
          text: "Qual a diferença fundamental entre consumismo e consumo consciente? Dê exemplos de atitudes sustentáveis no dia a dia.",
          lines: 12
        }
      ]
    }
  ]
};