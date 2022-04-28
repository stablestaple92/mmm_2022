import styled from "styled-components"
import BgLogo from "../components/BgLogo";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Home = () => {
  return <Container>
    <BgLogo />
    HomePage
  </Container>;
}

export default Home;