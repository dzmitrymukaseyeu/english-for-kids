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
    text.style.zIndex = '9999';
    text.appendChild(rotateIcon);

    this.root = <div className="flip-card"></div>;

    const frontSide = <div className="front"></div>;
    const backSide = <div className="back"></div>;

    frontSide.appendChild(image);
    frontSide.appendChild(text);

    this.root.appendChild(frontSide);
    this.root.appendChild(backSide);

    image.onclick = () => {
      this.sound.play();
    };
  }
}

export default CardComponent;
