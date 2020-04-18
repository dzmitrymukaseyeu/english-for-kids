import MasterPage from './master-page';
import CardComponent from '../components/card-component';

class CardsPage extends MasterPage {
  constructor(hash, dictionary) {
    super(`#${hash}`);
    this.dictionary = dictionary;

    super.render();
  }

  render() {
    this.pageContent = <div className="page-content"></div>;

    function importAllImages(r) {
      const images = {};
      r.keys().forEach((item) => { images[item.replace('./', '')] = r(item).default; });
      return images;
    }

    function importAll(r) {
      const resources = {};
      r.keys().forEach((item) => { resources[item.replace('./', '')] = r(item).default; });
      return resources;
    }

    const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));
    const sounds = importAll(require.context('../../public/audio', false, /\.(mp3)$/));

    this.dictionary.forEach((p) => {
      this.pageContent.appendChild(new CardComponent(p.text, images[p.image], p.translate, sounds[p.sound]).root);
    });


    this.root.push(this.pageContent);
  }
}

export default CardsPage;
