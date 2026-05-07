
let x = 5;
// Transformei um let em função
let anna = (num) => console.log(num * 5);

let result = "Not Active";
let isActive = false;
console.log(result, isActive)

if (isActive === true){
    result = "Active!"
}else{
    result = "Not Active!"
}

console.log(result, isActive)



try{
    x = y + 1;

}catch(erro){
    let text = `
    <strong>Nome do erro:</strong> ${erro.name}<br />
    <strong>Mensagem:</strong> ${erro.message}<br />
    <strong>Stack:</strong> <pre>${erro.stack}</pre>
    `;
    document.body.innerHTML = text
};




// Fazer o desafio (Voltar aqui depois e resolver melhor!)
const carregarComponente = async (caminho, container) =>{
    try{
        const resposta = await fetch(caminho);

        if (!resposta.ok){
            throw new Error('Erro ao carregar componente')
        };

        const html = await resposta.text();
        container.innerHTML = html;

    }catch(erro){
        console.error(erro)
    };
};

const containerP = document.querySelector('.containerP');
carregarComponente('./c-test.html', containerP);

// RESOLUÇÃO IVO:
// const url = './c-test.html';
// const containerP = document.querySelector('#containerP');
// carregarComponente(url, containerP);


// ERRO PERSONALIZADO:
// try {
//     let idade = -5;

//     if (idade < 0) {
//         let erro = new Error('Idade Inválida.');
//         erro.codigo = 1001;
//         erro.tipo = 'Validação';

//         throw erro;

//         // Minha resolução:
//         // throw new Error('A idade deve ser maior que zero.');
//     };

// } catch (erro) {
//     let text = `
//     <strong>Nome do erro:</strong> ${erro.name} <br />
//     <strong>Mensagem:</strong> ${erro.message} <br />
//     <strong>Código:</strong> ${erro.codigo} <br />
//     <strong>Tipo:</strong> ${erro.tipo} <br />
//     <strong>Stack:</strong> <span>${erro.stack}</span>
//     `;

//     document.body.innerHTML = text;
// };


// FUNÇÃO GERADORA DE ERRO
// const gerarErros = (mensagem, codigo, tipo) => {
//     let erro = new Error(mensagem);
//     erro.codigo = codigo;
//     erro.tipo = tipo;

//     return erro;
// };
// try {

//     let exemplo = 100;
//     if (exemplo < 200) {
//         let erro = gerarErros('Salso Insuficiente', 60, 'Financeiro')
//         throw erro
//         // throw gerarErros('Salso Insuficiente', 60, 'Financeiro')
//     };

// } catch (erro) {

//     let text = `
//     <strong>Nome do erro:</strong> ${erro.name} <br />
//     <strong>Mensagem:</strong> ${erro.message} <br />
//     <strong>Código:</strong> ${erro.codigo} <br />
//     <strong>Tipo:</strong> ${erro.tipo} <br />
//     <strong>Stack:</strong> <span>${erro.stack}</span>
//     `;

//     document.body.innerHTML = text;

//     console.log(erro)

// };


// CRIAÇÃO DE UMA REQUISIÇÃO HTTP COM FETCH E .THEN:
// console.log(fetch('https://viacep.com.br/ws/01001000/json/'));
// fetch('https://viacep.com.br/ws/01001000/json/').then(resposta => resposta.json());

// fetch('https://viacep.com.br/ws/01001000/json/') // converte o JSON para objeto JS e extrai os dados.
//     .then(resposta => resposta.json()) // exibe os dados extraídos.
//     .then(dados => console.log(dados))
//     .catch(error => console.warn(error));

// 1- Em função:
// fetch('https://viacep.com.br/ws/01001000/json/')
//     .then((resposta) => {
//         return resposta.json()
//     })
//     .then((dados) => {
//         return console.log(dados)
//     })
//     .catch((error) => {
//         return console.warn(error)
//     });

// 2- Armazenando a url:
// const url = 'https://viacep.com.br/ws/01001000/json/';
// fetch(url).then(resposta) => resposta.json().then(dados) => console.log(dados).catch(error) => console.warn(error);

// 3- Com erro:
const url = 'https://viacep.com.br/ws/01001000/json/';
const consulta = fetch(url)
consulta
    .then((resposta) => {
        if (!resposta.ok) {
            throw new Error('Erro na Requisição.');
        };
        return resposta.json();
    })
    .then((dados) => {
        if (dados.erro) {
            throw new Error('Cep inválido ou não encontrado.');
        };
        console.log(dados);
    })
    .catch((error) => {
        console.warn(error.message);
    });

