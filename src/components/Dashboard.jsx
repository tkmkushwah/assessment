import React from 'react';
import SearchBar from './SearchBar';
import PDetail from './PDetail';
const Dashboard = () => {
    const arr=[1,2,3,4];
    return (
        <div>
            <h1>
                <SearchBar />
                {
                arr.map(()=>(
                <PDetail/>
                  ))
                } 
            </h1>
        </div>
    );
};

export default Dashboard;