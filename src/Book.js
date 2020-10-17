import React from 'react'

const Book = ({ img, title, author }) => {
    const clickHandler = () => {
      console.log('You Hit Me!!!!')
    }
  
    const fontBoldHandler = (author, title) => {
      alert(`Title: ${title}, Author: ${author}`);
    }
  
    return (
      <article className='book'>
        <img src={img} alt='book1' style={{width: '200px'}} />
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button className='btn-primary' type='button' onClick={clickHandler}>Click Me</button>
        <button className='btn-secondary' type='button' onClick={() => fontBoldHandler(author, title)}>Click Me</button>
      </article>
    )
  }

export default Book
