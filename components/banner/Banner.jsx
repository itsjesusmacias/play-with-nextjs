import devoLogo from "public/devo-logo.svg";
import Image from "next/image";
import { Container } from "components/layout/Container";

const Banner = () => (
  <div className="bg-black flex justify-center items-center text-white">
    <Container>
      <div className="flex items-center justify-between h-12 font-light">
        <Image
          alt="Devo logo"
          src={devoLogo}
          width={90}
          height={48}
          objectFit="fill"
        />
        <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
          NEXT<span className="font-bold">js</span>
        </a>
      </div>
    </Container>
  </div>
);

export { Banner };
