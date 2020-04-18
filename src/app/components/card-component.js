import Component from '../specification/component';

class CardComponent extends Component {
  constructor(name, image, translate, sound) {
    super();
    this.name = name;
    this.image = image;
    this.translate = translate;
    this.sound = sound;

    this.createComponent();
  }

  createComponent() {
    this.sound = new Audio(this.sound);

    const image = <div className="flip-card__image"></div>;

    image.style.backgroundImage = `url('${this.image}')`;

    const rotateIcon = <div>
      <span className="fas fa-sync" style="font-size:18px;"></span>
    </div>;

    const text = <div className="flip-card__text"></div>;

    text.innerText = this.name;
    text.appendChild(rotateIcon);

    this.root = <div className="flip-card"></div>;

    const flipper = <div className="flip-card__flipper"></div>;

    const frontSide = <div className="flip-card__front"></div>;
    const backSide = <div className="flip-card__back">
      <div className="flip-card__text">{this.translate}</div>
    </div>;

    frontSide.appendChild(image);
    frontSide.appendChild(text);

    flipper.appendChild(frontSide);
    flipper.appendChild(backSide);

    this.root.appendChild(flipper);

    rotateIcon.onclick = () => {
      flipper.classList.add('flip-card--rotate');
      backSide.onmouseout = () => {
        flipper.classList.remove('flip-card--rotate');
      };
    };


    image.onclick = () => {
      this.sound.play();
    };
  }
}

export default CardComponent;
