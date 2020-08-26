import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Table from 'react-bootstrap/Table'

export default class BooksGrid extends Component {
    render() {
        const { books } = this.props;

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Pages</th>
                        <th>Publication Year</th>
                        <th>Publication City</th>
                        <th>Publication Country</th>
                    </tr>
                </thead>
                <tbody>
                { books.map(book => (
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.book_title}</td>
                        <td>{book.book_author}</td>
                        <td>{book.book_pages}</td>
                        <td>{book.publication_year}</td>
                        <td>{book.publication_city}</td>
                        <td>{book.publication_country}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
                
        )
    }
}

BooksGrid.propTypes = {
    books: PropTypes.array
}