import GlobalStyle from "../src/styles/global";
import Home from "./pages/home/home";
import { Container } from "./style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
