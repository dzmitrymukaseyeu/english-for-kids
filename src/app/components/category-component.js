import Component from '../specification/component';
import MasterPage from '../pages/master-page';

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
      MasterPage.NavBarComponent.activateMenuItem(this.hash);
    };
  }
}

export default CategoryComponent;
