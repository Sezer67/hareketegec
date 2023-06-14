import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const ModalHeader = ({title, handleClose}) => {
  return (
    <div className='modalHeader'>
        <h4 style={{color: 'white'}}>{title || "Modal Title"}</h4>
        <button className='closeButton' onClick={handleClose}>
            <CloseIcon style={{color: 'white'}} />
        </button>
    </div>
  )
}

export default ModalHeader