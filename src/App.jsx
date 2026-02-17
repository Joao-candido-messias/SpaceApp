import styled from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho"
import BarraLateral from "./Componentes/BarraLateral"
import Banner from "./Componentes/Banner"
import bannerImg from "./assets/banner.png";
import Galeria from "./Componentes/Galeria"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width:100%;
`

const MainContainer = styled.div`
  display: flex;
  gap:24px;
`;

const ConteudoDaGaleria = styled.section`
  display:flex;
  flex-direction:column;
  flex-grow: 1;
`

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />

      <AppContainer>
        <Cabecalho />

        <MainContainer>
          <BarraLateral />
          <ConteudoDaGaleria>
            <Banner
            texto={"A galeria mais\ncompleta de\nfotos do espaço!"}
            backgroundImage={bannerImg}
          />
          <Galeria/>
          </ConteudoDaGaleria>
          
        </MainContainer>
      </AppContainer>
      
    </FundoGradiente>
  );
}

export default App;
