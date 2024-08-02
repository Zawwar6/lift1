document.addEventListener('DOMContentLoaded', () => {
  const lift = document.querySelector('.lift');
  const leftDoor = document.querySelector('.left-door');
  const rightDoor = document.querySelector('.right-door');
  const floorButtons = document.querySelectorAll('.floor-btn');
  const digitalDisplay = document.querySelector('.digital-display');
  const backgroundImage = document.querySelector('.background-image');
  
  let currentFloor = 1;
  let isMoving = false;

  floorButtons.forEach(button => {
    button.addEventListener('click', () => {
      const floor = parseInt(button.getAttribute('data-floor'));
      if (!isMoving && floor !== currentFloor) {
        moveLift(floor);
      }
    });
  });

  function moveLift(floor) {
    isMoving = true;
    openDoors();
    setTimeout(() => {
      closeDoors();
      setTimeout(() => {
        lift.style.bottom = `${(floor - 1) * 33.33}%`;
        setTimeout(() => {
          currentFloor = floor;
          digitalDisplay.textContent = currentFloor;
          openDoors();
          setTimeout(() => {
            closeDoors();
            isMoving = false;
          }, 2000);
        }, 3000); 
      }, 2000);
    }, 2000);
  }

  function openDoors() {
    leftDoor.classList.add('open');
    rightDoor.classList.add('open');
    backgroundImage.style.display = 'block';
  }

  function closeDoors() {
    leftDoor.classList.remove('open');
    rightDoor.classList.remove('open');
    backgroundImage.style.display = 'none';
  }
});
