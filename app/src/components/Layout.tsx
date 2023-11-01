import { useTranslation } from "next-i18next";
import { Grid, GridContainer } from "@trussworks/react-uswds";

import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const { t } = useTranslation("common", {
    keyPrefix: "Layout",
  });

  return (
    // Stick the footer to the bottom of the page
    <div className="display-flex flex-column minh-viewport">
      <a className="usa-skipnav" href="#main-content">
        {t("skip_to_main")}
      </a>
      <Header />
      <main id="main-content" className="grid-col-fill">
        <GridContainer>
          <Grid row className="flex-justify-center">
            <Grid col={12} tablet={{ col: 8 }}>
              <div className="bg-white padding-y-3 padding-x-5 border border-base-lighter">
                {children}
              </div>
            </Grid>
          </Grid>
        </GridContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
