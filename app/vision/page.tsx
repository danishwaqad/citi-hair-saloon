import Vision from "@/components/Vision";
import { SITE_NAME } from "@/lib/site";

export const metadata = {
  title: `Vision | ${SITE_NAME}`,
};

export default function VisionPage() {
  return (
    <main id="main">
      <Vision />
    </main>
  );
}
