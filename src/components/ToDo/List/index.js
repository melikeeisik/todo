import React, {useState} from 'react'

function List({article, articleList}) {
    const [form, setForm] = useState({articleId:0,articleName :"", articleValue:false})
    
    const newValue = (e) =>{
        setForm({...form, [e.target.name]:e.target.value})
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(!form.articleName){
            return false
        }else{
            var min = 1;
            var max = 100;
            var rand =  min + (Math.random() * (max-min));
            form.articleId=Math.floor(rand)
            articleList([...article,form])
            console.log(article)
            setForm({articleName:"", articleValue:false})
        }
        console.log( articleList([...article,form]))
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input className='input' name="articleName" placeholder='What needs to be done' onChange={newValue} value={form.articleName}></input>
        </form>
    </div>
  )
}

export default List
