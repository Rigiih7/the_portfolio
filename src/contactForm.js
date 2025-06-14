import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div
      className="jumbotron text-white p-5 my-5 rounded"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('images/contact1.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-4">Contact Me</h2>
        <p>Have a project in mind or just want to say hi? Drop a message and I’ll respond shortly.</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message">Message:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-primary">Send &rarr;</button>
          </div>
        </form>
        {status === 'success' && (
          <div className="mt-4 alert alert-success">Message sent successfully!</div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
