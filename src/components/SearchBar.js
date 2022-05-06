import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui segment">
                <form className="search-bar ui form">
                    <label>Video Search</label>
                    <input
                        type="text"
                    />
                </form>
            </div>
        );
    }
}

export default SearchBar;
