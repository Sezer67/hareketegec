import React from 'react'

const ModalFooter = ({handleCancel,handleCalculate}) => {
  return (
    <div className='modalFooter'>
        <button onClick={handleCancel} className='footerButton'>İptal</button>
        <button onClick={handleCalculate} style={{backgroundColor:'rgb(97, 97, 201)',color:'white'}} className='footerButton'>Hesapla</button>
    </div>
  )
}

export default ModalFooter