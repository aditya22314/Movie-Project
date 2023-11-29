import React, { useEffect, useState } from 'react' // Packages
import _ from 'lodash' 

import './MovieList.css'                          // Components
import Fire from "../../assets/fire.png"
import MovieCard from './MovieCard'
import FilterGroup from './FilterGroup'
const MovieList = ({apptog,setapptog,type,title,emoji,icon}) => {  
    const [movies, setMovies] = useState([]) 
    const [minRating, setminRating] = useState(0) 
    const [filterMovies, setfilterMovies] = useState([]) 
    const [sort, setSort] = useState({
       
        by:'default',
        order:"asc"
    })
    useEffect(()=>{                                
       fetchMovies();
     
    },[])  

    useEffect(()=>{
        if(sort.by!=="default")
        {
          const sortedMovies=  _.orderBy(filterMovies,[sort.by],[sort.order])  // array , properties which we are gonna sort 
          setfilterMovies(sortedMovies) 
        }
    },[sort])

    const fetchMovies = async () =>{
       const response= await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=84dd094d2b5a54706cb451f5be62f113`) 
       const data = await response.json() 
      setMovies(data.results) 
      setfilterMovies(data.results)
    } 

    const handleFilter = rate =>{ 
        if(rate == minRating) {
         setminRating(0)
         setfilterMovies(movies)
        } 
        else{
            setminRating(rate)
        
        setminRating(rate) 

       const filtered= movies.filter(movie=>movie.vote_average >=rate)
       setfilterMovies(filtered)}
    } 
    const handleSort = (e) =>{
        const {name,value} =e.target; 
        setSort(prev=>  ({...prev,[name]:value})
        ) 
        
    }  
   
  return (
    <section className='movie_list' id={type}>
        
        <header className= {` align_center movie_list_header ${apptog?'active':''}`}> 
        <h2 className='movie_list_heading'> {title} <img src={emoji} alt={`${emoji} icon`} className='navbar_emoji' /></h2>
           
            <div className=" align_center movie_list_fs">
                 <FilterGroup minRating={minRating} onRatingClick={handleFilter} ratings={[6,7, 8]} />
                <select name="by" id="" onChange={handleSort} value={sort.by} className="movie_sorting">
                    <option value="default">Sort By</option>
                    <option value="release_date">Date</option>
                    <option value="vote_average">Rating</option>
                </select> 
                <select name="order" id="" className="movie_sorting" onChange={handleSort} value={sort.order} >
                   
                    <option value="asc"> Ascending </option>
                    <option value="desc"> Descending </option>
                </select>
            </div> 
            
        </header> 
        <div className="movie_cards">
           {
             filterMovies.map(movie=> <MovieCard key={movie.id} movie={movie} apptog={apptog}/>)
           }
        </div>
    </section>
  )
}

export default MovieList
