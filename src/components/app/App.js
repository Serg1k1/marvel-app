import { Component } from 'react';

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErorrBoundary from '../errorBoundary/ErrorBoundary';

import decoration from '../../resources/img/vision.png';

class App extends Component {
    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <ErorrBoundary>
                        <RandomChar />
                    </ErorrBoundary>
                    <div className="char__content">
                        <ErorrBoundary>
                            <CharList onCharSelected={this.onCharSelected} />
                        </ErorrBoundary>
                        <ErorrBoundary>
                            <CharInfo charId={this.state.selectedChar} />
                        </ErorrBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}

export default App;