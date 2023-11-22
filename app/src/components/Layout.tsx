// import { useTranslation } from "next-i18next";
// import { Grid, GridContainer } from "@trussworks/react-uswds";

import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  // const { t } = useTranslation("common", {
  //   keyPrefix: "Layout",
  // });

  return (
    // Stick the footer to the bottom of the page
    <div className="flex-wrapper bg-primary-lighter">
      <Header />
      <div className="">
        <section className="grid-container usa-section">
          <div className="grid-row flex-justify-center">
            <div className="grid-col-12 tablet:grid-col-8">
              <div className="bg-white padding-y-8 padding-x-10 border border-base-lighter">
                {children}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
