import React from 'react'

const SearchResultCard = ({data}) => {
    console.log(data);
  return (
    <div   className='searchResult-container'>
    <p>  {data.name}</p></div>
  )
}

export default SearchResultCard