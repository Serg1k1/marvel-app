import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Spinner from '../spinner/spinner';
import useMarvelService from '../../services/MarvelService';

import './form.scss';

const SearchForm = () => {
    const [findedChar, setFindedChar] = useState(null);
    const [newError, setNewError] = useState();

    const { loading, error, findChar, clearError } = useMarvelService();

    const onFindChar = (name) => {
        setNewError(null);
        setFindedChar(null);

        findChar(name)
            .then(onCharFound)
            .catch(onWrongChar)
    }

    const onCharFound = (char) => {
        setFindedChar(char)
    }

    const onWrongChar = (err) => {
        setNewError(true)
        setFindedChar(null)
    }

    const renderError = newError ? <div className='error' >The character was not found. Check the name and try again</div> : null;
    const content = !newError && findedChar ? <SearchFormResults char={findedChar} /> : null;

    return (
        <Formik
            initialValues={{ name: '' }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, 'Minimum 2 chars!')
                    .required('Required field!')
            })}
            onSubmit={values => onFindChar(values.name)}>
            <Form
                className="form">
                <h4 className="form__title">Or find a character by name:</h4>
                <div className="form__actions">
                    <div className="form__actions-row">
                        <Field
                            name="name"
                            type="text"
                            className="form__field"
                            placeholder='Enter name' />
                        <button disabled={loading} type='submit' className="button button__main">
                            <div className="inner">FIND</div>
                        </button>
                    </div>
                    <ErrorMessage className="error" name="name" component="div" />
                    {renderError}
                    {content}
                </div>
            </Form>
        </Formik>
    )
}

const SearchFormResults = ({ char }) => {
    const { name } = char;
    return (
        <div className="form__actions-row">
            <h4 className="form__actions-result" >There is! Visit {name} page?</h4>
            <Link to={{ pathname: `/char/${char.id}`, info: char }} className="button button__secondary">
                <div className="inner">TO PAGE</div>
            </Link>
        </div>
    )
}

export default SearchForm;