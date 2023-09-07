import React, { Component } from 'react';

export class Books extends Component {
    static displayName = Books.name;

    constructor(props) {
        super(props);
        this.state = { books: [], loading: true };
    }

    componentDidMount() {
        this.populateBookData();
    }

    static renderBooksTable(books) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book =>
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.pages}</td>
                            <td>{book.description}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Books.renderBooksTable(this.state.books);

        return (
            <div>
                <h1 id="tableLabel">Books</h1>
                {contents}
            </div>
        );
    }

    async populateBookData() {
        const response = await fetch('/Books');
        console.log(this.state);
        const data = await response.json();
        this.setState({ books: data, loading: false });
    }
}
