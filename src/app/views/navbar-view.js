class NavBarView {
  constructor() {
    this.initialize();
  }

  initialize() {
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

    // init view
    this.view.appendChild(this.expandButton);
    this.view.appendChild(this.menu);
  }

  createNavBar() {
    this.view = <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">English for kids</a>
  </nav>;
  }

  createExpandButton() {
    this.expandButton = <button id="toggleBtn" className="navbar-toggler" type="button">
      <span className="navbar-toggler-icon"></span>
    </button>;
  }

  createMenu() {
    this.menu = <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Categories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Stats</a>
        </li>
      </ul>
    </div>;
  }
}

export default NavBarView;
