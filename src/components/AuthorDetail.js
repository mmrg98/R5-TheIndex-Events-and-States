import React from "react";

const AuthorDetail = (props) => {
    const author = props.author;
    const authorName = `${author.first_name} ${author.last_name}`;
    const authorBooks = author.books.map(book => (
        <tr key={book.title}>
        <td>{book.title}</td>
        <td>{authorName}</td>
        <td>
            <button className="btn" style={{backgroundColor: book.color}}/>
        </td>
    </tr>
    ));
  return (
    <div className="author col-xs-10">
    <div>
        <h3>{author.first_name} {author.last_name}</h3>
        <img src={author.imageUrl} className="img-thumbnail" alt=""/>
    </div>
    <table className='mt-3 table'>
        <thead>
            <tr>
                <th>{author.first_name}</th>
                <th>Authors</th>
                <th>Color</th>
            </tr>
        </thead>
  <tbody>{authorBooks}</tbody>
    </table>
</div>
  );
};

export default AuthorDetail;