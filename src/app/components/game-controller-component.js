import Component from '../specification/component';

class GameControllerComponent extends Component {
  constructor() {
    super();
    this.createComponent();
  }

  show() {
    this.root.classList.remove('game-bar--hide');
    this.root.classList.add('game-bar--visible');
  }

  hide() {
    this.root.classList.remove('game-bar--visible');
    this.root.classList.add('game-bar--hide');
  }

  reset() {
    this.errorCount = 0;
    this.nextQuestion = '';
    this.questions = [];
    this.button.innerText = 'Start Game';
    this.hash = undefined;
    this.isPlay = false;
    window.dispatchEvent(new Event('cardResetEvent'));
  }

  sayNextQuestion() {
    this.nextQuestion = this.questions.shift();

    if (!this.nextQuestion) {
      this.checkResult();
    }

    const sayPhraseTimeout = window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent('playSound', {
        detail: this.nextQuestion,
      }));
      clearTimeout(sayPhraseTimeout);
    }, 500);
  }

  checkResult() {
    if (this.errorCount === 0) {
      window.history.pushState('#success', 'success', '');
      window.location.hash = '#success';
    } else {
      localStorage.setItem('errorCount', this.errorCount);
      window.history.pushState('#failure', 'success', '');
      window.location.hash = '#failure';
    }
  }

  initializeGameSession(dictionary, hash) {
    this.dictionary = dictionary;
    this.hash = hash;
  }

  createGameSession() {
    this.errorCount = 0;

    window.dispatchEvent(new Event('cardResetEvent'));

    this.isPlay = true;

    this.questions = this.dictionary.map((item) => item.text)
      .sort(() => Math.random() - 0.5);

    const sayPhraseTimeout = window.setTimeout(() => {
      this.sayNextQuestion();
      clearTimeout(sayPhraseTimeout);
    }, 500);
  }

  createComponent() {
    this.button = <div className="game-bar__button">Start Game</div>;

    this.root = <div className="game-bar game-bar--hidden">
    </div>;

    // eslint-disable-next-line no-undef
    const sounds = importAll(require.context('../../public/audio', false, /\.(mp3)$/));
    this.correctSound = new Audio(sounds['correct.mp3']);
    this.errorSound = new Audio(sounds['error.mp3']);

    this.root.appendChild(this.button);

    this.button.onclick = () => {
      this.createGameSession();
      this.button.innerText = 'Reset';
    };

    window.addEventListener('createResponse', (e) => {
      if (!this.isPlay) {
        return;
      }

      // skip, if not category page
      if (e.detail.hash !== this.hash) {
        return;
      }

      if (e.detail.name === this.nextQuestion) {
        window.dispatchEvent(new CustomEvent('trueAnswerEvent', {
          detail: e.detail,
        }));
        this.correctSound.play();
        this.sayNextQuestion();
      } else {
        this.errorSound.play();
        this.errorCount += 1;
        window.dispatchEvent(new CustomEvent('falseAnswerEvent', {
          detail: {
            name: this.nextQuestion,
            hash: e.detail.hash,
          },
        }));
        this.sayNextQuestion();
      }
    });
  }
}

export default GameControllerComponent;
