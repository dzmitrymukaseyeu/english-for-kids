import Page from '../specification/page';
import NavBarComponent from '../components/navbar-component';

class MasterPage extends Page {
  static staticInit() {
    if (!this.NavBarComponent) {
      this.NavBarComponent = new NavBarComponent().root;
    }
  }

  constructor(hash, isStartPage) {
    MasterPage.staticInit();
    super(hash, isStartPage);
    super.render();
  }

  render() {
    this.root.push(MasterPage.NavBarComponent);
  }
}

export default MasterPage;
