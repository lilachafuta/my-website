import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component {
    render () {
        return (
                <form action="search.html" className="SearchBox">
                    <label>
                        <input name="q" placeholder="Search" />
                    </label>
                    <button className="SearchBox_button" type="submit">
                        <img src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" />
                    </button>
                </form>
        );
    }
}
export default SearchBox;