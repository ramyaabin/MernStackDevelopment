// Submit to FormSubmit
fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      status.style.color = '#48bb78';
      status.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
      form.reset();
    } else {
      throw new Error('Form submission failed');
    }
  })
  .catch(error => {
    status.style.color = '#f56565';
    status.textContent = '✗ Oops! Something went wrong. Please try again or email directly.';
  });
});