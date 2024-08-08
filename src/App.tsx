import React from 'react';
import ContactForm from './ContactForm'; 
import './App.css'; 

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Contact Form</h1>
      <ContactForm />
    </div>
  );
};

export default App;
