const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('resume', resume);
  
    try {
      const response = await fetch('/api/submit-resume', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        alert('Your resume has been submitted successfully!');
      } else {
        alert('There was an error submitting your resume. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting resume:', error);
    }
};