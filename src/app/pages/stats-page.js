import MasterPage from './master-page';
import CategoryStatsComponent from '../components/category-stats-component';

class StatsPage extends MasterPage {
  constructor() {
    super('#statistics', false);
    super.render();
  }

  preInitialize() {
    this.root.forEach((p) => {
      p.remove();
    });

    this.root = [];

    super.render();

    this.categoryStatComponent = new CategoryStatsComponent();

    this.categoryStatComponent.root.forEach((rootItem) => {
      this.root.push(rootItem);
    });
  }
}

export default StatsPage;
