import Combos from "@/components/Combos";
import { SITE_NAME } from "@/lib/site";

export const metadata = {
  title: `Combos | ${SITE_NAME}`,
};

export default function CombosPage() {
  return (
    <main id="main">
      <Combos />
    </main>
  );
}
