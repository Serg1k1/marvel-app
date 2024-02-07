import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';

import AppHeader from "../appHeader/AppHeader";

const App = () => {

    return (
        <HashRouter basename="/">
            <div className="app">
                <AppHeader />
                <main>
                    <Switch>
                        <Route exact path="/" >
                            <MainPage />
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage />
                        </Route>
                        <Route exact path="/comics/:comicId">
                            <SingleComicPage />
                        </Route>
                        <Route path="*">
                            <Page404 />
                        </Route>
                    </Switch>
                </main>
            </div>
        </HashRouter>
    )
}

export default App;