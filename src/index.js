document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // grab the form  ✅
  const taskForm = document.querySelector('#create-task-form');
  console.log(taskForm);


  // grab submit from form ✅
  taskForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event);

  // grab dat id bb :^) ✅
    const taskList = document.querySelector('#tasks');
    console.log(taskList);

  // put da info in the tasks list ✅
     const taskDescription = taskForm.querySelector('#new-task-description').value;
      console.log(taskDescription);


  // append the description to the list✅

    const taskCreate = document.createElement("li");
      taskCreate.innerText = taskDescription;
      
    taskList.appendChild(taskCreate);

    //reset the form ✅

    event.target.reset();
  })

});
