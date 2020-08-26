import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';


class BooksToolbar extends Component {
    constructor(props) {
        super(props);
        this.state = { query: '' }
    }

    render() { 
        const { page, pageCount, onSearch, searchQuery, onSearchQueryChange, onPageChange, itemsPerPage, onItemsPerPageChange } = this.props;

        const pageOptions = [];
        for (let pageOption = 1; pageOption <= pageCount; pageOption++)  {
            pageOptions.push(<option key={`option-${pageOption}`} value={pageOption} selected={pageOption == page}>Page {pageOption}</option>);
        }

        const itemsPerPageOptionValues = [5, 10, 20, 50, 100];
        const itemsPerPageOptions = [];
        itemsPerPageOptionValues.map(value => {
            itemsPerPageOptions.push(<option key={`perpage-option-${value}`} value={value} selected={itemsPerPage == value}>{value} items per page</option>);
        })

        return (
            <Navbar className="bg-light justify-content-between">
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2"
                        onChange = {(event) => { onSearchQueryChange(event.target.value) }}
                        value={searchQuery}
                    />

                    <Button
                        type="button"
                        onClick={() => onSearch(this.state.query)}
                    >
                        Submit
                    </Button>
                </Form>

                <Form inline>
                    <Form.Control as="select" onChange = {(event) => { onPageChange(event.target.value) }}>
                        {pageOptions}
                    </Form.Control>
                </Form>

                <Form inline>
                    <Form.Control as="select" onChange = {(event) => { onItemsPerPageChange(event.target.value) }}>
                        {itemsPerPageOptions}
                    </Form.Control>
                </Form>
            </Navbar>
        );
    }
}
 
export default BooksToolbar;