import CounterButton from "./../../components/CounterButton/CounterButton";
import Display from "./../../components/Display/Display";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Display />
      <CounterButton />
    </Container>
  );
};

export default Home;
