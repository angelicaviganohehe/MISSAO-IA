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
        texto: "Grécia",
        afirmação: "Afirmação da alternativa 1"
        },
       
        {texto: "China e Ìndia",
        afirmação: "Afirmação da alternativa 2"
        },

        {texto: "Brasil",
        afirmação: "Afirmação da alternativa 3"
        },
       ]
    {
    enunciado: "Quais são os elementos que compõe a dança?",
    alternativas: [],
    {
        texto: " contrapeso",
        afirmação: "Afirmação da alternativa 1"
        },

        {texto: "espaço",
        afirmação: "Afirmação da alternativa 2"
         },

        {texto: "ordem e transferência",
        afirmação: "Afirmação da alternativa 3"
         },
        ]
    

    {
    enunciado: "O teatro é uma linguagem de que arte?",
    alternativas: ["Artes literárias,", "Artes cênicas ","Artes visuais","Artes músicais"],
    },
    ];

    let atual = 0;
    let perguntaAtual;
    function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
        }
        mostraPergunta(); 
        
    function mostraAlternativas() {}
            for (const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativas =document.createElement("button");
                botaoAlternativas.textContent = alternativa;
                caixaAlternativas.appendChild(botaoAlternativas);
    }
            