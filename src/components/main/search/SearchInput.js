import React from 'react';
import { GoSearch } from 'react-icons/go';

const SearchInput = () => {
    return (
        <section className="py-5 border-b sticky bg-base-100 top-0 px-3 z-30">
           <div className="flex items-center"> <input type="text" placeholder="Search people by name or id" className="input w-full rounded-full border border-blue-400 realative"/>
                <button className="absolute right-7 btn btn-sm btn-circle btn-ghost"><GoSearch/></button></div>
        </section>
    );
};

export default SearchInput;