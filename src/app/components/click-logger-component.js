import Component from '../specification/component';

class ClickLoggerComponent extends Component {
  constructor() {
    super();
    this.createComponent();
  }

  // eslint-disable-next-line class-methods-use-this
  logClickEvent(category, name) {
    const clickLogs = JSON.parse(localStorage.getItem('clickLogs'));

    let record = clickLogs[`${category}-${name}`];

    if (record) {
      record.clickCount += 1;
    } else {
      record = {
        clickCount: 1,
        failureCount: 0,
        successCount: 0,
      };

      clickLogs[`${category}-${name}`] = record;
    }

    localStorage.setItem('clickLogs', JSON.stringify(clickLogs));
  }

  createComponent() {
    if (!localStorage.clickLogs) {
      localStorage.setItem('clickLogs', JSON.stringify({}));
    }

    window.addEventListener('trainModeClickEvent', (e) => {
      this.logClickEvent(e.detail.hash, e.detail.name);
    });

    window.addEventListener('trueAnswerEvent', (e) => {

    });

    window.addEventListener('falseAnswerEvent', (e) => {

    });
  }
}

export default ClickLoggerComponent;
