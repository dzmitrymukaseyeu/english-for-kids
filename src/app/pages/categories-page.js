import MasterPage from './master-page';
import CategoryComponent from '../components/category-component';

class HomePage extends MasterPage {
  constructor() {
    super('#categories', true);

    function importAll(r) {
      const images = {};
      r.keys().forEach((item) => { images[item.replace('./', '')] = r(item).default; });
      return images;
    }

    const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

    this.categiries = [
      new CategoryComponent('Action (set A)', images['dance.jpg']),
      new CategoryComponent('Action (set B)', images['swim.jpg']),
      new CategoryComponent('Action (set C)', images['drop.jpg']),
      new CategoryComponent('Adjective', images['friendly.jpg']),
      new CategoryComponent('Animal (set A)', images['cat.jpg']),
      new CategoryComponent('Animal (set B)', images['bird.jpg']),
      new CategoryComponent('Clothes', images['blouse.jpg']),
      new CategoryComponent('Emotion', images['smile.jpg']),
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

export default HomePage;
