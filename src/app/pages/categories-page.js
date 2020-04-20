import MasterPage from './master-page';
import CategoryComponent from '../components/category-component';

class CategoriesPage extends MasterPage {
  constructor() {
    super('#categories', true);

    this.categiries = [
      new CategoryComponent('Action (set A)', 'actionA', this.images['dance.jpg']),
      new CategoryComponent('Action (set B)', 'actionB', this.images['swim.jpg']),
      new CategoryComponent('Action (set C)', 'actionC', this.images['drop.jpg']),
      new CategoryComponent('Adjective', 'adjective', this.images['friendly.jpg']),
      new CategoryComponent('Animal (set A)', 'animalA', this.images['cat.jpg']),
      new CategoryComponent('Animal (set B)', 'animalB', this.images['bird.jpg']),
      new CategoryComponent('Clothes', 'clothes', this.images['blouse.jpg']),
      new CategoryComponent('Emotion', 'emotion', this.images['smile.jpg']),
    ];

    super.render();
  }

  render() {
    this.pageContent = <div className="page-content"></div>;

    this.categiries.forEach((p) => {
      this.pageContent.appendChild(p.root);
    });

    this.root.push(this.pageContent);
  }
}

export default CategoriesPage;
