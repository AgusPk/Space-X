const axios = require("axios");

class TrelloRepository {
  constructor() {
    this.params = {
      key: process.env.TRELLO_KEY,
      token: process.env.TRELLO_TOKEN,
    };
    this.baseUrl = "https://api.trello.com/1/";
    this.boardUrl = "boards/61f6f7b6bfad6c29a01dec4f";
  }

  async getBoardData(url) {
    const response = await axios.get(this.baseUrl + this.boardUrl + url, {
      params: this.params,
    });
    return response.data;
  }

  async createCard(cardParams) {
    const response = await axios.post(this.baseUrl + "cards", null, {
      params: { ...this.params, ...cardParams },
    });
    return response.data;
  }
}

module.exports = new TrelloRepository();
