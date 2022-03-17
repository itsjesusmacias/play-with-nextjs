import Link from "next/link";

import { Container, Page } from "components/layout/";
import { FeatureCard } from "components/featureCard/FeatureCard";

export default function Home() {
  return (
    <Page>
      <Container>
        <div className="text-center py-12">
          <h1 className="font-extrabold text-8xl">
            The Platform Administration Tool
          </h1>
          <p className="text-xl text-gray-500 pt-4">
            NASS permite gestionar dominios, resellers, aplicaciones y reportar
            fallos en la plataforma
          </p>
        </div>
        <div className="pt-12 grid grid-cols-2 gap-8">
          <FeatureCard
            name="Platform"
            href="/platform"
            description="getStaticProps (Static Site Generation) - Se crea una pagina
              estática en tiempo de compilación"
          />
          <FeatureCard
            name="Issues"
            href="/issues"
            description="getServerSideProps (Server-Side Rendering) - NextJs hace un
            prerender de la pagina en cada request"
          />
          <FeatureCard
            name="Apps"
            href="/apps"
            description="Dynamic Router & getStaticPaths - Rutas dinámicas en NextJS"
          />
          <FeatureCard
            name="Config"
            href="/config"
            description="React Hooks Form - Librería para gestionar formularios en react
            con una forma fácil de validar campos"
          />
        </div>
      </Container>
    </Page>
  );
}
