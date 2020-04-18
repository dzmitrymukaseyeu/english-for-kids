import MasterPage from './master-page';

class NotFoundPage extends MasterPage {
  constructor() {
    super('#404', false);
    super.render();
  }

  render() {
    this.root.push(
      <div className="page-content">Hello, notFound page</div>,
    );
  }
}

export default NotFoundPage;
