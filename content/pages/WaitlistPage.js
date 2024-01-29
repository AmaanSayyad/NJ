import React, { useState } from 'react';

function WaitlistPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { name, email };

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Form submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="waitlist-container">
      <h1 className="waitlist-title">Join Our Waitlist</h1>
      <p className="waitlist-description">Be the first to know when Near University is launched!</p>
      <form className="waitlist-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Join Waitlist</button>
      </form>
    </div>
  );
}

export default WaitlistPage;