import React, {useState} from 'react'
import List from './List'
import Form from './Form'
import "./style.css"
function ToDo() {
    const [article, setArticle] = useState([
      {
        articleId:1,
        articleName:"Learn JavaScript",
        articleValue:true
      },
      {
        articleId:2,
        articleName:"Learn React",
        articleValue:false
      },
      {
        articleId:3,
        articleName:"Have a Life!",
        articleValue:false
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
