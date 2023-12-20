import React from 'react';
import SearchInput from '../components/main/search/SearchInput';
import SearchResultCard from '../components/main/search/SearchResultCard';
import { rocket, rocket2, starLink } from '../assets';

const Search = () => {
    return (
        <section className="max-w-4xl w-full border-r">
            <SearchInput />
            <div className="px-8 mt-5">
                <SearchResultCard img={rocket} />
                <SearchResultCard img={rocket2} />
                <SearchResultCard img={rocket2} />
                <SearchResultCard img={starLink} />
                <SearchResultCard img={rocket} />
                <SearchResultCard img={rocket2} />
                <SearchResultCard img={rocket} />
                <SearchResultCard img={starLink} />
            </div>
        </section>
    );
};

export default Search;