import { useSelector } from "react-redux";
import { Container } from "./style";

export const Display = () => {
  const result = useSelector((store) => store.count);

  return (
    <Container>
      <h4>Contador:</h4>
      <p>{result}</p>
    </Container>
  );
};

export default Display;
