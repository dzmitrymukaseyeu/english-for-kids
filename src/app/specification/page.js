class Page {
  constructor(hash, isStartPage = false) {
    this.root = [];
    this.hash = hash;
    this.isStartPage = isStartPage;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
  }
}

export default Page;
