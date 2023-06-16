const buttonGroup = document.getElementById("button-group"); 

const buttonGroupPressed = (e) => {
  const isButton = e.target.nodeName === 'BUTTON';
  if(!isButton) {
     return;
   }
  
  document.body.style.backgroundColor = e.target.value; // change background color of body tag
  e.target.style.backgroundColor =  e.target.value; // / change background color of the clicked button
  
}

buttonGroup.addEventListener('click', buttonGroupPressed);