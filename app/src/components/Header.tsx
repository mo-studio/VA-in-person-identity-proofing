import { useTranslation } from "next-i18next";
import { GovBanner, Header as USWDSHeader } from "@trussworks/react-uswds";

import { Props } from "../types/props";

const Header = ({ children }: Props) => {
  const { i18n } = useTranslation("common", {
    keyPrefix: "Header",
  });

  return (
    <>
      <div className={`usa-overlay`} />
      <GovBanner
        language={i18n.language?.match(/^es-?/) ? "spanish" : "english"}
      />
      <USWDSHeader basic={true}>{children}</USWDSHeader>
    </>
  );
};

export default Header;
