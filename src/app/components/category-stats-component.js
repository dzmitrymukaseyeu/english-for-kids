/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
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

        const errorPercent = clickLog.successCount > 0
        // eslint-disable-next-line no-mixed-operators
          ? (parseInt(clickLog.failureCount, 10) / parseInt(clickLog.successCount, 10))
          : 0;

        const row = this.createRow(item.text, item.translate, clickLog.clickCount, clickLog.successCount, clickLog.failureCount, errorPercent);
        category.appendChild(row);
      });

      this.root.push(category);
    });

    const resetButton = <div className="stat-button">Reset</div>;
    const repeatButton = <div className="stat-button">Repeat difficult words</div>;

    resetButton.onclick = () => {
      localStorage.setItem('clickLogs', JSON.stringify({}));
      
      localStorage.setItem('specialPageDetail', JSON.stringify({}));

      window.location.hash = '#statistics';
      
    };

    repeatButton.onclick = () => {
      const clickDate = Object.keys(clickLogs).map((p) => ({
        category: p.split('-')[0].substr(1),
        name: p.split('-')[1],
        failureCount: clickLogs[p].failureCount,
        successCount: clickLogs[p].successCount,
      }));

      const clickDateWithErrors = clickDate.filter((p) => p.failureCount > 0);

      const result = clickDateWithErrors.map((p) => ({
        category: p.category,
        name: p.name,
        failurePercent: p.failureCount / p.successCount,
      }));

      const sortedResult = result.sort((p) => p.failurePercent);

      const proceedDictionary = [];

      sortedResult.splice(0, 8).forEach((p) => {
        const dictionary = Dictionary[p.category];
        const card = dictionary.find((j) => j.text === p.name);
        proceedDictionary.push(card);
      });

      localStorage.setItem('specialPageDetail', JSON.stringify({
        dictionary: proceedDictionary,
      }));

      window.location.hash = '#repeat-difficult-words';
    };

    const container = <div className="stat-button-container">
      {resetButton}
      {repeatButton}
    </div>;

    this.root.push(container);
  }
}

export default CategoryStatsComponent;
