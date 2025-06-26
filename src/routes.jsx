import Home from "./pages/Home";
import Login from "./pages/Login";
import state from './state/state';
import Actions from './state/actions';

const actions = Actions(state);

export default {
    "/": {
        render() {
            return <Home actions={actions} />;
        }
    },
    "/login": {
        render() {
            return <Login actions={actions} />;
        }
    }
};

