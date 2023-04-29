import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categoryis, setCategory] = useState([]);

   useEffect(
    () =>{
      fetch('http://localhost:5000/category')
      .then(res => res.json())
      .then(data => setCategory(data))
      .catch(error => console.error(error))
    } 
    ,[])
   
    return (
        <div>
            <h4 className='mb-5'>Here is left nav</h4>
          
            {
              categoryis.map(category => <p key={category.id}>
                
                <Link to={`/category/${category.id}`} className='text-decoration-none   fs-4 categoryHover'>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftNav;