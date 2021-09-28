import GlobalStyle from "../src/styles/global";
import Home from "./pages/home/home";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
