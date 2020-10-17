import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const firstBook = {
  title: 'Beyond The Dragons Gate' ,
  author: 'Yoon Ha Lee',
  img: 'https://d188rgcu4zozwl.cloudfront.net/content/B086S4NZ7Q/resources/891133439'
}

const secondBook = {
  title: 'How I Built This' ,
  author: 'Guy Raz',
  img: 'https://images-na.ssl-images-amazon.com/images/I/51iVH1+s-0L._SX329_BO1,204,203,200_.jpg'
}

function BookList() {
  return (
    <section className='booklist'>
      <Book 
        img = {firstBook.img}
        title = {firstBook.title}
        author = {firstBook.author}
      />

      <Book 
        img = {secondBook.img}
        title = {secondBook.title}
        author = {secondBook.author}
      />
    </section>
  )
}

const Book = ({ img, title, author}) => {
  return (
    <article className='book'>
      <img src={img} alt='book1' style={{width: '200px'}} />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))