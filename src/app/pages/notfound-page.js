import MasterPage from './master-page';

class NotFoundPage extends MasterPage {
  constructor() {
    super('#404', false);
    super.render();
  }

  render() {
    this.root.push(
      <div className="page-content">Page not found, please check url</div>,
    );
  }
}

export default NotFoundPage;
