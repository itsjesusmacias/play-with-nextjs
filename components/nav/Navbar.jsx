// NextJs
import Link from "next/link";
import Image from "next/image";

// Components
import { Container } from "components/layout/Container";

// Assets
import avatar from "public/avatar.png";

const ROUTES = [
  {
    path: "/platform",
    label: "Platform",
  },
  {
    path: "/issues",
    label: "Issues",
  },
  {
    path: "/apps",
    label: "Apps",
  },
  {
    path: "/config",
    label: "Config",
  },
];

const Navbar = ({ selectedLink }) => {
  return (
    <Container className="py-6">
      <nav className="flex items-center justify-between h-10">
        <h1 className="font-bold text-xl">
          <Link href="/">NASS</Link>
        </h1>
        <ul className="flex items-center justify-between text-sm font-light text-gray-400">
          {ROUTES.map(({ path, label }) => (
            <li
              key={path}
              className={`transition duration-150 hover:text-gray-900 py-2 px-6 ${
                selectedLink === path &&
                "text-gray-900 underline underline-offset-4"
              }`}
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
        <Image
          alt="Avatar"
          src={avatar}
          width={40}
          height={40}
          objectFit="fill"
          className="rounded-full"
        />
      </nav>
    </Container>
  );
};

export { Navbar };

/*
<li className="inline-block hover:font-bold py-2 px-6">
            <Link href="/issues">Issues</Link>
          </li>
          <li className="inline-block hover:font-bold py-2 px-6">
            <Link href="/apps">Apps</Link>
          </li>
          <li className="inline-block hover:font-bold py-2 px-6">
            <Link href="/config">Config</Link>
          </li>
*/
