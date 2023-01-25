import React from 'react'
import  '../styles/pdetail.css'
const PDetail = () => {
  return (
  <div style={{marginTop:'5px'}}>

    <div className='name-email'>
      <h3 style={{fontSize:'22px'}}>Diane Cooper</h3>
      <p style={{fontSize:'14px', marginLeft:'5px',marginTop:'10px'}}>dianecooper@example.com</p>
    </div>

 <div className="detail-box" >

    <div className="detail1"  style={{width:'32%'}}>
         <div className="small-boxes">
          <p style={{fontSize:'14px'}}>Gender <br /> <span> Female</span></p>
         </div>

         <div className="small-boxes">
          <p style={{fontSize:'14px'}}>Birthday <br /> <span> Feb 24th, 1997</span></p>
         </div>

         <div className="small-boxes">
          <p style={{fontSize:'14px'}}>Phone number <br /> <span> 8689651829</span></p>
         </div>

         <div className="small-boxe">
          <p style={{fontSize:'14px'}}>Member Status <br /> <span> Active Member</span></p>
         </div>
  </div>

  <div className="detail2" style={{width:'24%'}}>
        <div className="small-boxes">
          <p style={{fontSize:'14px'}}>Gender <br /> <span> Femail</span></p>
        </div>
        <div className="small-boxe">
          <p style={{fontSize:'14px'}}>Gender <br /> <span> Femail</span></p>
        </div>
        <div className="small-boxe">
          <a href='http://www.google.com' style={{fontSize:'12px',textTransform:'uppercase',float:'right',lineHeight:'25px' ,color:'green'}}>View ecg <br />report <br />document  </a>
        </div>
 </div>
</div> 
</div>
  )
}

export default PDetail