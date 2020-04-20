/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import Component from '../specification/component';
import Dictionary from '../dictionaries/dictionary';

class CategoryStatsComponent extends Component {
  constructor() {
    super();
    this.createComponent();
    this.sortMode = 0;
  }

  setSortMode(type, mode, field) {
    this.sortType = type;
    this.sortMode = mode;
    this.sortField = field;
  }

  createRowHeader(word, translate, clicked, guessed, error, errorPercent) {
    const createSortElement = (type, field) => {
      const element = <div style="display:inline"><span className="category-stat__sorter fas fa-sort"></span></div>;
      element.onclick = () => {
        this.setSortMode(type, (this.sortMode + 1) % 2, field);
        this.createComponent();
        window.dispatchEvent(new Event('statsComponentViewUpdated'));
      };
      return element;
    };

    return <div className="category-stat-header-row">
      <div className="category-stat__head">{`${word}`}  {createSortElement('alphabet', 'text')}</div>
      <div className="category-stat__head">{`${translate}`}</div>
      <div className="category-stat__head"> {`${clicked}`}   {createSortElement('numeric', 'clickCount')}</div>
      <div className="category-stat__head">{`${guessed}`}   {createSortElement('numeric', 'successCount')}</div>
      <div className="category-stat__head">{`${error}`}   {createSortElement('numeric', 'failureCount')}</div>
      <div className="category-stat__head">{`${errorPercent}`}   {createSortElement('numeric', 'errorPercent')}</div>
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
    if (this.root) {
      this.root.forEach((p) => p.remove());
    }

    this.root = [];

    const keys = Object.keys(Dictionary);

    const clickLogs = JSON.parse(localStorage.getItem('clickLogs') || '{}');

    let isHeaderCreated = false;

    keys.forEach((key) => {
      const category = this.createCategory(key);

      if (!isHeaderCreated) {
        category.appendChild(this.createRowHeader('Word', 'Translate', 'Click count', 'Guessed', 'Error', 'Error %'));
        isHeaderCreated = true;
      }

      let categoriesRows = [];

      Dictionary[key].forEach((item) => {
        const clickLog = clickLogs[`#${key}-${item.text}`] || { clickCount: 0, successCount: 0, failureCount: 0 };

        const errorPercent = (clickLog.successCount > 0
          // eslint-disable-next-line no-mixed-operators
          ? (parseInt(clickLog.failureCount, 10) / parseInt(clickLog.successCount, 10))
          : 0) * 10;

        categoriesRows.push({
          text: item.text,
          translate: item.translate,
          clickCount: clickLog.clickCount,
          successCount: clickLog.successCount,
          failureCount: clickLog.failureCount,
          errorPercent,
        });
      });

      if (this.sortField) {
        const comparer = (a, b) => {
          if (this.sortType === 'numeric') {
            a = parseInt(a[this.sortField], 10);
            b = parseInt(b[this.sortField], 10);
          } else {
            a = a[this.sortField];
            b = b[this.sortField];
          }

          if (a > b) {
            return this.sortMode === 1 ? 1 : -1;
          }

          if (a < b) {
            return this.sortMode === 1 ? -1 : 1;
          }

          return 0;
        };

        categoriesRows = categoriesRows.sort(comparer);
      }

      categoriesRows.forEach((categoryRow) => {
        const row = this.createRow(categoryRow.text, categoryRow.translate, categoryRow.clickCount, categoryRow.successCount, categoryRow.failureCount, categoryRow.errorPercent);
        category.appendChild(row);
      });

      this.root.push(category);
    });

    const resetButton = <div className="stat-button">Reset</div>;
    const repeatButton = <div className="stat-button">Repeat difficult words</div>;

    resetButton.onclick = () => {
      localStorage.setItem('clickLogs', JSON.stringify({}));

      localStorage.setItem('specialPageDetail', JSON.stringify({}));

      window.location.reload();
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
