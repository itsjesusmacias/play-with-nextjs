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
        <div className="text-center py-12">
          <h1 className="font-extrabold text-6xl">Dynamic Routes</h1>
          <p className="text-xl text-gray-500 pt-4">
            Next.js also supports the creation of dynamic routes using named
            parameters where the actual document displayed is determined by the
            value of the parameter.
          </p>
        </div>
        <ul className="pt-6 list-none max-w-lg m-auto">
          <li className="text-xl leading-loose py-4">
            Con{" "}
            <span className="text-red-700 bg-slate-200 py-1 px-2 rounded-lg border-2 border-slate-300">
              useRouter
            </span>{" "}
            podemos obtener información de la request{" "}
            <span className="font-semibold underline decoration-4 decoration-lime-500">
              App Id = {id}
            </span>
          </li>
        </ul>
      </Container>
    </Page>
  );
};

export default App;
