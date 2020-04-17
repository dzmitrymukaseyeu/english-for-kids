import '../style/style.scss';
import PageRenderer from './components/page-renderer';
import MasterPage from './pages/master-page';

const renderer = new PageRenderer();
const masterPage = new MasterPage();
masterPage.render();
renderer.renderPage(masterPage);
