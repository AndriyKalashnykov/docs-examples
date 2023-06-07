import { useQuery, gql } from '@apollo/client';

const GET_BOOKS = gql`
  query getBooks {
    books {
      title
      author
    }
  }
`;

function DisplayBooks() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.books.map(({ id, title, author }) => (
    <div key={id}>
      <b>Title:</b>
      <h3>{title}</h3>
      <br />
      <b>Author:</b>
      <p>{author}</p>
      <br />
    </div>
  ));
}

export default function App() {
  return (
    <div>
      <h2>
        My first Apollo app
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </h2>
      <br />
      <DisplayBooks />
    </div>
  );
}
