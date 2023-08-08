function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode , adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem light
    img.setAttribute("src", "./assets/avatar.png")
  }

  // pegar a tag alt

  const alt = document.querySelector("#profile img")

  //substituir a legenda
  if (html.classList.contains("light")) {
    // se tiver light mode , adicionar a legenda light
    alt.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando oculos escuro e moletom preta, barba e fundo azul"
    )
  } else {
    // se tiver sem light mode, manter a imagem light
    alt.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando oculos e camisa preta, barba e fundo amarelo"
    )
  }
}
