import { Page, Container } from "components/layout";
import { Data } from "components/data/Data";

const Msw = () => {
  return (
    <Page>
      <Container>
        <div className="text-center py-12">
          <h1 className="font-extrabold text-6xl">Mock Service Worker</h1>
          <p className="text-xl text-gray-500 pt-4">
            Mock by intercepting requests on the network level. Seamlessly reuse
            the same mock definition for testing, development, and debugging.
          </p>
        </div>
        <Data />
      </Container>
    </Page>
  );
};

export default Msw;
