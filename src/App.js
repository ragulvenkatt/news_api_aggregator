import React,{useState} from 'react';

import axios from 'axios';

import './App.css';


function App() {

        const[data,setData]=useState([])

    const getNews=()=>{
        axios
        .get('https://newsapi.org/v2/top-headlines?country=in&apiKey=081d8645d90343b1b36558bdb71523fe')
        .then((response)=>{
            
            setData(response.data.articles);
        })
    }

	return (

        <>
        <h1><center><b>NEWS AGGREGATOR</b></center></h1>
        <h2><marquee> <b><i>INDIAN NEWS ARE DISPLAYED HERE</i></b></marquee></h2>

        <div className='full' >
		
      <center>
        <button className="btn" onClick={getNews}><b>Generate news</b>
        <span>want news?</span></button></center><br></br><br></br>
        
        

        <div className='box'>
          <p>Displaying News are in the format of </p>
          <ul>
            <li>Title of the news</li>
            <li>Image</li>
            <li>Description</li>
            <li>Content</li>
            <li>Published</li>
          </ul>
          </div> 
        
        {
          
            data.map((value)=>{
              
                return(
                    <div className="">
        <div class="cntr" >
  
  
    <h3><b><h3>Title: </h3></b>{value.title}</h3>
    <img src={value.urlToImage} className="image_url" style={{maxWidth:'100'}} alt="loading!!" />
    <p >{value.description}</p>
    <p>{value.content}</p>
    <p><b>Published at:</b>{value.publishedAt}</p>
    <a href={value.url} ><button className="button2" >click here for full news</button></a>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
</div>
        
                );
            }
            )
        }
        </div>
        </>
        );
}

export default App