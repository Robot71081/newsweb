
import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import { Loader } from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

 export const News  =(props)=> {
   const [articles,setArticles]= useState([])
   const [loading,setLoading]= useState(true)
   const [page,setPage]= useState(1)
   const [totalResults,settotalResults]= useState(0)

  

   

    const cap=(string)=>{
       return string.charAt(0).toUpperCase()+string.slice(1);
    }
  
 

     const updateNews= async ()=>{
      props.setProgress(10);
      const url= `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
      
      setLoading(true)
      let data= await fetch(url);
      props.setProgress(30);
      let parsedData=await data.json();
      props.setProgress(70);
      console.log(parsedData);
      setArticles(parsedData.articles)
      settotalResults(parsedData.totalResults)
      setLoading(false)
      
      props.setProgress(100);
    }

    useEffect(()=>{
      document.title=`${cap(props.category)}-Newsweb`;
      updateNews();
      
    },[])
    

      
  


      const  fetchMoreData = async () => {
        
        
       
          const url= `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=013b35d8c62340bea24c083c9a09e95d&page=${page+1}&pageSize=${props.pageSize}`;
          setPage(page+1)
          let data= await fetch(url);
          let parsedData=await data.json();
          console.log(parsedData);
          setArticles(articles.concat(parsedData.articles))
          settotalResults(parsedData.totalResults)
        
          
       
      };
   
        return(
          
          <div className="container my-3">
           <h2 className="text-center" style={{margin:'35px 0px',marginTop:'90px'}}>NewsWeb Top-headlines on {cap(props.category)}</h2>
          {/* {loading&&<Loader/>}*/}
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<totalResults}
          loader={<Loader/>}
        >
           <div className="container">

          
           
          
           <div className="row">
          
            {articles.map((element)=>{
            return  <div className="col-md-4" key={element.url}>
             <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
             </div>
           })}
           
          

           </div>
           </div>
           </InfiniteScroll>
           {/*<div className="container d-flex justify-content-between">
            <button disabled={state.page<=1}className="btn btn-dark" onClick={handlePreClick}> &larr;Previous</button>
            <button  disabled={state.page+1>Math.ceil(state.totalResults/props.pageSize)}className="btn btn-dark" onClick={handleNexClick}>Next &rarr;</button>
          </div>*/}
           
          
          </div>
        )
    
}

News.defaultProps={
  country:"in",
  pageSize:8,
  category:"general",
  totalResults:0
}

News.propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
}