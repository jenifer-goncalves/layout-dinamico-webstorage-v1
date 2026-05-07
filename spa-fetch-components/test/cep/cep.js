// EXERCÍCIO CEP:
const inputCep = document.querySelector('.cep');

const buttonThen = document.querySelector('#buttonThen');
const contentResultadoBusca = document.querySelector('#resultadoBusca')
const contentAwayBusca = document.querySelector('#awayBusca')



const resultadoBusca = buttonThen.addEventListener('click', async = () => {
    const valueCep = inputCep.value
    const url = `https://viacep.com.br/ws/${valueCep}/json/`;
    fetch(url)
        .then((resposta) => {
            if (!resposta.ok) {
                console.log(resposta)
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
        })
    }
);

const url = 'https://viacep.com.br/ws/01001000/json/';
const consulta = fetch(url);

async function buscarCep(){
    try{
        let resposta = await consulta;
        if (!resposta.ok){
            throw new Error('Erro na requisição')
        }
        let dataObj = await resposta.json();
        if (dataObj.erro){
            throw new Error('Cep inválido ou não encontrado.');
        }
        console.log(dataObj);

    }catch(error){
        console.warn(error.message)
    }
};

buscarCep();