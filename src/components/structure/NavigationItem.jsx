export default () => {
    return {
        view({ attrs: { path, navName }}) {
            return <li className="nav-item">
                <m.route.Link className="nav-link" href={path}>{ navName }</m.route.Link>
            </li>
    }
    }
}