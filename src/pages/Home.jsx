import Page from "../components/structure/Page";

export default () => {
    return {
        view({ attrs: { actions }}) {
            return <>
                <Page>
                    <h1 className="text-center">Home Page</h1>
                </Page>
            </>;
        }
    }
}