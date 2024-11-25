const fomulario =  document.querySelector('#userForm');

fomulario.addEventListener('submit', async(event)=>{
    event.preventDefault();

    let usuario = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        endereco: document.querySelector('#endereco').value
    }
    try{
        const response = await fetch('http://localhost:3000/usuarios',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        const result = await response.json()
        alert('Usuário cadastrado com sucesso')
    }
    catch(error){
        console.error(error)
    }
})

const botaoPesquisar = document.querySelector('#botaoBuscar');
botaoPesquisar.addEventListener('click', async()=>{
    const id = document.querySelector('#idBuscar').value;
    console.log(id)
    try{
        const response = await fetch(`http://localhost:3000/usuarios/${id}`);
        const usuarios = await response.json();

        if(usuarios.id){
            alert(`Usuario encontrado: ${usuarios.nome}, ${usuarios.email}, ${usuarios.endereco}`)
        }else{ 
            alert('Usuario não encontrado')
        }
    }catch(error){
        console.log(`Erro ao buscar o usuário ${error}`)
    }
})
