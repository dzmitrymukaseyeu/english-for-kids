import Component from '../specification/component';
import HomePage from '../pages/home-page';
import CategoriesPage from '../pages/categories-page';
import NotFoundPage from '../pages/notfound-page';

class PageRenderer extends Component {
  constructor() {
    super();
    this.createComponent();
  }

  createComponent() {
    this.pages = [
      new HomePage(),
      new CategoriesPage(),
    ];

    // service page
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
    const container = Array.from(document.body.children).find((p) => p.localName === 'div');

    if (container) {
      document.body.removeChild(container);
    }

    this.root = <div class="container-fluid"></div>;
    document.body.appendChild(this.root);

    page.root.forEach((p) => {
      this.root.appendChild(p);
    });
  }
}

export default PageRenderer;
