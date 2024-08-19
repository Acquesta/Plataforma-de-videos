import Cards from "./components/cards"
import Header from "./components/header"
import Hotbar from "./components/hotbar"


function App() {

  return (
    <>
      <Hotbar />
      <Header 
        titulo = 'Crie seus vídeos online'
        subtitulo = 'Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.'
        botao = 'Começar agora!'
      />
      <Cards />
    </>
  )
}

export default App
