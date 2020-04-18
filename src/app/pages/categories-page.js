import MasterPage from './master-page';
import CategoryComponent from '../components/category-component';

class CategoriesPage extends MasterPage {
  constructor() {
    super('#categories', true);

    function importAll(r) {
      const images = {};
      r.keys().forEach((item) => { images[item.replace('./', '')] = r(item).default; });
      return images;
    }

    const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

    this.categiries = [
      new CategoryComponent('Action (set A)', 'actionA', images['dance.jpg']),
      new CategoryComponent('Action (set B)', 'actionB', images['swim.jpg']),
      new CategoryComponent('Action (set C)', 'actionC', images['drop.jpg']),
      new CategoryComponent('Adjective', 'adjective', images['friendly.jpg']),
      new CategoryComponent('Animal (set A)', 'animalA', images['cat.jpg']),
      new CategoryComponent('Animal (set B)', 'animalB', images['bird.jpg']),
      new CategoryComponent('Clothes', 'clothes', images['blouse.jpg']),
      new CategoryComponent('Emotion', 'emotion', images['smile.jpg']),
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
