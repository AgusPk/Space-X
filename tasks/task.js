const trelloRepository = require("../trelloRepository");

class Task {
  constructor(task) {
    this.name = task.title;
    this.category = task.category;
    this.idList = "61f6f7c136fcc24204851dad";
  }

  async makeQueryParams() {
    const idLabels = await this.getLabelId();
    const { name, idList } = this;
    return { name, idList, idLabels };
  }

  async getLabelId() {
    const labels = await trelloRepository.getBoardData("/labels");
    const labelId = labels.find((label) => label.name === this.category).id;
    return [labelId];
  }
}

module.exports = Task;
