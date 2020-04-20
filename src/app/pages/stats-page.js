import MasterPage from './master-page';
import CategoryStatsComponent from '../components/category-stats-component';

class StatsPage extends MasterPage {
  constructor() {
    super('#statistics', false);
    super.render();
    this.categoryStatComponent = new CategoryStatsComponent();

    window.addEventListener('statsComponentViewUpdated', () => {
      this.preInitialize();

      const appContainer = document.body.getElementsByClassName('app-container')[0];

      this.root.forEach((p) => {
        appContainer.appendChild(p);
      });
    });
  }

  preInitialize() {
    this.root.forEach((p) => {
      p.remove();
    });

    this.root = [];

    super.render();

    this.drawStateComponent();
  }

  drawStateComponent() {
    this.categoryStatComponent.root.forEach((rootItem) => {
      this.root.push(rootItem);
    });
  }
}

export default StatsPage;
