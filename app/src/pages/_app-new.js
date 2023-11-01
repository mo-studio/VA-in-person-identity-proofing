import RootLayout from "../components/Layout";
import { LocationContextProvider } from "../contexts/LocationContext";
// It is important to import the USWDS stylesheet in _app.js because
// it's global https://nextjs.org/docs/messages/css-global
import "../assets/stylesheets/styles.scss";
import "../assets/stylesheets/intake.scss";

export default function App({ Component, pageProps }) {
  return (
    <LocationContextProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </LocationContextProvider>
  );
}
