import Header from "./header";
import BasicFooter from "./basicFooter";
import Script from "next/script";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-base-lightest">
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
      <BasicFooter />
      <Script src="uswds/js/uswds.min.js" />
    </>
  );
};

export default RootLayout;
