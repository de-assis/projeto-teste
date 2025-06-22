function toggleMode() {
  const html  = document.documentElement
  html.classList.toggle('light') 
  
  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem

  if(html.classList.contains('light')){
 
  // se estiver light mode, adicionar a imagem light
  img.setAttribute('src', './assets/avatar-light.png')
  img.setAttribute('alt', 'foto de rapazote')
} else {
  // se estiver no dark mode, adicionar imagem dark
  img.setAttribute('src', './assets/avatar.png')
  img.setAttribute('alt', '"foto de Cristiano de Assis, com barba, óculos redondo, camisa e janela ao fundo')
 }

   
}