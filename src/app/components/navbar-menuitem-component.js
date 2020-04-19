import Component from '../specification/component';

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

    this.root.onclick = () => {
      window.history.pushState(this.hash, this.name, '');
      window.location.hash = this.hash;
      NavBarMenuItemComponent.makeActive(this.root);
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
