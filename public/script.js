

// script.js
window.addEventListener('scroll', () => {
  const line2 = document.querySelector('.line2');
  const line4 = document.querySelector('.line4');

  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const additionalOffset = 50; // Adjust this value as needed

  if (line2) {
    const elementPosition = line2.getBoundingClientRect().top + scrollPosition;

    if (scrollPosition + windowHeight > elementPosition + additionalOffset) {
      line2.classList.add('expanding');
      line2.classList.remove('retracting');
    } else {
      line2.classList.add('retracting');
      line2.classList.remove('expanding');
    }
  }

  if (line4) {
    const elementPosition2 = line4.getBoundingClientRect().top + scrollPosition;

    if (scrollPosition + windowHeight > elementPosition2 + additionalOffset) {
      line4.classList.add('showLine');
      line4.classList.remove('hideLine');
    } else {
      line4.classList.remove('showLine');
      line4.classList.add('hideLine');
    }
  }
});




//terminal
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  const commands = {
      help: 'Available commands: help, name, position, experience, clear',
      position:'Student',
      experience: 'One Year and gaining',
      name:'Mohd Umar Warsi',
      clear: () => {
          output.innerHTML = '';
      }
  };

  input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          const command = input.value.trim();
          processCommand(command);
          input.value = '';
      }
  });

  function processCommand(command) {
      const div = document.createElement('div');
      div.textContent = '> ' + command;
      output.appendChild(div);

      if (commands[command]) {
          const response = typeof commands[command] === 'function' ? commands[command]() : commands[command];
          if (response) {
              const responseDiv = document.createElement('div');
              responseDiv.textContent = response;
              output.appendChild(responseDiv);
          }
      } else {
          const errorDiv = document.createElement('div');
          errorDiv.textContent = 'Command not found: ' + command;
          output.appendChild(errorDiv);
      }

      output.scrollTop = output.scrollHeight;

  }
  
});


const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
  if(entry.isIntersecting){
    entry.target.classList.add('show');
  }
  else{
    entry.target.classList.remove('show');

  }
  });
}) ;





const skillsobserver = new IntersectionObserver((entries) =>{
  entries.forEach((entr) =>{
  if(entr.isIntersecting){
    entr.target.classList.add('showskill');
  }
  else{
    entr.target.classList.remove('showskill');

  }
  });
}) ;




document.addEventListener('DOMContentLoaded', () => {
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));

  const progressElements = document.querySelectorAll('.progress');
  progressElements.forEach((el) => skillsobserver.observe(el));
});
