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
    this.root = <span className="sidebar__button"><i className={this.iconClassName} style="padding-right:5px;"></i>{this.name}</span>;

    this.root.onclick = () => {
      window.history.pushState(this.hash, this.name, '');
      window.location.hash = this.hash;
      NavBarMenuItemComponent.makeActive(this.root);
    };

    window.addEventListener('menuItemSelectedEvent', (e) => {
      if (e.detail.hash === this.hash
          && e.detail.name === this.name) {
        this.makeActive();
      }
    });
  }

  makeActive() {
    NavBarMenuItemComponent.makeActive(this.root);
  }

  static makeActive(button) {
    if (this.selectedButton) {
      this.selectedButton.classList.remove('sidebar__button--active');
    }
    this.selectedButton = button;
    this.selectedButton.classList.add('sidebar__button--active');
  }
}

export default NavBarMenuItemComponent;
