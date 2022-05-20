import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = (e) => {
        setTerm(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onFormSubmit(term);
    };

    return (
        <div className="ui segment">
            <form onSubmit={onSubmit} className="search-bar ui form">
                <label>Video Search</label>
                <input
                    type="text"
                    value={term}
                    onChange={onInputChange}
                />
            </form>
        </div>
    );
};

export default SearchBar;
