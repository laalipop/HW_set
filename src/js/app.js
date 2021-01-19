export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой объект уже существует');
    }
    this.members.add(character);
  }

  addAll(...arr) {
    arr.forEach((item) => {
      this.members.add(item);
    });
    return this.members;
  }

  toArray() {
    const ourArr = Array.from(this.members);
    return ourArr;
  }
}
