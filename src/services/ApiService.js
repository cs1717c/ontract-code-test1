 //NOTE: in "real" code this would be structured differently with a config file setting the API endpoint, etc,
const BOOKS_URL = 'http://nyx.vima.ekt.gr:3000/api/books';

class ApiService {
  async getBooks(page, itemsPerPage, filters) {
    const params = {
        page, itemsPerPage, filters
    };

    return fetch(BOOKS_URL, {
        method: "POST",
        body: JSON.stringify(params),
        headers: { 'Content-type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) {
          this.handleHttpError(response);
        }

        return response.json();
      })
      .catch(error => {
        this.handleError(error);
      });
  }

  handleHttpError(response) {
      throw new Error("HTTP error. HTTP Status: " + response.status);
  }

  handleError(error) {
      console.log(error.message);
  }
}

export default ApiService;