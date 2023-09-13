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
    //    const response = await fetch('/Books');
    //    console.log(response);
    //    const data = await response.json();
    //    this.setState({ books: data, loading: false });
    //}
        try {
            const response = await fetch('https://localhost:7207/books');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.text(); // Pobierz dane jako tekst
            // Sprawdź, czy dane nie są puste
            if (!data) {
                throw new Error("Dane JSON są puste");
            }

            // Sparsuj dane JSON
            const jsonData = JSON.parse(data);
            this.setState({ books: jsonData, loading: false });
            console.log(this.state);
        } catch (error) {
            console.error('Błąd pobierania danych: ', error);
            this.setState({ loading: false }); // Ustawienie loading na false w przypadku błędu
           
        }
    }
}
