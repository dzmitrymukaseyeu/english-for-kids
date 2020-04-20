import '../style/style.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import PageRenderer from './components/page-renderer';
import MasterPage from './pages/master-page';
import Dictionary from './dictionaries/dictionary';
import ClickLoggerComponent from './components/click-logger-component';

const dictionary = new Dictionary();
const clickLogger = new ClickLoggerComponent();
const renderer = new PageRenderer();
const masterPage = new MasterPage();

masterPage.render();
renderer.renderPage(masterPage);
