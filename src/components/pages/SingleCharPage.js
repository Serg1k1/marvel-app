import { useParams, Link, useLocation } from 'react-router-dom';

const SingleCharPage = () => {
    const { charId } = useParams();
    const location = useLocation();
    const data = location.info;

    const content = <View char={data} />;

    return (
        <>
            {content}
        </>
    )
}

const View = ({ char }) => {
    const { name, description, thumbnail } = char;

    return (
        <div className="single-comic">
            <img src={thumbnail} alt={name} className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
            <Link to='/' className="single-comic__back">Back to all</Link>
        </div>
    )
}

export default SingleCharPage;