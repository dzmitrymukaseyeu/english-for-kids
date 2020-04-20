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

  toggleSidebar() {
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

    document.onclick = (e) => {
      if (
        (
          e.target.classList.length > 0
          && e.target.classList.contains('menu__toggle') === false
          && e.target.classList.contains('menu__btn') === false
          && e.target.classList.contains('hamburger-menu') === false)
      ) {
        this.menuContent.classList.remove('sidebar__menu--show');
        this.menuContent.classList.add('sidebar__menu--hide');
        this.expandButtonToggle.checked = false;
      }
    };

    // create root component
    this.header.appendChild(this.expandButton);
    this.header.appendChild(this.toggleSwitch);
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
    this.expandButton = <div className="hamburger-menu"></div>;

    this.expandButtonToggle = <input id="menu__toggle" type="checkbox"></input>;

    this.expandButtonToggle.onchange = () => {
      this.toggleSidebar();
    };

    const label = <label className="menu__btn"></label>;

    label.setAttribute('for', 'menu__toggle');
    label.appendChild(<span></span>);

    this.expandButton.appendChild(this.expandButtonToggle);
    this.expandButton.appendChild(label);
  }

  createToggleSwitch() {
    this.toggleSwitch = <div className="toggle-switch"><span className="toggle-switch__mode-text">Game Enabled:</span></div>;
    const toggleArea = <label className="toggle-area"></label>;
    const input = <input type="checkbox"></input>;
    const switchElement = <div className="switch"></div>;

    input.onchange = () => {
      if (input.checked) {
        window.dispatchEvent(new Event('gameModeEnabledEvent'));
      } else {
        window.dispatchEvent(new Event('trainModeEnabledEvent'));
      }
    };

    window.addEventListener('trainModeEnabledEvent', () => {
      input.checked = false;
    });

    this.toggleSwitch.appendChild(toggleArea);
    toggleArea.appendChild(input);
    toggleArea.appendChild(switchElement);
  }
}

export default NavBarComponent;
