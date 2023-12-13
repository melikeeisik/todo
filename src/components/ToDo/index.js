import React, {useState} from 'react'
import List from './List'
import Form from './Form'
import "./style.css"
function ToDo() {
    const [article, setArticle] = useState([
      {
        articleId:1,
        articleName:"melih",
        articleValue:true
      }
    ]) 
  return (
    <div className='todo-list'>
      
      <List article={article} articleList= {setArticle}/>
      <Form article={article} articleList={setArticle} />
    </div>
  )
}

export default ToDo
