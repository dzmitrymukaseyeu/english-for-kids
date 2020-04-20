import Component from '../specification/component';

class CategoryComponent extends Component {
  constructor(name, hash, image) {
    super();
    this.name = name;
    this.image = image;
    this.hash = hash;
    this.createComponent();
  }

  createComponent() {
    const image = <div className="category-card__image"></div>;
    image.style.backgroundImage = `url('${this.image}')`;
    const text = <div className="category-card__text"></div>;
    text.innerText = this.name;

    this.root = <div className="category-card"></div>;

    this.root.appendChild(image);
    this.root.appendChild(text);

    this.root.onclick = () => {
      window.history.pushState(this.hash, this.name, '');
      window.location.hash = this.hash;

      window.dispatchEvent(new CustomEvent('menuItemSelectedEvent', {
        detail: {
          hash: this.hash,
          name: this.name,
        },
      }));
    };

    window.addEventListener('gameMode', () => {
      this.root.style.border = '5px solid rgb(255, 176, 130)';
    });

    window.addEventListener('trainMode', () => {
      this.root.style.border = '';
    });
  }
}

export default CategoryComponent;
