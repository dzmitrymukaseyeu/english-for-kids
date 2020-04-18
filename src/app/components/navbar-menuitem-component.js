import Component from '../specification/component';
// eslint-disable-next-line import/no-cycle
import MasterPage from '../pages/master-page';

class NavBarMenuItemComponent extends Component {
  constructor(name, hash, iconClassName) {
    super();
    this.name = name;
    this.hash = hash;
    this.iconClassName = iconClassName;
    this.createComponent();
  }

  createComponent() {
    this.root = <span className="button"><i className={this.iconClassName} style="padding-right:5px;"></i>{this.name}</span>;

    this.root.onclick = (e) => {
      window.history.pushState(this.hash, this.name, '');
      window.location.hash = this.hash;
      NavBarMenuItemComponent.makeActive(this.root);
      MasterPage.NavBarComponent.hideSidebar();
    };
  }

  makeActive() {
    NavBarMenuItemComponent.makeActive(this.root);
  }

  static makeActive(button) {
    if (this.selectedButton) {
      this.selectedButton.classList.remove('button--active');
    }
    this.selectedButton = button;
    this.selectedButton.classList.add('button--active');
  }
}

export default NavBarMenuItemComponent;
