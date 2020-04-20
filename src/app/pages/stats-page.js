import MasterPage from './master-page';
import CategoryStatsComponent from '../components/category-stats-component';

class StatsPage extends MasterPage {
  constructor() {
    super('#statistics', false);
    super.render();
    this.categoryStatComponent = new CategoryStatsComponent();

    window.addEventListener('statsComponentViewUpdated', () => {
      this.initializeRootContainer();
      this.drawStateComponent();

      const appContainer = document.body.getElementsByClassName('app-container')[0];

      this.root.forEach((p) => {
        appContainer.appendChild(p);
      });
    });
  }

  initializeRootContainer() {
    this.root.forEach((p) => {
      p.remove();
    });

    this.root = [];

    super.render();
  }

  preInitialize() {
    this.initializeRootContainer();
    this.categoryStatComponent = new CategoryStatsComponent();
    this.drawStateComponent();
  }

  drawStateComponent() {
    this.categoryStatComponent.root.forEach((rootItem) => {
      this.root.push(rootItem);
    });
  }
}

export default StatsPage;
