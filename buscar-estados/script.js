const estado = document.querySelector('#estados')
const municipios = document.querySelector('#municipios')

estado.addEventListener('click', async () => {
    const est = estado.value
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${est}/municipios`
    fetch(url)
    // Até aqui acima ^ correto
async function buscarMunicipio(){
    try{
        let resposta = await fetch(url);
        if (!resposta.ok){
            throw new Error('Erro na requisição')
        }
        let municipios = await resposta.json();
        for (let)

    }catch(error){
        console.warn(error.message)
    }
};

});
