const axios = require("axios");

class TrelloRepository {
  constructor() {
    this.params = {
      key: "7e460586092ea4d1ebbc4bfdfdcc23ef",
      token: "50468678cb716d93a2f80d50d1dfd613b6cdad9787fe3a410fad0d0f6d1926eb",
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
