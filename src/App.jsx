import styled from "styled-components"
import EstilosGlobais from "./Componentes/EstilosGlobais"
import Cabecalho from "./Componentes/Cabecalho"
import BarraLateral from "./Componentes/BarraLateral"
import Banner from "./Componentes/Banner"
import bannerImg from "./assets/banner.png";

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <Cabecalho />

      <Layout>
        <BarraLateral />
        <Banner
          texto={"A galeria mais\ncompleta de\nfotos do espaço!"}
          backgroundImage={bannerImg}
        />
      </Layout>
    </FundoGradiente>
  );
}

export default App;
