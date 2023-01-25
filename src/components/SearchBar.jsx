import React from 'react'

const searchBar = () => {
return ( 
<>
<div className='search-div'>
<input className='searchbox' type="search" placeholder="Find by Name or phone number" />

<label htmlFor="status" style={{marginRight:'5px'}}>Gender </label>

  <select name="gender" >
    <option value="Female">Female</option>
    <option value="male">Male</option>
  </select>

<label htmlFor="status" style={{marginRight:'5px'}}>Member Status</label>

<select >
  <option value="1"> Active member </option>
  <option value="2"> Not member </option>
</select>
</div></>
)};

export default searchBar;