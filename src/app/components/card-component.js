import Component from '../specification/component';

class CardComponent extends Component {
  constructor(name, image, translate, sound, hash) {
    super();
    this.name = name;
    this.image = image;
    this.translate = translate;
    this.sound = sound;
    this.hash = hash;

    this.createComponent();
  }

  reset() {
    this.root.classList.remove('flip-card--success');
    this.root.classList.remove('flip-card--error');
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

    window.addEventListener('trueAnswerEvent', (e) => {
      if (!e.detail) {
        return;
      }

      if (e.detail.hash === this.hash
        && e.detail.name === this.name) {
        this.root.classList.add('flip-card--success');
      }
    });

    window.addEventListener('falseAnswerEvent', (e) => {
      if (!e.detail) {
        return;
      }

      if (e.detail.hash === this.hash
        && e.detail.name === this.name) {
        this.root.classList.add('flip-card--error');
      }
    });

    window.addEventListener('gameMode', () => {
      text.style.visibility = 'hidden';
      image.style.height = '100%';

      image.onclick = () => {
        window.dispatchEvent(new CustomEvent('createResponse', {
          detail: {
            hash: this.hash,
            name: this.name,
          },
        }));
      };
    });

    window.addEventListener('trainMode', () => {
      this.reset();
      text.style.visibility = 'visible';
      image.style.height = '80%';
      image.onclick = () => { this.sound.play(); };
    });

    window.addEventListener('playSound', (e) => {
      if (e.detail === this.name) {
        this.sound.play();
      }
    });

    window.addEventListener('cardResetEvent', () => {
      this.reset();
    });
  }
}

export default CardComponent;
