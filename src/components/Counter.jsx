export default () => {
    return {
        view({ attrs: { actions, changeValue }}) {
            return <div className="card">
                <h1>{actions.count.get()}</h1>
                <div className="card-body">
                    <button className="btn btn-success" onclick={() => actions.count.add(changeValue) } >Add { changeValue }</button>
                    <button className="btn btn-success" onclick={() => actions.count.subtract(changeValue) } >Subtract { changeValue }</button>
                </div>
            </div>
        }
    }
}