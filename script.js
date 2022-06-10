async function getContent() {
    try {
        // acessa meu servidor na porta 4233
        const res = await fetch('http://localhost:4233/')
        // transforma resposta servida em JSON para leitura
        const data = await res.json()
        // chama a função para mostrar na tela
        mostarNaTela(data);
    } catch (error) {
        console.error(error)
    }
}
getContent()

function mostarNaTela(users) {
    let outPut = ''
    for (let user of users) {
        outPut += `<li>${user.name}</li>`
    }
    document.querySelector('main').innerHTML = outPut
}