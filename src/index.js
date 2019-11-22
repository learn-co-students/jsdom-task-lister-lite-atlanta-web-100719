document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // grab the form  ✅
  const taskForm = document.querySelector('#create-task-form');
  // console.log(taskForm);


  // grab submit from form ✅
  taskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log(event);

    // grab dat id bb :^) ✅
    const taskList = document.querySelector('#tasks');
    console.log(taskList);

    // put da info in the tasks list ✅
    const taskDescription = taskForm.querySelector('#new-task-description').value;
    // console.log(taskDescription);


    // append the description to the list✅

    const taskCreate = document.createElement("li");
    const taskButton = document.createElement('button');
    taskButton.innerText = "X"
    // console.log(taskButton)
    taskCreate.innerText = taskDescription;

    taskList.appendChild(taskCreate);
    taskCreate.appendChild(taskButton);

    taskCreate.addEventListener('click', function (event) {
      console.log(event)
      if (event.target === taskButton) {
        console.log(event.target)
        taskCreate.remove();
      }

    })


    //reset the form ✅

    event.target.reset();


  })




});