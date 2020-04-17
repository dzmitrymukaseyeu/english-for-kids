class Component {
  constructor() {
    this.root = <div>empty component</div>;
  }

  // eslint-disable-next-line class-methods-use-this
  createComponent() {
    throw new Error('Method not implemented');
  }
}

export default Component;
