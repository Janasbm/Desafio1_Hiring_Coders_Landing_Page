const form = document.getElementById('form')

form.addEventListener('submit',(e) => {
  e.preventDefault();//não deixa a página carregar mais
  let nome = document.getElementById('nome').value;//captar o valores do inputs
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>Carregando...</p>` // Visível na página 
  let pronto = `<p>Enviado</p>`
  
  content.innerHTML = carregando

  setTimeout (() => {
    content.innerHTML = pronto
}, 1000)
})
