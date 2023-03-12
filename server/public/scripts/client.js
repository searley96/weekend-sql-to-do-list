$(document).ready(onReady);

function onReady() {
    $('#addTaskBtn').on('click', addTask)

    $('#viewTasks').on('click', '#deleteTaskBtn', deleteTask)

    getTasks();

    $('#viewTasks').on('click', '#completeTaskBtn', completeToTrue)
}

//DELETE
function deleteTask() {
    console.log('In deleteTask');
    let idToDelete = $(this).parent().parent().data().id;

    $.ajax({
        type: 'DELETE',
        url: `/tasks/removeTask/${idToDelete}`
    })
    .then((result) => {
        console.log('Successfully deleted:', idToDelete)
        getTasks()
    })
    .catch((err) => {
        console.log('Error deleting kolalas', error)
    })
}

//PUT
//change "complete" from false to true

function completeToTrue() {
    console.log('task complete', $(this).parent().parent().data().id);
    const idStatusChange = $(this).parent().parent().data().id;

    $.ajax({
        method: 'PUT',
        url: `/tasks/changeToTrue/${idStatusChange}`
    })
    .then((response) => {
        getTasks()
        console.log('Status change successful');
    })
    .catch((error) => {
        alert('Status change unsuccessful');
    });
};

//task submits when Add Task button clicked

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



function renderTasks(tasks) {
    console.log('in renderTasks');

    $('#viewTasks').empty();

    for (let job of tasks) {

    $('#viewTasks').append(`
    <tr data-id=${job.id}>
        <th>${job.title}</th>
        <th id='taskComplete${job.id}'>${job.complete}</th>
        <th><button id='completeTaskBtn'>Complete</button></th>
        <th><button id='deleteTaskBtn'>Delete</button></th>
    </tr>
    `)
    if (job.complete === true) {
        console.log('job complete')
        $(`#taskComplete${job.id}`).addClass("changeToGreen");
    }
  }
}