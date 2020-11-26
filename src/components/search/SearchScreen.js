import React, { useMemo } from 'react';
import queryString  from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search);

    const [values, handleInputChange] = useForm({
        searchText: q
    });
    
    const {searchText} = values;
    
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q])

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Find your hero" 
                            className="form-control" 
                            name="searchText"
                            value={ searchText }
                            autoComplete="off"
                            onChange={handleInputChange} />
                        <button
                            type="submit"
                            className="btn btn-primary mt-2 btn-block"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {
                        (q === '') && <div className="alert alert-info">
                        Search a hero
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) 
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with { q }
                        </div>
                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard key={ hero.id } { ...hero } />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
