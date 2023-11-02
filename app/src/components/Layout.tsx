import { useTranslation } from "next-i18next";
import { Grid, GridContainer } from "@trussworks/react-uswds";

import Footer from "./Footer";
import Header from "./Header.tsx";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { t } = useTranslation("common", {
    keyPrefix: "Layout",
  });

  return (
    // Stick the footer to the bottom of the page
    <>
      <Header />
      <div className="bg-primary-lighter">
        <section className="grid-container usa-section">
          <div className="grid-row flex-justify-center">
            <div className="grid-col-12 tablet:grid-col-8">
              <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                {children}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
