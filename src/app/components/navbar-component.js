import Component from '../specification/component';
import NavBarMenuItem from './navbar-menuitem';

class NavBarComponent extends Component {
  constructor() {
    super();

    this.menuItems = [
      new NavBarMenuItem('Categories', 'categories', 'fas fa-list-ol'),

      new NavBarMenuItem('Action (set A)', 'categories', 'fas fa-play'),
      new NavBarMenuItem('Action (set B)', 'categories', 'fas fa-play'),
      new NavBarMenuItem('Action (set C)', 'categories', 'fas fa-play'),
      new NavBarMenuItem('Adjective', 'categories', 'fas fa-play'),
      new NavBarMenuItem('Animal (set A)', 'categories', 'fas fa-play'),
      new NavBarMenuItem('Animal (set B)', 'categories', 'fas fa-play'),
      new NavBarMenuItem('Clothes', 'categories', 'fas fa-play'),
      new NavBarMenuItem('Emotion', 'categories', 'fas fa-play'),

      new NavBarMenuItem('Statistics', 'statistics', 'fas fa-address-card'),
    ];

    this.createComponent();
  }

  createComponent() {
    // create elements
    this.createNavBar();
    this.createExpandButton();
    this.createMenu();

    // add onclick handler
    this.expandButton.onclick = () => {
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
    };

    // create root component
    this.header.appendChild(this.expandButton);
    this.header.appendChild(<div className="header__logo"></div>);
    this.root.appendChild(this.menu);
  }

  createMenu() {
    this.menu = <div className="sidebar"></div>;

    this.menuContent = <div className="sidebar__menu sidebar__menu--hide">
    </div>;

    this.menuItems.forEach((item) => {
      const button = <span className="button"><i className={item.iconClassName} style="padding-right:5px;"></i>{item.name}</span>;
      button.onclick = item.onclick;
      this.menuContent.appendChild(button);
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
}

export default NavBarComponent;
