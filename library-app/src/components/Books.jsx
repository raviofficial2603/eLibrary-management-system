import axios from 'axios'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Books() {
    const navigate=useNavigate()
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/isLoggedIn',
            
            }).then(response => {
              console.log(response.data);
              if(response.data===false){
                navigate('/login')
              }
            })
            
            .catch((error) => {
              console.error(error.response);
              
            });
    },[])
  return (
    <>
                    <div>
                        <h2>Sci-Fi</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <img height={'200px'} src="https://books.google.co.in/books/publisher/content?id=ElywEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U116CRO_00zDvs9NQQ3_VloEgRExg&w=1280" alt="" />
                                    <h3>The Lost World</h3>
                                </Col>
                                <Col>
                                    <img height={'200px'} src="https://books.google.co.in/books/content?id=rXYdGATpigsC&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0aYzJM0BEfiFMuHXXDCi2jFmbwCA&w=1280" alt="" />
                                    <h3>Dune</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <hr />
                    <div>
                        <h2>Fiction</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <img height={'200px'} src="https://books.google.co.in/books/publisher/content?id=FzVjBgAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U0HIBNOeWREwe5qS7_oQcUVxgGdng&w=1280" alt="" />
                                    <h3>Alchemist</h3>
                                </Col>
                                <Col>
                                    <img height={'200px'} src="https://books.google.co.in/books/publisher/content?id=TIJ5EAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2JlLvNK0vtUaarLbxxyYX586j6ZA&w=1280" alt="" />
                                    <h3>Brave New World</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <hr />
                    <div>
                        <h2>Comedy</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <img height={'200px'} src="https://www.champak.in/wp-content/uploads/2020/03/mar-02-2020-315x422.jpg" alt="" />
                                    <h3>Champak</h3>
                                </Col>
                                <Col>
                                    <img height={'200px'} src="https://www.getlitt.co/blog/wp-content/uploads/2019/07/512x512bb.jpg" alt="" />
                                    <h3>Tenaliraman</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
  )
}

export default Books
