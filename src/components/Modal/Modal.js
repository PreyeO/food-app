
import React, { useState } from 'react'
import {AiOutlineCloseSquare} from 'react-icons/ai';



const Modal = () => {

  const [myModal, setmyModal] = useState(false)

const toggleModal=()=> {
  setmyModal(!myModal)
}

if (myModal) {
  document.body.classList.add('active-modal')
}else{
  document.body.classList.remove('active-modal')
}


  return (
    <>
    <div className='modal'>
   <h4 onClick={toggleModal}>See details
   </h4> 
   </div>
 {myModal? (
 <>
 <div className='content'>
 
  <div  onClick={toggleModal}className='overlay'>
  </div>
  <div className='modal-content'>
    <p>Just have a single bite of this meal and it will all make a proper sense to you and definitely make you feel "wow".</p>
    <div className='span'>
    <p> The perfect combination of all ingredients can provide the ultimate fulfillment to your craving.
    </p>
    </div>
    
    <div className='close-modal'>
    <AiOutlineCloseSquare  onClick={toggleModal} style={{ width: 100, height: 30 }} />
    </div>
    </div>
    </div>
 </>
  ): ''
 }
 </>
  )
} 

export default Modal