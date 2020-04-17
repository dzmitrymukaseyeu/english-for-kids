import MasterPage from './master-page';

class HomePage extends MasterPage {
  constructor() {
    super('#categories');
    super.render();
  }

  render() {
    this.root.push(
      <div>Hello, categories page</div>,
    );
  }
}

export default HomePage;
