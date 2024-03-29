import { lazy, Suspense } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicPage'));
const SingleCharacterLayout = lazy(() => import('../pages/singleCharLayout/SingleCharPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {

    return (
        <HashRouter basename="/">
            <div className="app">
                <AppHeader />
                <main>
                    <Suspense fallback={<Spinner />} >
                        <Switch>
                            <Route exact path="/">
                                <MainPage />
                            </Route>
                            <Route exact path="/comics">
                                <ComicsPage />
                            </Route>
                            <Route exact path="/comics/:id">
                                <SinglePage Component={SingleComicLayout} dataType='comic' />
                            </Route>
                            <Route exact path="/characters/:id">
                                <SinglePage Component={SingleCharacterLayout} dataType='character' />
                            </Route>
                            <Route path="*">
                                <Page404 />
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
            </div>
        </HashRouter>
    )
}

export default App;