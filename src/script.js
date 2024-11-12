const fomulario =  document.querySelector('#userForm');

fomulario.addEventListener('submit', async(event)=>{
    event.preventDefault();

    let usuario = {
        nome: document.querySelector('#nome').value,
        email: document.querySelector('#email').value,
        endereco: document.querySelector('#endereco').value
    }
    try{
        const response = await fetch('localhost:3000/usuarios',{
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