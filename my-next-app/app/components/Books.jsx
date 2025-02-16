import Link from "next/link";

async function getBooks() {
  const res = await fetch("http://localhost:3000/api/books");
  const json = await res.json();
  return json;
}
const Books = async () => {
  const books = await getBooks();
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <p>{book.id}</p>
              <p>{book.title}</p>
              <p>- {book.Author}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-error">Delete</button>
              </div>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};
export default Books;
