
import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {


 return (
    
      <div className="container mx-auto h-[60px] mt-10">
      <div className="flex justify-around">
      <Link to="#" className="text-solid-900">CONTACT</Link>
      <Link to="#" className="text-solid-900">ACCOUNT</Link>
      <Link to="#" className="text-solid-900">FAQS</Link>
      <Link to="#" className="text-solid-900">PRIVACY POLICY</Link>
      <Link to="#" className="text-solid-900">TERMS OF SERVICE</Link>
      <Link to="#" className="text-solid-900">REFUND POLICY</Link>
        <p>&copy; {new Date().getFullYear()} DECEM </p>
      </div>
      </div>

 );
};

export default Footer;





       
