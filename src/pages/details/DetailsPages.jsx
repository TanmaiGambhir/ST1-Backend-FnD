import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }// eslint-disable-next-line
  }, [])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>Every Sport Is Essential</h1>
              <p>{blogs.desc}</p>
              <p>"Sports are very essential for every human life which keeps them fit and fine and physical strength. It has great importance in each stage of life. It also improves the personality of people. Sports keep our all organs alert and our hearts become stronger by regularly playing some kind of sports. sports has always given priority from old ages and nowadays it has become more fascinating. Due to the physical activity blood pressure also remains healthy, and blood vessels remain clean. Sugar level also reduces and cholesterol comes down by daily activity. Different people have different interests in sports but the action is the same in all sports. Sports are becoming big channels to make more capital/money day by day and the number of people is also increasing. By playing sports even at a young age you can also be better and free from some diseases. By playing sports lung function also improves and becomes healthy because more oxygen is supplied. Sports also improves bone strength even in old age."</p>
              <p>Writer: Dharmesh</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
