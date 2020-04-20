/* eslint-disable no-undef */
import CardsPage from './cards-page';


class SpecialCardsPage extends CardsPage {
  constructor() {
    super('repeat-difficult-words', []);
  }

  preInitialize() {
    const details = JSON.parse(localStorage.getItem('specialPageDetail'));

    if (!details) {
      return;
    }

    this.dictionary = details.dictionary;
    super.redrawPage();
    super.preInitialize();

    localStorage.setItem('specialPageDetail', JSON.stringify({}));
  }
}

export default SpecialCardsPage;
