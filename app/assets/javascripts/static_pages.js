$(document).on("turbolinks:load", function () {
    if ($('.static_pages.index').length > 0) {
      indexTasks(injectTasksIntoDom);
    }
});
var injectTasksIntoDom = function (response) {
  console.log(response)
  var htmlString = response.tasks.map(function(task) {
    $('#new-task-content').empty();
    return "<div class='col-12 my-3 p-2 border border-info rounded text-center tasks'>\
    <div class='task' data-id='" + task.id + "'> \
    " + task.content + " </div><hr/>\
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
  indexTasks(injectTasksIntoDom)
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

$(document).on('click', '.all', function () {
  indexTasks(injectTasksIntoDom);
});

var ifActive = function (response) {
    var htmlString = response.tasks.map(function (task) {
      if (task.completed) {
        return "<div class='col-12 my-3 p-2 border border-info rounded text-center tasks'>\
          <div class='task' data-id='" + task.id + "'> \
          " + task.content + " </div><hr/>\
          <button class='delete rounded btn-danger' data-id='" + task.id + "'>Delete</button>\
          <input type='checkbox' class='mark-complete ml-3'\
          data-id='" + task.id + "' "+ (task.completed ? 'checked' : '') + ">\
          </div>";
      }
      $("#tasks").html(htmlString);
    })
}
$(document).on('click', '.active', function () {
  ifActive();
});

var ifComplete = function (response) {
  var htmlString = response.tasks.map(function (task) {
    if (!task.completed) {
      return "<div class='col-12 my-3 p-2 border border-info rounded text-center tasks'>\
        <div class='task' data-id='" + task.id + "'> \
        " + task.content + " </div><hr/>\
        <button class='delete rounded btn-danger' data-id='" + task.id + "'>Delete</button>\
        <input type='checkbox' class='mark-complete ml-3'\
        data-id='" + task.id + "' "+ (task.completed ? 'checked' : '') + ">\
        </div>";
    }
    $("#tasks").html(htmlString);
  });
}

$(document).on('click', '.completed', function () {
  ifComplete();
});
      