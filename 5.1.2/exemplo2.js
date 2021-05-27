const headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = '#32CD32';

const emergencyTasks = document.querySelector('.emergency-tasks');
emergencyTasks.style.backgroundColor = '#F4A460';

const emergencyTasksH = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksH.length; index += 1){
  emergencyTasksH[index].style.backgroundColor = '#A020F0';
}

const noEmergencyTasks =  document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = '#FFD700';

const noEmergencyTasksH = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksH.length; index += 1){
  noEmergencyTasksH[index].style.backgroundColor = '#000000';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#000000';