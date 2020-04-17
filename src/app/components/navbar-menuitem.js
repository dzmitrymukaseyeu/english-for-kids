class NavBarMenuItem {
  constructor(name, hash) {
    this.name = name;
    this.hash = hash;
    this.onclick = () => {
      window.history.pushState(hash, name, '');
      window.location.hash = hash;
    };
  }
}

export default NavBarMenuItem;
