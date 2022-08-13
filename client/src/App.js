
import "./App.css"
import React, { useState, useEffect } from 'react'




export default function Posts() {


  //Fetching Data From REST Api 

  const [post, getPost] = useState([])
  const API = 'http://localhost:4000/getUser';
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getPost(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])


// Sending Response in a list 

  return (
    <>
      <h2>All Users</h2>
      <ol>
        {post.map((item, i) => {
          return <li>
            <ul className='boxClass' key={i}>
                <li>User ID = {item.id}<li> Name = {item.name}</li>
                <li>Email Id = {item.email}</li>
                <li> address</li>
                <ul>
                  <li>
                    Street = {item.address.street}
                  </li>
                  <li>
                    Suite = {item.address.suite}
                  </li>
                  <li>
                    City = {item.address.city}
                  </li>
                  <li>
                    Zipcode = {item.address.zipcode}
                  </li>
                  <li>
                    Gio
                  </li>
                  <>
                    <ul>
                      <li>
                      lat = {item.address.geo.lat}
                      </li>
                      <li>
                      lng = {item.address.geo.lng}
                      </li>
                    </ul>
                  </>
                </ul>
                
              </li>
              <li>
                Phone = {item.phone}
              </li>
              <li>
                Website = {item.website}
              </li>
              <li>
                Company
              </li>
              <>
                    <ul>
                      <li>
                      Name = {item.company.name}
                      </li>
                      <li>
                      catchPhrase = {item.company.catchPhrase}
                      </li>
                      <li>
                      bs = {item.company.bs}
                      </li>
                    </ul>
                  </>
            </ul>
          </li>
        })}
      </ol>
    </>
  )
}