import Page from "../components/structure/Page"

export default () => {

    let username = '';
    let password = '';

    const handleSubmit = e => {
        e.preventDefault();
        alert(`Username: ${username} - Password: ${password}`);
    }

    const usernameChange = e => {
        username = e.target.value;
    }

    const passwordChange = e => {
        password = e.target.value;
    }

    return {
        view({ attrs: { actions }}) {
            return <Page>
                <h1>Login</h1>
                <section>
                    <form onsubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input autoComplete="off" name="username" type="text" className="form-control" value={username} onchange={usernameChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input autoComplete="off" type="password" name="password" className="form-control" value={password} onchange={passwordChange} />
                        </div>
                        <button type="submit" className="btn btn-secondary mt-2">Login</button>
                    </form>
                </section>
            </Page>
        }
    }
}