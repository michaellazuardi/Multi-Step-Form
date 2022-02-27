// import "../styles.css";
import "../Components/Details/Details.css";
import "../Components/Period/Period.css";
import "../Components/Criteria/Criteria.css";
import "../Components/Settings/Settings.css";

import type { AppProps } from "next/app";
import { wrapper } from "../Components/Redux/Store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
