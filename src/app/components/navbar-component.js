import Component from '../specification/component';
import NavBarMenuItem from './navbar-menuitem-component';

class NavBarComponent extends Component {
  constructor() {
    super();

    this.menuItems = [
      new NavBarMenuItem('Categories', 'categories', 'fas fa-list-ol'),

      new NavBarMenuItem('Action (set A)', 'actionA', 'fas fa-play'),
      new NavBarMenuItem('Action (set B)', 'actionB', 'fas fa-play'),
      new NavBarMenuItem('Action (set C)', 'actionC', 'fas fa-play'),
      new NavBarMenuItem('Adjective', 'adjective', 'fas fa-play'),
      new NavBarMenuItem('Animal (set A)', 'animalA', 'fas fa-play'),
      new NavBarMenuItem('Animal (set B)', 'animalB', 'fas fa-play'),
      new NavBarMenuItem('Clothes', 'clothes', 'fas fa-play'),
      new NavBarMenuItem('Emotion', 'emotion', 'fas fa-play'),

      new NavBarMenuItem('Statistics', 'statistics', 'fas fa-address-card'),
    ];

    this.createComponent();
  }

  activateMenuItem(hash) {
    const item = this.menuItems.find((p) => p.hash === hash);
    item.makeActive();
  }

  hideSidebar() {
    if (this.menuContent.classList.contains('sidebar__menu--hide')) {
      this.menuContent.classList.remove('sidebar__menu--hide');
      this.menuContent.classList.add('sidebar__menu--show');
    } else {
      this.menuContent.classList.remove('sidebar__menu--show');
      this.menuContent.classList.add('sidebar__menu--hide');
    }

    this.menuContent.addEventListener('animationend', () => {
      this.menuContent.classList.remove('sidebar__menu--show');
    });
  }

  createComponent() {
    // create elements
    this.createNavBar();
    this.createExpandButton();
    this.createMenu();
    this.createToggleSwitch();

    // add onclick handler
    this.expandButton.onclick = () => {
      this.hideSidebar();
    };

    document.onclick = (e) => {
      if (
        (
          e.target.classList.length > 0
          && e.target.classList.contains('fa-bars') === false
          && e.target.classList.contains('header__menu-button') === false)
          && e.target.classList.contains('button') === false) {
        this.menuContent.classList.remove('sidebar__menu--show');
        this.menuContent.classList.add('sidebar__menu--hide');
      }
    };

    // create root component
    this.header.appendChild(this.expandButton);
    this.header.appendChild(this.toggleSwitch);
    this.header.appendChild(<div className="header__logo"></div>);
    this.root.appendChild(this.menu);
  }

  createMenu() {
    this.menu = <div className="sidebar"></div>;

    this.menuContent = <div className="sidebar__menu sidebar__menu--hide">
    </div>;

    this.menuItems.forEach((item) => {
      this.menuContent.appendChild(item.root);
    });

    this.menu.appendChild(this.menuContent);
  }

  createNavBar() {
    this.root = <div className="header-container">
    </div>;
    this.header = <div className="header"></div>;

    this.root.appendChild(this.header);
  }

  createExpandButton() {
    this.expandButton = <div className="header__menu-button">
      <span className="fas fa-bars"></span>
    </div>;
  }

  createToggleSwitch() {
    this.toggleSwitch = <div className="toggle-switch"><span className="toggle-switch__mode-text">Game Enabled:</span>
      <label className="toggle-area">
        <input type="checkbox"></input>
          <div className="switch"></div>
      </label>
    </div>;
  }
}

export default NavBarComponent;
