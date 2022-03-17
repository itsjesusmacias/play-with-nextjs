import { Container } from "components/layout/Container";
import { ItemLink } from "./ItemLink";

const Footer = () => (
  <div className="bg-black flex justify-center items-center text-white mt-12">
    <Container className="font-light text-sm flex items-center justify-between h-12">
      <ItemLink href="https://nextjs.org/">
        NEXT<span className="font-bold">js</span>
      </ItemLink>
      <ItemLink href="https://tailwindcss.com/">Tailwind CSS</ItemLink>
      <ItemLink href="https://mswjs.io/">Mock Service Worker</ItemLink>
      <ItemLink href="https://react-hook-form.com/">React Hook Form</ItemLink>
    </Container>
  </div>
);

export { Footer };
