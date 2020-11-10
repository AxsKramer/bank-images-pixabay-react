import React, { useState } from 'react';
import Error from './Error';

const Form = ({setSearch}) => {

    const [term, setTerm] = useState('');
    const [error, setError] = useState(false);

    const searchImages = e => {
        e.preventDefault();
        if(term.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setSearch(term);
    }

    return ( 
        <form onSubmit={searchImages} >
            <div className="row">
                <div className="form-group col-12 px-5">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search images about something whatever you wish"
                        onChange={ e => setTerm(e.target.value)}
                    />
                </div>
                <div className="form-group col-12 px-5">
                    <input
                        type="submit"
                        className="btn btn-danger btn-block"
                        value="Search"
                    />
                </div>
            </div>
            { error ? <Error message="Enter a topic to search about it" /> : null }
        </form>
     );
}
 
export default Form;