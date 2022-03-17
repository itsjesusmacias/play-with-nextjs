import { useState } from "react";
import { useRouter } from "next/router";

// Components
import { Page, Container } from "components/layout";

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
        <ul className="pt-6 list-none max-w-lg m-auto">
          <li className="text-xl leading-relaxed py-4">Fast Refresh</li>
        </ul>
        <div>
          <button disabled={!id.trim()} onClick={navigate}>
            Ir a
          </button>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
        </div>
      </Container>
    </Page>
  );
};

export default Apps;
