import React from 'react';

const EmployeeCard = () => {
  return (
    
      <div className="card mb-3" style={{height:'350px', width:'500px'}}>
        <img src="https://tse3.mm.bing.net/th/id/OIP.VOlMLrq-qahJWSsR4QJUQwHaE7?pid=Api&P=0&h=220" className="card-img-top" alt=".." 
        style={{ height: '200px',
      width: '100%',
      objectFit: 'cover'}}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    
  );
}

export default EmployeeCard;
