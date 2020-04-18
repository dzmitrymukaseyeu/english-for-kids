class NavBarMenuItem {
  constructor(name, hash, iconClassName) {
    this.name = name;
    this.hash = hash;
    this.iconClassName = iconClassName;
    this.onclick = (e) => {
      window.history.pushState(hash, name, '');
      window.location.hash = hash;
      NavBarMenuItem.makeActive(e.target);
    };
  }

  static makeActive(button) {
    if (this.selectedButton) {
      this.selectedButton.classList.remove('button--active');
    }
    this.selectedButton = button;
    this.selectedButton.classList.add('button--active');
  }
}

export default NavBarMenuItem;
