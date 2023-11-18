import React from 'react';
import SearchInput from '../components/main/search/SearchInput';
import SearchResultCard from '../components/main/search/SearchResultCard';

const Search = () => {
    return (
        <section className="max-w-4xl w-full border-r">
            <SearchInput />
            <div className="px-8 mt-5">
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
                <SearchResultCard />
            </div>
        </section>
    );
};

export default Search;