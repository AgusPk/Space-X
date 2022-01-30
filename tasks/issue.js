class Issue {
  constructor(task) {
    this.name = task.title;
    this.desc = task.description;
    this.idList = "61f6f7c136fcc24204851dad";
  }

  makeQueryParams() {
    return this;
  }
}

module.exports = Issue;
