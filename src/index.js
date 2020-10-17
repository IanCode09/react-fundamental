import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { data } from './books'
import SpesificBook from './Book'

function BookList() {
  return (
    <section className='booklist'>
      {data.map((book) => {
        return <SpesificBook key={book.id} {...book} />
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))