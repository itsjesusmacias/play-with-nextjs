import "../styles/globals.css";

import { Banner } from "components/banner/Banner";
import { Footer } from "components/footer/Footer";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  import("../mocks");
}

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="grow-0 shrink-0 basis-auto">
        <Banner />
      </div>
      <div className="grow shrink basis-full">
        <Component {...pageProps} />
      </div>
      <div className="grow-0 shrink-0 basis-auto">
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
