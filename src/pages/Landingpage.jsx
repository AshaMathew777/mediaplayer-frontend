import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Landingpage() {
  return (
<>
    <div className="row mt-5 w-100 justify-content-center align-items-center">
     <div className="col-md-1"></div>
     
     <div className="col-md-5 p-5">
      <h2> Welcome to <span className='text-warning'>Media Player</span></h2>
      <p style={{textAlign:'justify'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus unde dolores minus quibusdam distinctio cum fuga magni, explicabo quisquam id error minima hic, numquam qui atque officiis harum quod magnam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia odio adipisci quibusdam quas, in quae sit aut blanditiis consectetur maxime vitae dolor quis accusamus sapiente quasi explicabo error natus quam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores veritatis assumenda, deleniti repellat sapiente maiores rem facilis cupiditate repudiandae sequi excepturi itaque aliquam animi odit nostrum vitae porro dicta. Autem.</p>
      



      <button className='btn btn-warning mt-5'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Get Started</Link></button>
     </div>
     <div className="col-md-1"></div>
     <div className="col-md-5 d-flex justify-content-center align-items-center p-5">
      <img src='https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif' alt='no image' className='w-75'></img>
     </div>
     </div>


     <div className="row w-100 mt-5">

      <h2 className='mt-5 text-center mb-5'>Feature</h2>
      <div className="col-md-1 me-md-5"></div>
     
     
     
      <div className="col-md-3  px-5 px-md-4 mt-4">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/470292/screenshots/4064016/ezgif.com-video-to-gif.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 px-5 px-md-4 mt-4">
      <Card style={{ width: '100%'}} className='p-3'>
      <Card.Img variant="top" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2xjOTJqdjR5anMzMWI5ZzJuNGljMHZ5ajJhdW1nNjdlNjZ6cTN4YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qvp6Z2fidQR34IcwQ5/giphy.webp"style={{height:'31vh'}} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-md-3 px-5 px-md-4 mt-4 ">
      <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/bc/57/43/bc5743245f004c7ea45cd8a71991c661.gif"  />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col- md-1 px-5 px-md-4 mt-4 "></div>
      
     </div>





     <div className='row w-100 mt-5 ms-md-0 ms-1 p-md-0 p-4'>
        <div className='col-md-1'></div>
        <div className='col-md-10  border rounded m-md-5 p'>
          <div className='row w-100 '>
          <div className='col-md-6'>
              <h3 className='text-warning mt-3'>Simple fast and powerfull</h3>
              <p className='mt-4'><span className='fs-4'>play everything</span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quae aperiam minus suscipit, voluptates quaerat voluptas soluta odit, eum, temporibus ullam neque. Saepe similique ducimus illum labore? Aliquam, animi? Veniam!
              </p>
              <p className='mt-4'><span className='fs-4'>play everything</span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quae aperiam minus suscipit, voluptates quaerat voluptas soluta odit, eum, temporibus ullam neque. Saepe similique ducimus illum labore? Aliquam, animi? Veniam!
              </p>
              <p className='mt-4'><span className='fs-4'>play everything</span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quae aperiam minus suscipit, voluptates quaerat voluptas soluta odit, eum, temporibus ullam neque. Saepe similique ducimus illum labore? Aliquam, animi? Veniam!
              </p>
            </div>

            <div className='col-md-6'>
            <iframe width="100%" height="500px" src="https://www.youtube.com/embed/YykjpeuMNEk?si=SZu1IDOi5qFjdpfi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className='col-md-1'></div>
      </div>


      
  </>
  )
}

export default Landingpage