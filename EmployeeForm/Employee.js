// Get the form element
const form = document.querySelector('form');

// Add an event listener to the form submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the input values
  const name = document.querySelector('#name').value.trim();
  const id = document.querySelector('#id').value.trim();
  const location = document.querySelector('#location').value.trim();
  const address = document.querySelector('#address').value.trim();
  const bloodGroup = document.querySelector('#blood_group').value.trim();
  const experience = document.querySelector('#experience').value.trim();
  const skills = document.querySelector('#skills').value.trim();

  // Validate the input values
  if (name === '') {
    alert('Please enter your name');
    return false;
  }
  
  if (id === '') {
    alert('Please enter your ID');
    return false;
  } else if (!/^\d+$/.test(id)) {
    alert('Please enter a valid ID');
    return false;
  }
  
  if (location === '') {
    alert('Please enter your location');
    return false;
  }
  
  if (address === '') {
    alert('Please enter your address');
    return false;
  }
  
  if (bloodGroup === '') {
    alert('Please enter your blood group');
    return false;
  } else if (!/^(A|B|AB|O)[+-]$/.test(bloodGroup)) {
    alert('Please enter a valid blood group');
    return false;
  }
  
  if (experience === '') {
    alert('Please enter your experience');
    return false;
  } else if (!/^\d+$/.test(experience)) {
    alert('Please enter a valid number for experience');
    return false;
  }
  
  if (skills === '') {
    alert('Please enter your skills');
    return false;
  }
  
  // If all input values are valid, submit the form
  alert('Form submitted successfully!');
  form.submit();
});
