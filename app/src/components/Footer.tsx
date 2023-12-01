import {
  Address,
  Grid,
  GridContainer,
  Footer as USWDSFooter,
} from "@trussworks/react-uswds";

const Footer = () => {
  return (
    <USWDSFooter
      size="slim"
      returnToTop={
        <GridContainer className="usa-footer__return-to-top">
          <a href="#">Return to top</a>
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
      secondary={<p className="usa-footer__logo-heading">VA.gov</p>}
    />
  );
};

export default Footer;
