/* eslint-disable no-undef */
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

    this.dictionary.forEach((p) => {
      this.pageContent.appendChild(new CardComponent(p.text,
        this.images[p.image], p.translate, this.sounds[p.sound]).root);
    });


    this.root.push(this.pageContent);
  }
}

export default CardsPage;
