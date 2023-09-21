import React from "react";
import './search-panel.css'
const SearchPanel = () => {
    const search = 'Something search'
    return <input className="search-input" type="text" placeholder={search}/>
}

export default SearchPanel;