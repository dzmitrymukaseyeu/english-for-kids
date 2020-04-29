import Component from '../specification/component';

class ScoreComponent extends Component {
  constructor() {
    super();
    this.createComponent();
    this.resetNodes();
    this.resetPoints();
    this.maxScorePointCount = 8;
  }

  show() {
    this.root.classList.remove('score-bar--hide');
    this.root.classList.add('score-bar--visible');
  }

  hide() {
    this.root.classList.remove('score-bar--visible');
    this.root.classList.add('score-bar--hide');
  }

  resetNodes() {
    if (this.starContainer) {
      Array.from(this.starContainer.childNodes)
        .forEach((node) => this.starContainer.removeChild(node));
    }
  }

  resetPoints() {
    this.points = 0;
  }

  createComponent() {
    this.root = <div className="score-bar"></div>;

    this.starContainer = <div className="score-bar__result"></div>;

    this.root.appendChild(this.starContainer);

    window.addEventListener('trueAnswerEvent', () => {
      if (this.starContainer.children.length > this.maxScorePointCount) {
        this.resetNodes();
      }

      this.starContainer.appendChild(
        <span className="fas fa-star"></span>,
      );

      this.points += 1;
    });
  }
}

export default ScoreComponent;
