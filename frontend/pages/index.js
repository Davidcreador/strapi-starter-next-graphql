import { request } from "graphql-request";

import Articles from "../components/articles";

const Home = ({ data: { articles } }) => {
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>Strapi blog</h1>
          <Articles articles={articles} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const query = `{
    articles {
      id
      title
      category {
        id
        name
      }
      image {
        url
      }
    }
  }`;

  const data = await request("http://localhost:1337/graphql", query);

  return {
    props: {
      data,
    },
  };
}

export default Home;
