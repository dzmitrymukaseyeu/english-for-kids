import Component from '../specification/component';
import Dictionary from '../dictionaries/dictionary';

class CategoryStatsComponent extends Component {
  constructor() {
    super();
    this.createComponent();
  }

  createRowHeader(word, translate, clicked, guessed, error, errorPercent) {
    return <div className="category-stat-header-row">
      <div className="category-stat__head">{`${word}`}  <span className="category-stat__sorter fas fa-sort"></span></div>
      <div className="category-stat__head">{`${translate}`}  <span className="category-stat__sorter fas fa-sort"></span></div>
      <div className="category-stat__head"> {`${clicked}`}  <span className="category-stat__sorter fas fa-sort"></span></div>
      <div className="category-stat__head">{`${guessed}`}  <span className="category-stat__sorter fas fa-sort"></span></div>
      <div className="category-stat__head">{`${error}`}  <span className="category-stat__sorter fas fa-sort"></span></div>
      <div className="category-stat__head">{`${errorPercent}`}  <span className="category-stat__sorter fas fa-sort"></span></div>
    </div>;
  }

  createRow(word, translate, clicked, guessed, error, errorPercent) {
    return <div className="category-stat-values-row">
      <div className="category-stat__value">{`${word}`}</div>
      <div className="category-stat__value">{`${translate}`}</div>
      <div className="category-stat__value"> {`${clicked}`}</div>
      <div className="category-stat__value">{`${guessed}`}</div>
      <div className="category-stat__value">{`${error}`}</div>
      <div className="category-stat__value">{`${errorPercent}`}</div>
    </div>;
  }

  createCategory(categoryName) {
    return <div className="category-stat">
      <div className="category-stat__name">{categoryName}</div>
    </div>;
  }

  createComponent() {
    this.root = [];

    const keys = Object.keys(Dictionary);

    const clickLogs = JSON.parse(localStorage.getItem('clickLogs') || '{}');

    keys.forEach((key) => {
      const category = this.createCategory(key);

      category.appendChild(this.createRowHeader('Word', 'Translate', 'Click count', 'Guessed', 'Error', 'Error %'));

      Dictionary[key].forEach((item) => {
        const clickLog = clickLogs[`#${key}-${item.text}`] || { clickCount: 0, successCount: 0, failureCount: 0 };

        const errorPercent = clickLog.successCount > 0 ? Math.floor((parseInt(clickLog.failureCount, 10) / parseInt(clickLog.successCount, 10))) : 0;

        const row = this.createRow(item.text, item.translate, clickLog.clickCount, clickLog.successCount, clickLog.failureCount, errorPercent);
        category.appendChild(row);
      });

      this.root.push(category);
    });
  }
}

export default CategoryStatsComponent;
