$(document).on("turbolinks:load", function () {
    if ($('.static_pages.index').length > 0) {
      indexTasks(injectTasksIntoDom);
    }
});

var injectTasksIntoDom = function (response) {
  console.log(response)
  var htmlString = response.tasks.map(function(task) {
    $('#new-task-content').empty();
    return "<div class='col-12 my-3 p-2 border rounded text-center tasks'>\
      <div class='task' data-id='" + task.id + "'> \
      " + task.content + " </div>\
      <button class='delete rounded btn-danger' data-id='" + task.id + "'>Delete</button>\
      <input type='checkbox' class='mark-complete ml-3'\
      data-id='" + task.id + "' "+ (task.completed ? 'checked' : '') + ">\
      </div>";
  });
   $("#tasks").html(htmlString);
};

$(document).on('#create-task').submit(function (event) {
  event.preventDefault();
  postTask(function (data) {
    $('#new-task-content').empty();
    return "<div class='col-12 mb-3 p-2 border rounded task' data-id='"
     + data.task.id + "'> \
    " + data.content + "\
      </div>";
  })
});

$(document).on('click', '.delete', function () {
  deleteTask($(this).data('id'), function () {
    indexTasks(injectTasksIntoDom);
  });
});

$(document).on('change', '.mark-complete', function () {
  if (this.checked) {
    console.log('clicked!!');
    mark_complete($(this).data('id'));
  } else {
    console.log('unclicked!');
    mark_active($(this).data('id'));
  }
})

/*
        var all = document.getElementById('all');
        var active = document.getElementById('active');
        var completed = document.getElementById('completed');
        
        all.onclick = function () {
          $('#new-task-content').empty();
          response.tasks.forEach(function (task) {
            indexTasks();
          })
        };

        active.onclick = function () {
          $('#new-task-content').empty();
          response.tasks.forEach(function (task) {
            if (task.completed == false) {
              
              console.log('active only')
            }
          })
        };

        completed.onclick = function () {
          $('#new-task-content').empty();
          response.tasks.forEach(function (task) {
            if (task.completed) {
              
              console.log('complete only')
            }
          })
        };
*/