import Navigation from "./Navigation"

export default () => {
    return {
        view({ children }) {
            return <>
                <Navigation />
                <div className="container mt-5">{ children }</div>
            </>
        }
    }
}