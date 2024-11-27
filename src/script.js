// Função para cadastrar um novo usuário
const formulario = document.querySelector('#userForm');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault();

    const usuario = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        endereco: document.querySelector('#endereco').value
    };

    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(usuario)
        });

        const resultado = await response.json();
        alert(resultado.mensagem);
    } catch (erro) {
        console.log('Erro ao cadastrar usuário:', erro);
    }
});


const botaoBuscar = document.querySelector('#botaoBuscar');

botaoBuscar.addEventListener('click', async () => {
    const id = document.querySelector('#idBuscar').value;

    try {
        const response = await fetch(`http://localhost:3000/usuarios/${id}`);
        const resultado = await response.json();

        if (response.ok) {
            const usuario = resultado.usuario; // Corrige a referência
            alert(`Usuário encontrado: Nome: ${usuario.nome}, Email: ${usuario.email}, Endereço: ${usuario.endereco}`);
        } else {
            alert(resultado.mensagem);
        }
    } catch (erro) {
        console.log('Erro ao buscar usuário:', erro);
    }
});
