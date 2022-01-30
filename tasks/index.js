const Task = require("./task");
const Bug = require("./bug");
const Issue = require("./issue");
const trelloRepository = require("../trelloRepository");

class TaskResolver {
  constructor() {
    this.tasks = {
      task: Task,
      bug: Bug,
      issue: Issue,
    };
  }

  async createTask(task) {
    const taskType = new this.tasks[task.type](task);
    const cardParams = await taskType.makeQueryParams();
    return trelloRepository.createCard(cardParams);
  }
}

module.exports = new TaskResolver();
