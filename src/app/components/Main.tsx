import { BackgroundBeams } from "@/components/ui/background-beams";
import { getFooterContent } from "@/sanity/queries/siteSettings";
import { ReactNode } from "react"
import Footer from "./Footer";

const Main = async ({ children }: {
  children: ReactNode
}) => {
  const footerContent = await getFooterContent();
  console.log({footerContent})
  return (
    <main className="min-h-screen w-full bg-transparent relative flex flex-col items-center justify-center antialiased">
      <div className="w-full h-screen fixed top-0">
        <BackgroundBeams />
      </div>
      {children}
      <Footer content={footerContent} />
    </main>

  );
}

export default Main;