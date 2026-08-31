import About from "@/components/About";
import { SITE_NAME } from "@/lib/site";

export const metadata = {
  title: `About | ${SITE_NAME}`,
};

export default function AboutPage() {
  return (
    <main id="main">
      <About />
    </main>
  );
}
