import Visit from "@/components/Visit";
import { SITE_NAME } from "@/lib/site";

export const metadata = {
  title: `Visit | ${SITE_NAME}`,
};

export default function VisitPage() {
  return (
    <main id="main">
      <Visit />
    </main>
  );
}
