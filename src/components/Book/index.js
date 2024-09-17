import styled from "styled-components";
const Book = (props) => {
  const { eachBook } = props;
  const { title, author_name, type } = eachBook;
  return (
    <BookCon>
      <h1>Book Title:{title}</h1>
      <p>authoName:{author_name}</p>
      <p>Type: {type} </p>
    </BookCon>
  );
};

const BookCon = styled.div`
  height: 100%;
  border: 1px solid black;
  width: 30%;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 10px;
  padding: 10px;

  h1 {
    font-size: 1rem;
  }
`;

export default Book;
