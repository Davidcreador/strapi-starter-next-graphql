import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { request } from "graphql-request";

const Article = ({ data: { article } }) => {
  const router = useRouter();

  return (
    <div>
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={process.env.API_URL + article.image.url}
        data-srcset={process.env.API_URL + article.image.url}
        data-uk-img
      >
        <h1>{article.title}</h1>
      </div>

      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={article.content} />
          <p>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const endpoint = "http://localhost:1337/graphql";

  const query = `{
    articles {
      id
    }
  }`;

  const data = await request(endpoint, query);
  const paths = data.articles.map((article) => ({
    params: { id: article.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const endpoint = "http://localhost:1337/graphql";

  const query = `
    query getArticle($id: ID!) {
      article(id: $id) {
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
        published_at
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

export default Article;
