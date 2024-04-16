import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import image from './iit.png';
import clgdata from './clgdata';
// import Appiled from './Appiled';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const applied = () =>{
      alert('Thanks for applying');
  }
  const borchure =()=>{
      alert('downloading borchurer');
  }
  const compare =()=>{
    alert(`comparing`);
}

  const filteredColleges = clgdata.filter(college =>
    college.college.toLowerCase().includes(searchQuery.toLowerCase()) ||
    college.coursefees.toString().includes(searchQuery.toLowerCase()) ||
    college.placements.avgplacements.toString().includes(searchQuery.toLowerCase()) ||
    college.placements.highestplacements.toString().includes(searchQuery.toLowerCase()) ||
    college.userreviews.toString().includes(searchQuery.toLowerCase()) ||
    college.ranking.toString().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <div className='nav-bar'> 
        <h1>Colleges</h1>
        <div className="search-wrapper" style={{ background: searchQuery ? 'red' : 'transparent' }}>
          <input 
            type="text" 
            className="search" 
            placeholder="Search here.." 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
        </div>
      </div>
      <div className='tab'>
        <table className='table table-secondary table-bordered border-dark table-striped'>
          <thead className='table-dark'>
            <tr>
              <th>CD Rank</th>
              <th>College</th>
              <th>College Fees</th>
              <th>Placements</th>
              <th>User Reviews</th>
              <th>Ranking</th>
            </tr>
          </thead>
          <tbody>
            {filteredColleges.map(college => (
              <tr 
                key={college.college} 
                style={{ background: college.college.toLowerCase().includes(searchQuery.toLowerCase()) ? 'red' : 'transparent' }}
              >
                <td>#.{college.cdrank}</td>
                <td className='college'>
                  <img src={image} alt="college logo" />
                  <b>{college.college}</b>
                  <div className='btns all-btns'>
                    <button className='btn btn-warning btn-sm' onClick={applied}>Apply now</button>
                    <button className='btn btn-secondary btn-sm' onClick={borchure}>Brochure</button>
                    <button className='btn btn-danger btn-sm' onClick={compare}>Add compare</button>
                  </div>
                </td>
                <td><h3>${college.coursefees}</h3>
                    <ul><li>for BE/B.Tech</li></ul>
                </td>
                <td>
                  <div>avg salary: <h3>${college.placements.avgplacements}</h3></div>
                  <div>highest salary:<h3>${college.placements.highestplacements}</h3></div>
                  
                </td>
                <td>
                  <li>{college.userreviews.rating}/10</li>
                  <li>{college.userreviews.review}</li>
                </td>
                <td>{college.ranking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
