import '../style/style.scss';
import NavBarView from './views/navbar-view';

let view = new NavBarView();

// const render = () => <div className="btn btn-primary">123</div>;

document.body.appendChild(view.view);
