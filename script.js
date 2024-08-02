const caixaPrincipal = document.querySelector('.caixa-principal');

const caixaPerguntas = document.querySelector('.caixa-perguntas');
    
const caixaAlternativas = document.querySelector('.caixa-alternativas');
    
const caixaResultado = document.querySelector('.caixa-resultado');
    
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "Em que lugar teve origem a palavra música?",
    alternativas: [
        {
            texto: "China",
            afirmação: ""
        },
    {
        texto: "Grécia",
        afirmação: "afirmacao"
        }
    {
        texto: "Brasil",
        afirmação: ""
    
    }
    {
        texto: "Ìndia",
        afirmação: ""
    }
]
    },
    {
    enunciado: "Quais são os elementos que compõe a dança?",
    alternativas: [
    {
        texto: "contrapeso",
        afirmação: ""
        },

        {texto: "espaço",
        afirmação: ""
         },

        {texto: "ordem e transferência",
        afirmação: ""
         }
        ]
    },
    

    {
    enunciado: "O teatro é uma linguagem de que arte?",
    alternativas: [
    {
        texto: "Artes Literàrias",
        afirmação: ""
        },

        {texto: "Artes Cênicas",
        afirmação: ""
         },

        {texto: "Artes Visuais",
        afirmação: ""
         },

         {texto: "Artes musicais",
         afirmação: ""
          }
          ]
   },
    ]

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
            }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
     }
        function mostraAlternativas() {
            for (const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativas =
                document.createElement("button");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListener("click", () =>respostaSelecionada(alternativa));
                caixaAlternativas.appendChild(botaoAlternativas);
            }
        }
   function mostraResultado() {
     caixaPerguntas.textContent = "O cultural abrange várias áreas e dentre elas temos a arte, a música, o texto, a dança e muitos outros, todas elas conversando entre si, formam um lindo espetáculo.";
     textoResultado.textContent = historiaFinal;
     caixaAlternativas.textContent = "";
            }

    function respostaSelecionada(opcaoSelecionada) {
     const afirmacoes = opcaoSelecionada.afirmacao;
     historiaFinal += afirmacoes + "";
     atual++;
     mostraPergunta();
       }
    
