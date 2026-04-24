
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
        }

        const html = await resposta.text();
        container.innerHTML = html;

    }catch(erro){
        console.error(erro)
    }
};

