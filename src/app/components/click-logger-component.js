import Component from '../specification/component';

class ClickLoggerComponent extends Component {
  constructor() {
    super();
    this.createComponent();
  }

  // eslint-disable-next-line class-methods-use-this
  logClickEvent(category, name) {
    if (!localStorage.clickLogs) {
      localStorage.setItem('clickLogs', JSON.stringify({}));
    }

    const clickLogs = JSON.parse(localStorage.getItem('clickLogs'));

    let record = clickLogs[`${category}-${name}`];

    const save = () => {
      clickLogs[`${category}-${name}`] = record;
      localStorage.setItem('clickLogs', JSON.stringify(clickLogs));
    };

    return {
      logTrainModeClick: () => {
        if (record) {
          record.clickCount += 1;
        } else {
          record = {
            clickCount: 1,
            failureCount: 0,
            successCount: 0,
          };
        }
        save(record);
      },
      logSuccessClick: () => {
        if (record) {
          record.successCount += 1;
        } else {
          record = {
            clickCount: 0,
            failureCount: 0,
            successCount: 1,
          };
        }
        save(record);
      },
      logFailureClick: () => {
        if (record) {
          record.failureCount += 1;
        } else {
          record = {
            clickCount: 0,
            failureCount: 1,
            successCount: 0,
          };
        }
        save(record);
      },
    };
  }

  createComponent() {
    if (!localStorage.clickLogs) {
      localStorage.setItem('clickLogs', JSON.stringify({}));
    }

    window.addEventListener('trainModeClickEvent', (e) => {
      this.logClickEvent(e.detail.hash, e.detail.name).logTrainModeClick();
    });

    window.addEventListener('trueAnswerEvent', (e) => {
      this.logClickEvent(e.detail.hash, e.detail.name).logSuccessClick();
    });

    window.addEventListener('falseAnswerEvent', (e) => {
      this.logClickEvent(e.detail.hash, e.detail.name).logFailureClick();
    });
  }
}

export default ClickLoggerComponent;
