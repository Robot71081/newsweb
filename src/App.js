import React,{useState} from 'react'
import NavBar from './components/NavBar'
import LoadingBar from 'react-top-loading-bar'
import { News   } from './components/News'
import {
  BrowserRouter ,
  Routes,
  Route,
  
} from "react-router-dom";

  const App =() =>{
 const pageSize=15;
  const  apiKey=process.env.REACT_APP_NEWS_API
  
  const [progress,setProgress]=useState(0)
  
 
    return (
      <div>
        <BrowserRouter>
       <NavBar/>
       <LoadingBar
       height={3}
        color='#f11946'
        progress={progress}
       
      />
      <Routes>
          <Route path="/" element={ < News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in"category="general"/>}/>
      </Routes>   
      <Routes>
          <Route path="/business" element={ < News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in"category="business"/>}/>
      </Routes>  
      <Routes>
          <Route path="/entertainment" element={ < News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country="in"category="entertainment"/>}/>
      </Routes>  
      <Routes>
          <Route path="/general" element={ < News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in"category="general"/>}/>
      </Routes>  
      <Routes>
          <Route path="/health" element={ < News setProgress={setProgress}  apiKey={apiKey} pageSize={pageSize} country="in"category="health"/>}/>
      </Routes>  
      <Routes>
          <Route path="/science" element={ < News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in"category="science"/>}/>
      </Routes>  
      <Routes>
          <Route path="/sports" element={ < News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in"category="sports"/>}/>
      </Routes>  
      <Routes>
          <Route path="/technology" element={ < News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country="in"category="technology"/>}/>
      </Routes>  
         
      </BrowserRouter>
      </div>
    )
  
}
export default App;






