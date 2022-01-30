const trelloRepository = require("../trelloRepository");

class Bug {
  constructor(task) {
    this.name = this.createTitle(task.description);
    this.desc = task.description;
    this.idList = "61f6f7c136fcc24204851dad";
  }

  createTitle(description) {
    const word = description.split(" ")[0];
    const randomNumber = Math.floor(Math.random() * 100);
    return `bug-${word}-${randomNumber}`;
  }

  async makeQueryParams() {
    const idMembers = await this.getRandomMember();
    return { ...this, idMembers };
  }

  async getRandomMember() {
    const allIdMembers = await this.getIdMembers();
    const shuffledMembers = allIdMembers.sort(() => 0.5 * Math.random);
    return shuffledMembers.slice(0, 1);
  }

  async getIdMembers() {
    const allMembers = await trelloRepository.getBoardData("/members");
    return allMembers.map((member) => member.id);
  }
}

module.exports = Bug;
