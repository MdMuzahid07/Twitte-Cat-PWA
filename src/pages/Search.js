import React from 'react';
import SearchInput from '../components/main/search/SearchInput';
import SearchResultCard from '../components/main/search/SearchResultCard';

const Search = () => {
    return (
        <section className="overflow-y-scroll w-full">
            <SearchInput />
            <div className="px-3 mt-5">
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
            </div>
        </section>
    );
};

export default Search;