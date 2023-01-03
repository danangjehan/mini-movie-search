import './App.css';
import React,{useState,useEffect} from 'react';
import {getMovieList, searchMovieList} from './Api'
import ListMovie from './ListMovie';



function App() {

  const [getMovies,setMovies] = useState([])
  useEffect(()=>{
    getMovieList().then(
      (res)=>{
        setMovies(res)
      }
    ).catch((res)=>{
      alert(res)
    })
    
  },[])

  const search=(q)=>{
    console.log(q)
    if(!q){
      getMovieList().then(
      (res)=>{
        setMovies(res)
      }
    ).catch((res)=>{
      alert(res)
    })
    }
    searchMovieList(q).then((res) => {
      setMovies(res)
    }).catch((res)=>{
      alert(res)
    })
  }


    
  return (
    <div className="App">
      <header className="App-header">
       <h1>Movie Mania</h1>
       
       <input type="text"  onKeyPress={(e) => { if(e.key === "Enter") {search(e.target.value)}}} className='movie-search' placeholder='cari film ...'/>
       <div className="movie-container">
       
          <ListMovie movie={getMovies} />
        
       </div>
      </header>
    </div>
  );
}

export default App;
