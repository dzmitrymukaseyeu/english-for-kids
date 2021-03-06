/* eslint-disable no-undef */
import MasterPage from './master-page';
import CardComponent from '../components/card-component';
import ScoreComponent from '../components/score-component';
import GameControllerComponent from '../components/game-controller-component';

class CardsPage extends MasterPage {
  static staticInit() {
    if (!this.gameController) {
      this.gameController = new GameControllerComponent();
    }

    if (!this.scoreComponent) {
      this.scoreComponent = new ScoreComponent();
    }
  }

  constructor(hash, dictionary) {
    CardsPage.staticInit();
    super(`#${hash}`);
    this.dictionary = dictionary;

    super.render();

    window.addEventListener('gameModeEnabledEvent', () => {
      CardsPage.gameController.show();
      CardsPage.scoreComponent.show();
    });

    window.addEventListener('trainModeEnabledEvent', () => {
      CardsPage.scoreComponent.hide();
      CardsPage.gameController.hide();
      CardsPage.scoreComponent.resetNodes();
      CardsPage.scoreComponent.resetPoints();
    });
  }

  render() {
    this.pageContent = <div className="page-content"></div>;

    CardsPage.scoreComponent.hide();

    this.dictionary.forEach((p) => {
      this.pageContent.appendChild(new CardComponent(p.text,
        this.images[p.image], p.translate, this.sounds[p.sound], this.hash).root);
    });

    CardsPage.gameController.hide();

    this.root.push(CardsPage.scoreComponent.root);
    this.root.push(this.pageContent);
    this.root.push(CardsPage.gameController.root);
  }


  redrawPage() {
    const rootIndex = this.root.indexOf(this.pageContent);

    if (this.pageContent) {
      this.pageContent.remove();
    }

    this.pageContent = <div className="page-content"></div>;

    CardsPage.scoreComponent.hide();

    this.dictionary.forEach((p) => {
      this.pageContent.appendChild(new CardComponent(p.text,
        this.images[p.image], p.translate, this.sounds[p.sound], this.hash).root);
    });

    this.root[rootIndex] = this.pageContent;
  }

  preInitialize() {
    CardsPage.gameController.reset();
    CardsPage.gameController.initializeGameSession(this.dictionary, this.hash);
    CardsPage.scoreComponent.resetNodes();
    CardsPage.scoreComponent.resetPoints();
  }
}

export default CardsPage;
