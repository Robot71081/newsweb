import React from 'react'

const NewsItem =(props)=> {
 
  
 
   let {title,description,imgurl,newsurl,author,date,source}=props;
    return (
      <div className="my-3">
       <div className="card" >
       <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger' >{source}</span>
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className='card-text'><small className="text-muted">By {!author?"unkown":author} {new Date(date).toUTCString()} </small></p>

    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
