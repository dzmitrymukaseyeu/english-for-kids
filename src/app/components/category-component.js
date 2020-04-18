import Component from '../specification/component';

class CategoryComponent extends Component {
  constructor(name, image) {
    super();
    this.name = name;
    this.image = image;
    this.createComponent();
  }

  createComponent() {
    const image = <div className="card-image"></div>;
    image.style.backgroundImage = `url('${this.image}')`;
    const text = <div className="card-text"></div>;
    text.innerText = this.name;

    this.root = <div className="card"></div>;

    this.root.appendChild(image);
    this.root.appendChild(text);
  }
}

export default CategoryComponent;
