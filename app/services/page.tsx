import Services from "@/components/Services";
import { SITE_NAME } from "@/lib/site";

export const metadata = {
  title: `Services | ${SITE_NAME}`,
};

export default function ServicesPage() {
  return (
    <main id="main">
      <Services />
    </main>
  );
}
