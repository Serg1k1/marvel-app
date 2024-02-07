import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton';
import useMarvelService from '../../services/MarvelService';

import './charInfo.scss';

const CharInfo = ({ charId }) => {
    const [char, setChar] = useState(null);
    const [comics, setComics] = useState(null);

    const { loading, error, getCharacter, clearError, getCharacterComics } = useMarvelService();

    useEffect(() => {
        updateChar();
    }, [charId]);

    const updateChar = () => {
        if (!charId) {
            return;
        }

        clearError();

        getCharacter(charId)
            .then(onCharLoaded)

        getCharacterComics(charId)
            .then(onComicsLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const onComicsLoaded = (comics) => {
        setComics(comics);
    }

    const skeleton = char || comics || loading || error ? null : <Skeleton />;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error || !char || !comics) ? <View char={char} comics={comics} /> : null;

    return (
        <div className="char__info">
            {skeleton}
            {errorMessage}
            {spinner}
            {content}
        </div>
    )

}

const View = ({ char, comics }) => {
    const { name, description, thumbnail, homepage, wiki } = char;

    let imgStyle = { 'objectFit': 'cover' };
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { 'objectFit': 'unset' };
    }

    const comicsItems = comics.map((item, i) => {
        return (
            <li key={i} className="char__comics-item">
                <Link to={`/comics/${item.id}`} >
                    {item.title}
                </Link>
            </li>
        )
    });

    return (
        <>
            <div className="char__basics">
                <img src={thumbnail} alt={name} style={imgStyle} />
                <div>
                    <div className="char__info-name">{name}</div>
                    <div className="char__btns">
                        <a href={homepage} className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {comics.length > 0 ? null : "There are no comics with this character"}
                {comicsItems}
            </ul>
        </>
    )
}

CharInfo.propTypes = {
    charId: PropTypes.number
}

export default CharInfo;