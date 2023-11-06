import { useTranslation } from "next-i18next";
import {
  Address,
  Grid,
  GridContainer,
  Footer as USWDSFooter,
} from "@trussworks/react-uswds";

const Footer = () => {
  const { t } = useTranslation("common", {
    keyPrefix: "Footer",
  });

  return (
    <USWDSFooter
      size="slim"
      returnToTop={
        <GridContainer className="usa-footer__return-to-top">
          <a href="#">{t("return_to_top")}</a>
        </GridContainer>
      }
      primary={
        <GridContainer className="usa-footer__primary-container">
          <Grid row>
            <Address
              size="slim"
              items={[
                <a key="telephone" href="tel:1-800-555-5555">
                  (800) CALL-GOVT
                </a>,
                <a key="email" href="mailto:info@agency.gov">
                  info@agency.gov
                </a>,
              ]}
            />
          </Grid>
        </GridContainer>
      }
      secondary={<p className="usa-footer__logo-heading">{t("agency_name")}</p>}
    />
  );
};

export default Footer;
