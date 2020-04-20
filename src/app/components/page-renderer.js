import Component from '../specification/component';
import CategoriesPage from '../pages/categories-page';
import NotFoundPage from '../pages/notfound-page';
import CardsPage from '../pages/cards-page';
import Dictionary from '../dictionaries/dictionary';
import ResultPage from '../pages/result-page';
import StatsPage from '../pages/stats-page';
import SpecialCardsPage from '../pages/special-cards-page';

class PageRenderer extends Component {
  constructor() {
    super();
    this.createComponent();
  }

  createComponent() {
    this.pages = [
      new CategoriesPage(),
      new CardsPage('actionA', Dictionary.actionA),
      new CardsPage('actionB', Dictionary.actionB),
      new CardsPage('actionC', Dictionary.actionC),
      new CardsPage('adjective', Dictionary.adjective),
      new CardsPage('animalA', Dictionary.animalA),
      new CardsPage('animalB', Dictionary.animalB),
      new CardsPage('clothes', Dictionary.clothes),
      new CardsPage('emotion', Dictionary.emotion),
      new ResultPage('success', 'result-page__image-success'),
      new ResultPage('failure', 'result-page__image-failure'),
      new StatsPage(),
      new SpecialCardsPage(),
    ];

    this.NotFoundPage = new NotFoundPage();

    this.pages.push(this.NotFoundPage);

    this.pages.forEach((p) => p.render());

    window.addEventListener('hashchange', (e) => {
      this.updatePage(new URL(e.newURL).hash);
    });

    window.addEventListener('load', () => {
      this.updatePage(window.location.hash);
    });
  }

  updatePage(hash) {
    if (hash === '' || hash === '#') {
      window.location.hash = this.pages.find((p) => p.isStartPage).hash;
    }

    const page = this.pages.find((p) => p.hash === window.location.hash) || this.NotFoundPage;
    this.renderPage(page);
  }

  renderPage(page) {
    page.preInitialize();

    const container = Array.from(document.body.children).find((p) => p.localName === 'div');

    if (container) {
      document.body.removeChild(container);
    }

    this.root = <div className="app-container"></div>;
    document.body.appendChild(this.root);

    page.root.forEach((p) => {
      this.root.appendChild(p);
    });
  }
}

export default PageRenderer;
