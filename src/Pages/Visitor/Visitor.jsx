import React from 'react';

const Visitor = () => {
    return (
        <div className='py-10 bg-slate-200'>
        <h2 className="text-5xl my-10 text-orange-600 text-center"> Regular User </h2>
        <div className="grid p-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        <div className="card w-64 md:w-72  lg:w-72 bg-amber-100 shadow-xl">
         <div className="card-body">
         <p> I am Doctor,invite these site to set your daily task  </p>
       <div className="card-actions justify-start">
       <div className="flex  items-center justify-center align-middle">
       <div className="avatar">
       <div className="w-12 rounded-full">
          <img src="https://i.ibb.co/T8kccCQ/badge.webp" />
          </div>
        </div>
        </div> 
       <div className="badge badge-outline">Jhon Snow</div>
       </div>
       </div>
       </div>
        <div className="card w-64 md:w-72  lg:w-72 bg-red-100 shadow-xl">
         <div className="card-body">
         <p>I am Engineer,invite these site to set your daily work up to date </p>
       <div className="card-actions justify-start">
       <div className="flex  items-center justify-center align-middle">
       <div className="avatar">
       <div className="w-12 rounded-full">
          <img src="https://i.ibb.co/rQfNKYb/2a.webp" />
          </div>
        </div>
        </div> 
       <div className="badge badge-outline">Robert hook</div>
       </div>
       </div>
       </div>
        <div className="card w-64 md:w-72  lg:w-72 bg-lime-100 shadow-xl">
         <div className="card-body">
         <p>I am student,  invite these Site to set your daily task </p>
       <div className="card-actions justify-start">
       <div className="flex  items-center justify-center align-middle">
       <div className="avatar">
       <div className="w-12 rounded-full">
          <img src="https://i.ibb.co/1XnW1gp/download-1.webp" />
          </div>
        </div>
        </div> 
       <div className="badge badge-outline">Jonson</div>
       </div>
       </div>
       </div>
       
        </div>
    </div>
    );
};

export default Visitor;