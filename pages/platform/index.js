import { Page, Container } from "components/layout";

import Image from "next/image";

// Assets
import nextBuild from "public/next-build.png";

const Platform = () => {
  return (
    <Page>
      <Container>
        <div className="text-center py-12">
          <h1 className="font-extrabold text-6xl">Static Site Generation</h1>
          <p className="text-xl text-gray-500 pt-4">
            Página estática creada en build-time
          </p>
        </div>
        <ul className="pt-6 list-none max-w-lg m-auto">
          <li className="text-xl leading-relaxed py-4">
            ⚙️ En build time NextJs es capaz de detectar que páginas o trozos de
            componentes pueden ser contruidos de forma estática
          </li>
          <li className="text-xl leading-relaxed py-4">
            ⚡ No hay nada más rápido que una página estática.
          </li>
          <li className="text-xl leading-relaxed py-4">
            🪄 Desactiva JS y mira que pasa
          </li>
          <li className="text-xl leading-relaxed py-4">🌐 Revisa la network</li>
          <li className="text-xl leading-relaxed py-4">
            📁 Al hacer build Nextjs te avisa de cada tipo de página
          </li>
        </ul>
        <div className="py-4 max-w-lg m-auto">
          <Image
            alt="npm run build"
            src={nextBuild}
            width={512}
            height={512}
            objectFit="fill"
            className="rounded-lg"
          />
        </div>
      </Container>
    </Page>
  );
};

export default Platform;
