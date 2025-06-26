import routes from './routes.jsx';

m.route.prefix = "";

m.route(document.querySelector('#app'), '/', routes);