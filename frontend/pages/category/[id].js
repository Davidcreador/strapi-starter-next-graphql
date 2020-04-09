import { useRouter } from "next/router";
import { request } from "graphql-request";

import Articles from "../../components/articles";

const Category = ({ data: { category } }) => {
  const router = useRouter();

  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.name}</h1>
          <Articles articles={category.articles} />
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const endpoint = "http://localhost:1337/graphql";

  const query = `{
    categories {
      id
      name
    }
  }`;

  const data = await request(endpoint, query);
  const paths = data.categories.map((category) => ({
    params: { id: category.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const endpoint = "http://localhost:1337/graphql";

  const query = `
    query getCategory($id: ID!) {
      category(id: $id) {
        id
        name
        articles {
          id
          title
          content
          image {
            url
          }
          category {
            id
            name
          }
        }
      }
    }
  `;

  const variables = {
    id: params.id,
  };

  const data = await request(endpoint, query, variables);

  return {
    props: {
      data,
    },
  };
}

export default Category;
