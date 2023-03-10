$(document).ready(onReady);

function onReady() {
    $('#addTaskBtn').on("click", addTask)

    getTasks();
}

function setupClickListeners() {
    $( '#addTaskBtn' ).on( 'click', function(){
      console.log( 'in addButton on click' );
     
      let taskToSend = {
        task: $('#taskIn').val()
      }
      
    }); 
  };

function addTask() {
    console.log('in addTask')
    let taskToSend = {
        task: $('#taskIn').val()
    };
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: taskToSend
    })
    .then((response) => {
        console.log('response from server', response);
        //add function to render
        getTasks()
    })
    .catch((err) => {
        console.log('error in post')
    })
};

//GET
function getTasks() {
    console.log('in getTasks');

    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then((response) => {
        console.log('list of tasks', response)
        renderTasks(response)
    }).catch((err) => {
        console.log('error is tasks/get')
    })
} // end getTasks

//POST
// function saveTask(newTask) {
//     console.log('in saveTask', newTask)

//     $.ajax({
//         type: 'POST',
//         url: '/tasks',
//         data: newTask
//     })
//     .then((response) => {
//         console.log('response from server', response);
//         //add function to render
//         getTasks()
//     })
//     .catch((err) => {
//         console.log('error in post')
//     })
// }

function renderTasks(tasks) {
    console.log('in renderTasks');

    $('#viewTasks').empty();

    for (let job of tasks) {

    $('#viewTasks').append(`
    <tr data-id=${job.id}>
        <th>${job.title}</th>
        <th>${job.complete}</th>
        <th><button id='completeTaskBtn'>Completed</button></th>
        <th><button id='deleteTaskBtn'>Delete</button></th>
    </tr>
    `)
 }
}