import React from 'react'
import '../Css/QuizHome.css'
import {Link} from "react-router-dom";
import quizImg from '../images/quizImg.png';

const QuizHome = () => {
  return (
    <div className='container-fluid HomeMain'>
            <div className='row'>


                <div className='col-lg-6 col-md-12 right-box'>
                <img className='image_corrona' src={quizImg} alt="" />
                <br />
                </div>
                <div className='col-lg-6 col-md-12 left-box'>

                    <br />
                    <br />
                    <br />
                    <h1 className='par'>Quiz on Covid-19</h1>
                    <br></br>
                    <br></br>
                    <button type="button" className="btn btn-dark btn-lg btn_info">
                    Test Your Knowledge
                  </button>
                    <br />
                    <br />
                    <br />

                </div>

            </div>

    </div>

)
}

export default QuizHome
// <div className='QuizMain'>
//   <button type="button" className="btn btn_info btn-lg download-button">
//     <Link className="linkButton" to='/quiz'>Test Your Knowledge</Link>
//   </button>
// </div>
