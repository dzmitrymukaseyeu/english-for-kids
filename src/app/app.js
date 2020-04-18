import '../style/style.scss';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import PageRenderer from './components/page-renderer';
import MasterPage from './pages/master-page';

const renderer = new PageRenderer();
const masterPage = new MasterPage();

masterPage.render();
renderer.renderPage(masterPage);
