import { useState } from "react";
import { useRouter } from "next/router";

// Components
import { Page, Container } from "components/layout";

// Assets
import middleware from "public/middleware.png";

// NextJs
import Image from "next/image";

const Apps = () => {
  const router = useRouter();
  const [id, setId] = useState("");

  const navigate = () => router.push(`/apps/${id}`);

  return (
    <Page>
      <Container>
        <div className="text-center py-12">
          <h1 className="font-extrabold text-6xl">Basic Features</h1>
          <p className="text-xl text-gray-500 pt-4">
            Tenemos muchas más funcionalidades
          </p>
        </div>
        <div className="flex max-w-lg m-auto gap-4">
          <button
            className="text-lg font-semibold text-white py-2 px-12 bg-gray-900 hover:bg-black rounded-lg shadow-xl trasition-all hover:shadow-lime-400/100"
            disabled={!id.trim()}
            onClick={navigate}
          >
            Navegar a
          </button>
          <input
            className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={(e) => setId(e.target.value)}
            value={id}
            placeholder="Type a Query Parameter"
          />
        </div>
        <ul className="pt-12 list-none max-w-lg m-auto">
          <li className="text-xl leading-relaxed py-4">
            ⚡️ Fast Refresh - Hacer un cambio y ver como el componente no
            pierde el estado
          </li>
          <li className="text-xl leading-relaxed py-4">
            🤩 Code splitting ensures that only the required JavaScript is sent
            to the client which helps to improve performance. Next.js supports
            two types of code splitting.
          </li>
          <li className="text-xl leading-relaxed py-4">
            🦀 Faster builds and Fast Refresh with Rust compiler
          </li>
          <li className="text-xl leading-relaxed py-4">
            🎇 Next.js implements Automatic Image Optimization which allows for
            resizing, optimizing, and serving images in modern formats when the
            browser supports it
          </li>
          <li className="text-xl leading-relaxed py-4">
            ⚙️ Data Fetching: getStaicProps, getStaticProps and
            getServerSideProps (SSR)
          </li>
          <li className="text-xl leading-relaxed py-4">
            🍗 API Routes - Uses cases:
            <ul className="pl-6 text-base">
              <li className="py-2">
                For new projects, you can build your entire API with API Routes.
              </li>
              <li className="py-2">
                Masking the URL of an external service (e.g. /api/secret instead
                of https://company.com/secret-url)
              </li>
              <li className="py-2">
                Using Environment Variables on the server to securely access
                external services.
              </li>
            </ul>
          </li>
          <li className="text-xl leading-relaxed py-4">
            🟣 Middlewares: You can run code before a request is completed.
            Based on the user is incoming request, you can modify the response
            by rewriting, redirecting, adding headers, or even streaming HTML.
          </li>
        </ul>
        <div className="py-4 max-w-lg m-auto">
          <Image
            alt="Middlewares in NextJs"
            src={middleware}
            width={512}
            height={240}
            objectFit="fill"
            className="rounded-lg"
          />
        </div>
      </Container>
    </Page>
  );
};

export default Apps;
