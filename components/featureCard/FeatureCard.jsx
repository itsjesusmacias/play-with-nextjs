import Link from "next/link";

const FeatureCard = ({ name, href, description }) => {
  return (
    <div className="border px-6 py-4 rounded-lg shadow-sm hover:shadow-lg transition-all">
      <h3 className="text-lg font-semibold pb-2 hover:underline hover:decoration-lime-300 hover:decoration-4">
        <Link href={href}>{name}</Link>
      </h3>
      <p className="font-light">{description}</p>
    </div>
  );
};
export { FeatureCard };
