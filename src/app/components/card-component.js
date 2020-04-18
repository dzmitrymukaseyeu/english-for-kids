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

    const image = <div className="card-image"></div>;
    image.style.backgroundImage = `url('${this.image}')`;
    const rotate = <div>
      <span className="fas fa-sync" style="font-size:18px;"></span>
      </div>;
    const text = <div className="card-text"></div>;
    text.innerText = this.name;
    text.appendChild(rotate);

    this.root = <div className="card"></div>;

    this.root.appendChild(image);
    this.root.appendChild(text);

    rotate.onclick = () => {
      text.innerText = this.translate;
      this.root.onmouseout = () => {
        text.innerText = this.name;
        text.appendChild(rotate);
      };
    };

    this.root.onclick = () => {
      this.sound.play();
    };
  }
}

export default CardComponent;
