/* eslint-disable no-undef */
import Page from '../specification/page';
import NavBarComponent from '../components/navbar-component';

class MasterPage extends Page {
  static staticInit() {
    if (!this.NavBarComponent) {
      this.NavBarComponent = new NavBarComponent();
    }
  }

  constructor(hash, isStartPage) {
    MasterPage.staticInit();
    super(hash, isStartPage);
    super.render();

    this.images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));
    this.sounds = importAll(require.context('../../public/audio', false, /\.(mp3)$/));

    window.addEventListener('gameMode', () => {
    });

    window.addEventListener('trainMode', () => {
    });
  }

  render() {
    this.root.push(MasterPage.NavBarComponent.root);
  }
}

export default MasterPage;
