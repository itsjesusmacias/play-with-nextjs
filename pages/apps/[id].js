import { useRouter } from "next/router";

// Components
import { Page, Container } from "components/layout";

const App = (props) => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <Page>
      <Container>
        <h1>Hola :) {id}</h1>
      </Container>
    </Page>
  );
};

export default App;
