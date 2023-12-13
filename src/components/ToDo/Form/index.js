import React, {useState, useEffect} from 'react'
import "../style.css"
function Form({article, articleList }) {
    const [page , setPage] = useState("all")
    const activeLength = article.filter(item => (item.articleValue == false  ))
    const [btnStyle, setBtnStyle] = useState(false)

    const handleCheckboxClick = (itemId) => {
        const updatedArticle = article.map((item) =>
            item.articleId === itemId
            ? { ...item, articleValue: !item.articleValue }
            : item
        );
         articleList(updatedArticle);
    };

    const deleteArticle = () => {
        const uncompletedArticle = article.filter((item) => {
          return item.articleValue !== true;
        });
        articleList(uncompletedArticle);
        setPage("clear");
    };

    function allArticle(){
        return(
            <ul>
                {article.map((item, index)=>(
                    <li onClick={() => handleCheckboxClick(item.articleId)} className={item.articleValue ? "deneme" : ""} key={index}>
                        <input onClick={() => handleCheckboxClick(item.articleId)} type="checkbox" className='check'></input>
                        {item.articleName}
                    </li>
                ))}
            </ul>
        )
    }

    function active(){
        return(
            <ul>
                {article.map((item,index) =>(
                    (!item.articleValue && <li onChange={() => handleCheckboxClick(item.articleId)} key={index}><input type="checkbox"  className='check'></input>{item.articleName}</li>)
                ))}
            </ul>   
        )
    }

    function completed() {
        return(
            <ul className='article-list'>
                {article.map((item,index) =>(
                    (item.articleValue && <li className='deneme'  onChange={() => handleCheckboxClick(item.articleId)} key={index}><input  type="checkbox" className='check'></input>{item.articleName}</li> )
                ))}
            </ul>
        )
    }

    function clear() {
        return (
            <ul className='article-list'>
                {article.map((item, index) => (
                    !item.articleValue && (
                    <li key={index}>
                        <input
                        onChange={() => handleCheckboxClick(item.articleId)}
                        type="checkbox"
                        className='check'
                        ></input>
                        {item.articleName}
                    </li>
                    )
                ))}
            </ul>
        );
    }
    
    return (
        <div>
            {page == "all" && allArticle()}
            {page == "active" && active()}
            {page == "completed" && completed()}
            {page == "clear" && clear()}
            <div className='footer'>
                <div className='item-count'>
                    {activeLength.length} items left
                </div>
                    <button onClick={()=> {setPage("all"); setBtnStyle(1)}} style={{border: 1==btnStyle ? "1px solid #e8e8e8" : "none"}}>All</button>
                    <button onClick={() => {setPage("active"); setBtnStyle(2)}} style={{border: 2==btnStyle ? "1px solid #e8e8e8" : "none"}} >Active</button>
                    <button onClick={() => {setPage("completed"); setBtnStyle(3)}} style={{border: 3==btnStyle ? "1px solid #e8e8e8" : "none"}} >Comleted</button>
                    <button onClick={() => {deleteArticle(); setBtnStyle(4)}} style={{border: 4==btnStyle ? "1px solid #e8e8e8" : "none"}}>Clear completed</button>
                
            </div>
        </div>
    )
}

export default Form
