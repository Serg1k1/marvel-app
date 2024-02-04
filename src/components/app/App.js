import { useState } from 'react';

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErorrBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

const App = () => {

    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id)
    }

    return (
        <div className="app">
            <AppHeader />
            <main>
                <ErorrBoundary>
                    <RandomChar />
                </ErorrBoundary>
                <div className="char__content">
                    <ErorrBoundary>
                        <CharList onCharSelected={onCharSelected} />
                    </ErorrBoundary>
                    <ErorrBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErorrBoundary>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision" />
            </main>
        </div>
    )
}

export default App;