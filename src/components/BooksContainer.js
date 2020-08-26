import React, { Component } from 'react'

import BooksToolbar from './BooksToolbar';

import BooksGrid from './BooksGrid';

import ApiService from '../services/ApiService';
import { Container, Row, Col } from 'react-bootstrap'

import { withRouter } from "react-router";


class BooksContainer extends Component {
    state = { 
        loading: true,
        page: 1,
        itemsPerPage: 20,
        itemCount: 1,
        searchQuery: '',
        books: [],
    }

    handleSearch = () => {
        this.fetchBooks();
    }

    fetchBooks = () => {
        const { page, itemsPerPage, searchQuery } = this.state;
        const filters = [{type: 'all', values: [searchQuery]}];

        this.apiService.getBooks(page, itemsPerPage, filters).then(response => {
            this.setState({books: response.books, itemCount: response.count})
        });

        this.props.history.push(`/books/${page}/${itemsPerPage}/${searchQuery}`);
    }

    handleSearchQueryChange = (searchQuery) => {
        this.setState({ searchQuery });
    }

    setPage = (page) => {
        this.setState({ page: parseInt(page) }, this.fetchBooks);
    }

    setItemsPerPage = (itemsPerPage) => {
        this.setState({ itemsPerPage: parseInt(itemsPerPage) }, this.fetchBooks);
    }

    componentDidMount() {
        const { searchQuery, page, itemsPerPage } = this.props.match.params;
        console.log(this.props.match.params);

        this.setState({
            page: parseInt(page) || 1, itemsPerPage: parseInt(itemsPerPage) || 20, searchQuery: searchQuery || ''
        }, this.fetchBooks);
    }

    constructor(props) {
        super(props);
        this.apiService = new ApiService();
    }

    render() { 
        const { books, itemCount, itemsPerPage, searchQuery } = this.state;
        const pageCount = Math.ceil(itemCount / itemsPerPage);
        return (
            <Container>
                <Row>
                    <Col>
                        <BooksToolbar
                            onSearch={this.handleSearch}
                            onPageChange={page => this.setPage(page)}
                            onItemsPerPageChange={itemsPerPage => this.setItemsPerPage(itemsPerPage)}
                            pageCount={pageCount}
                            page={this.state.page}
                            itemsPerPage={this.state.itemsPerPage}
                            onSearchQueryChange={this.handleSearchQueryChange}
                            searchQuery={searchQuery}
                        />
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <BooksGrid 
                            books={books}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
 
export default withRouter(BooksContainer);