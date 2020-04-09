import Head from "next/head";
import { request } from "graphql-request";
import Nav from "../components/nav";
import "../assets/css/style.css";

const App = ({ Component, pageProps, data: { categories } }) => {
  return (
    <>
      <Head>
        <title>Strapi blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      <Nav categories={categories} />
      <Component {...pageProps} />
    </>
  );
};

App.getInitialProps = async (context) => {
  const query = `{
    categories {
      id
      name
    }
  }`;

  const data = await request("http://localhost:1337/graphql", query);

  return {
    data,
  };
};

export default App;
