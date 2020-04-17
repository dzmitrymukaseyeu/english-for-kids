import MasterPage from './master-page';

class HomePage extends MasterPage {
  constructor() {
    super('#home', true);
    super.render();
  }

  render() {
    this.root.push(
      <div>Hello, home page</div>,
    );
  }
}

export default HomePage;
