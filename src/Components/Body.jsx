import React, { useState } from 'react'
import Overlay from './Overlay'
// import hero from '../assets/Images/hero.png'
// import hero2 from '../assets/Images/cap.png'
import Carousel from './Carousel'

function Body(props) {

    // let [page,setPage] = useState(false)

    return (
        <>

            <Carousel/>

            <div className=''>
                <div className=' container bg-body-dark pt-5'>
                <p className='fs-1 fw-bolder text-dark'>Discover Movies
                    <br />
                    <span>Worth Watching</span>
                </p>
                {/* <p className='fs-1 fw-bolder text-dark'>Worth Watching</p> */}

                <p>Search, explore, and get complete movie details instantly — ratings, cast, plot, and more.</p>
                <div>
                    <button className='btn btn-danger py-2' onClick={()=> props.setPage(true)} ><i className="fa-solid fa-magnifying-glass mx-2" ></i>Search Movies</button>
                    <button className='btn btn-dark py-2 mx-3'>Explore Movies</button>
                </div>
            </div>
            </div>

            { props.page && <Overlay setPage={setPage}/>}
        </>
    )
}

export default Body
