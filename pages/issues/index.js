// Components
import { Page, Container } from "components/layout";

// Assets
import codeSSR from "public/codeSSR.png";

// NextJs
import Image from "next/image";

const Issues = ({ issueId }) => {
  return (
    <Page>
      <Container>
        <div className="text-center py-12">
          <h1 className="font-extrabold text-6xl">Server-Side Rendering</h1>
          <p className="text-xl text-gray-500 pt-4">
            En cada petición la página se contruye y enviamos los estáticos
          </p>
        </div>
        <ul className="pt-6 list-none max-w-lg m-auto">
          <li className="text-xl leading-relaxed py-4">
            ⚙️ En cada request se generan los estáticos! Usar solo si
            necesitamos renderizar previamente una página cuyos datos deben
            obtenerse en el momento de la solicitud
          </li>
          <li className="text-xl leading-relaxed py-4">
            ⬇️ getServerSideProps inyecta en la página props, en este caso{" "}
            <span className="font-semibold underline decoration-4 decoration-lime-500">
              issueId = {issueId}
            </span>
          </li>
          <li className="text-xl leading-relaxed py-4">
            🔐 Es muy seguro, podemos hacer conexiones a base de datos o
            detectar desde que máquina intentan acceder y cambiar toda la config
            de la página.
          </li>
          <li className="text-xl leading-relaxed py-4">
            🪄 Desactiva JS y mira que pasa
          </li>
          <li className="text-xl leading-relaxed py-4">🌐 Revisa la network</li>
        </ul>
        <div className="py-4 max-w-lg m-auto">
          <Image
            alt="Code Server Side Rendering in NextJs"
            src={codeSSR}
            width={512}
            height={348}
            objectFit="fill"
            className="rounded-lg"
          />
        </div>
      </Container>
    </Page>
  );
};

export async function getServerSideProps(context) {
  // DB connection! Esto nunca se ejecuta en cliente
  // console.log(context); // Acceso a request
  const max = 2500;
  const min = 1000;
  const issueId = Math.floor(Math.random() * (max - min + 1) + min);

  return {
    props: { issueId }, // will be passed to the page component as props
  };
}

export default Issues;
