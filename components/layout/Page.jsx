import Head from "next/head";
import { useRouter } from "next/router";

// Components
import { Navbar } from "components/nav/Navbar";

const Page = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  const name = pathname.slice(1);
  const subTitle = name
    ? name[0].toUpperCase() + name.slice(1)
    : "Platform Administration Tool";
  const title = `NASS - ${subTitle}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Platform Administration Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar selectedLink={pathname} />

      {children}
    </>
  );
};

export { Page };
