import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import SearchResultCard from './SearchResultCard';
// import data from "../Backend/data";
import {useState} from 'react'
import { Link } from 'react-router-dom';
import Details from "../Components/Details/Details";

const data = []

function SearchBar() {


  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null); // New state

  const [data, setData] = useState([]);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(()=>{
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);
  


 
  const handleSearch = async () => {
    //   const filteredData = data.filter((item) =>
    //   item.name.toLowerCase().includes(searchText.toLowerCase())
    // );
    
      // const filteredData= fetch(url).then((response) =>{
      // response.json();
      // console.log(response)
    //  })
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchResults(filteredData);
      setShowComponent(true);
  
    }
    const handleResultClick = (result) => {
      setSelectedResult(result);
    };

  //  console.log(filteredData)
  // setSearchResults(filteredData);
 
      // console.log( 'Search Results are',filteredData);
  return (
    <div>
      <TextField
        className='search-input'
        variant="outlined"
        label="Search"
        onChange={(e) => {
          setSearchText(e.target.value);
          handleSearch();
        }}
        InputProps={{
          endAdornment: (
            <IconButton  onClick={() => handleSearch()}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />  



      {showComponent && (
        <div>
        
            {searchResults?.length && searchResults.map((result) => (
                 <ul>  
                 <li>
                 <Link to={`/details/${result.id}`} className='result-name'  key={result.id} onClick={() => handleResultClick(result)}>{result.name}</Link>
                 </li></ul>
                
        
            ))}
        </div>
      )}
      {selectedResult && <Details  details={selectedResult} />}     
             
    </div>
 
    
        
  );
}

export default SearchBar;