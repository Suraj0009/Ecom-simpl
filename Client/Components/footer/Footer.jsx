import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
     
     <div className="top">
        <div className="item"> 
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
        <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>




        </div> 

        <div className="item"> 
          <h1> About</h1>
          <span> Hey thanks for visiting us we are the most popluar brand since 2000 </span>
        
        </div>
        
        <div className="item">
          <h1>Contact</h1>
            <span> email-sr80371@gmail.com</span>
        </div>
    
     </div>


     <div className="bottom">
      
      <div className="left">
      <span className="logo"> Rawat's Collection</span>
       <span className="copyright"> © Copyright 2023 All right Reserved</span>
      </div>
      <div className="right">

        <img src="/img/payment.png"></img>
      </div>
   


    </div>
    </div>
    



  )
}

export default Footer
