import { useState } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
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
                <ErorrBoundary>
                    <CharList onCharSelected={onCharSelected} />
                </ErorrBoundary>
                <ErorrBoundary>
                    <CharInfo charId={selectedChar} />
                </ErorrBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    )
}

export default MainPage;