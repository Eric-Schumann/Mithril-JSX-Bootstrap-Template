import NavigationItem from "./NavigationItem";

export default () => {

    const routes = [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/login',
            name: 'Login'
        }
    ];

    return {
        view() {
            return <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <m.route.Link className="navbar-brand" href="/">Navbar</m.route.Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                { routes.map(({ path, name }) => <NavigationItem path={path} navName={name} /> ) }
                            </ul>
                            </div>
                        </div>
                    </nav>;
        }
    }
}