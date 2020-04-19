import MasterPage from './master-page';

class ResultPage extends MasterPage {
  constructor(hash, className) {
    super(`#${hash}`, false);
    this.className = className;
    super.render();
  }

  openHomePage() {
    window.history.pushState('#categories', 'categories', '');
    window.location.hash = '#categories';
    MasterPage.NavBarComponent.activateMenuItem(this.hash);
    localStorage.removeItem('errorCount');
  }

  render() {
    const button = <div className="result-page__button">Ok</div>;
    button.onclick = () => {
      this.openHomePage();
    };

    this.errorCounter = <div className='result-page__error-counter'></div>;

    this.root.push(
        <div className="result-page">
          <div className={this.className}></div>
          {button}
          {this.errorCounter}
        </div>,
    );
  }

  preInitialize() {
    const errors = localStorage.getItem('errorCount');
    if (errors) {
      this.errorCounter.innerText = `Ошибок:${errors}`;
    }

    const redirectTimeout = window.setTimeout(() => {
      this.openHomePage();
      window.clearTimeout(redirectTimeout);
    }, 2000);
  }
}

export default ResultPage;
