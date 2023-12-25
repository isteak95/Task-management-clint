// AboutUs.jsx

import React from 'react';

const AboutUs = () => {
  return (

    <div className="about-us-container lg:mx-28 my-5">
      <h1 className='text-center p-10 text-2xl font-bold'>Welcome to TaskMaster</h1>
      < p className='text-xl bg-teal-600 text-gray-50 p-7' >
        In the fast-paced world we live in, managing tasks efficiently is a
        challenge. TaskMaster is here to simplify your life by providing a
        powerful and intuitive task management solution.
      </p>
      < p className='text-xl bg-teal-600 text-gray-50 p-7 my-5' >
        Whether you're an individual striving to stay organized or a team
        collaborating on projects, TaskMaster is designed to meet your unique
        needs. Our platform combines simplicity with advanced features to
        enhance your productivity and streamline your workflow.
      </p>
      <h2 className='text-center p-10 text-2xl font-bold'>Our Mission</h2>
      < p className='text-xl text-center bg-cyan-500 text-gray-50 p-7 my-5' >
        At TaskMaster, our mission is to empower individuals and teams to boost
        productivity. We understand the importance of effective task management
        in achieving personal and professional goals.
      </p>
      <h2 className=' my-5 text-xl font-bold'>Key Features</h2>
      <ul>
        <li className='font-bold text-xl'>
          <strong>Intuitive Design:</strong> User-friendly interface for easy
          navigation.
        </li>
        <li className='font-bold text-xl'>
          <strong>Customization:</strong> Tailor the platform to fit your unique
          workflow.
        </li>
        <li className='font-bold text-xl'>
          <strong>Collaboration:</strong> Facilitate seamless teamwork and
          communication.
        </li>
        <li className='font-bold text-xl'>
          <strong>Notifications:</strong> Stay on top of deadlines with timely
          alerts.
        </li>
        <li className='font-bold text-xl mb-14'>
          <strong>Intelligent Prioritization:</strong> Focus on what matters
          most.
        </li>
      </ul>
      <h2 className='text-xl font-bold my-5'>Why TaskMaster?</h2>
      < p className='text-xl text-center bg-cyan-500 text-gray-50 p-7 my-5' >
        TaskMaster stands out with its efficiency, versatility for individuals
        and teams, and commitment to continuous improvement. Join our community
        and experience the difference.
      </p>
      <h2 className='text-xl font-bold my-5' >Responsive Design</h2>
      < p className='text-xl text-center bg-cyan-500 text-gray-50 p-7 my-5' >
        We understand the importance of accessibility. TaskMaster is designed to
        provide a seamless experience across devices. Whether you're using a
        desktop, tablet, or smartphone, our responsive design ensures that you
        can manage your tasks anytime, anywhere.
      </p>
      <h2 className='text-xl font-bold my-5'>Future Developments</h2>
      < p className='text-xl text-center bg-cyan-500 text-gray-50 p-7 my-5' >
        Our development team is actively working on new features to make
        TaskMaster even more indispensable for your productivity. Stay tuned for
        updates!
      </p>
      <h2 className='text-xl font-bold my-5'>Contact Us</h2>
      < p className='text-xl text-center bg-cyan-500 text-gray-50 p-7 my-5' >
        Have questions or suggestions? Feel free to reach out to us at{' '}
        <a href="mailto:info@taskmaster.com">info@taskmaster.com</a>.
      </p>
    </div>
  );
};

export default AboutUs;
