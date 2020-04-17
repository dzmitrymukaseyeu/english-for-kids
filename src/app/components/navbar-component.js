import Component from '../specification/component';
import NavBarMenuItem from './navbar-menuitem';

class NavBarComponent extends Component {
  constructor() {
    super();

    this.menuItems = [
      new NavBarMenuItem('home', 'home'),
      new NavBarMenuItem('categories', 'categories'),
      new NavBarMenuItem('statistics', 'statistics'),
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
      if (this.menu.classList.contains('show')) {
        this.menu.classList.remove('show');
      } else {
        this.menu.classList.add('show');
      }
    };

    // create root component
    this.root.appendChild(this.expandButton);
    this.root.appendChild(this.menu);
  }

  createMenu() {
    const menuList = <ul className="navbar-nav mr-auto"></ul>;
    this.menuItems.forEach((item) => {
      const menuItem = <li className="nav-item"></li>;
      const href = <span className="btn btn-link nav-link">{item.name}<span className="sr-only">(current)</span></span>;
      href.onclick = item.onclick;
      menuItem.appendChild(href);
      menuList.appendChild(menuItem);
    });
    this.menu = <div className="collapse navbar-collapse" id="navbarColor01"></div>;
    this.menu.appendChild(menuList);
  }

  createNavBar() {
    this.root = <nav className="row navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">English for kids</a>
   </nav>;
  }

  createExpandButton() {
    this.expandButton = <button id="toggleBtn" className="navbar-toggler" type="button">
    <span className="navbar-toggler-icon"></span>
    </button>;
  }
}

export default NavBarComponent;
