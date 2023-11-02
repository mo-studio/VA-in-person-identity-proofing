import { Props } from "../types/props";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: Props) => {
  return (
    // Stick the footer to the bottom of the page
    <div className="flex-wrapper bg-primary-lighter">
      <Header>{children}</Header>
      <div className="">
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
    </div>
  );
};

export default Layout;
