import Page from '../specification/page';
import NavBarComponent from '../components/navbar-component';

class MasterPage extends Page {
  constructor(hash, isStartPage) {
    super(hash, isStartPage);
    super.render();
  }

  render() {
    this.root.push(new NavBarComponent().root);
  }
}

export default MasterPage;
