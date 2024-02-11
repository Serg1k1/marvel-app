import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import SearchForm from "../form/CharSearchForm";
import ErorrBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id)
    }

    return (
        <>
            <ErorrBoundary>
                <RandomChar />
            </ErorrBoundary>
            <div className="char__content">
                <div className="char__content-column">
                    <ErorrBoundary>
                        <CharList onCharSelected={onCharSelected} />
                    </ErorrBoundary>
                </div>
                <div className="char__content-column">
                    <ErorrBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErorrBoundary>
                    <ErorrBoundary>
                        <SearchForm />
                    </ErorrBoundary>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    )
}

export default MainPage;