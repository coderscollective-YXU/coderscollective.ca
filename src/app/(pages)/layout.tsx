import { getFooterContent } from "@/sanity/queries/siteSettings";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const footerContent = await getFooterContent();

  return (
    <>
      <Navbar />
      {children}
      <Footer content={footerContent} />
    </>
  )
};

export default Layout;