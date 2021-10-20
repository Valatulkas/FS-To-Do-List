$(document).on("turbolinks:load", function () {
    if ($('.static_pages.index').length > 0) {
      indexTasks(function (response) {
        var htmlString = response.tasks.map(function(task) {
          $('#new-task-content').empty();
          return "<div class='col-12 my-3 p-2 border rounded text-center'>\
            <div class='task' data-id='" + task.id + "'> \
            " + task.content + " </div>\
            <button class='delete rounded' data-id='" + task.id + "'>Delete</button>\
            <input type='checkbox' class='mark-complete ml-3'\
            data-id='" + task.id + "' '+ (task.completed ? 'checked' : '') + >\
            </div>";
        });
        $("#tasks").html(htmlString);
      });
    }
  });

$(document).on('#create-task').submit(function (event) {
  event.preventDefault();
  postTask(function () {
    $('#new-task-content').empty();
    return "<div class='col-12 mb-3 p-2 border rounded task' data-id='"
     + task.id + "'> \
    " + content + "\
      </div>";
  })
});

$(document).on('click', '.delete', function () {
  deleteTask($(this).data('id'), indexTasks);
});

$(document).on('change', '.mark-complete', function () {
  if (this.checked) {
    markComplete($(this).data('id'));
  } else {
    markActive($(this).data('id'));
  }
})

      /*
        var all = document.getElementById('all');
        var active = document.getElementById('active');
        var complete = document.getElementById('complete');
        
        all.onclick = function () {
          $('#new-task-content').empty();
          response.tasks.forEach(function (task) {
            
          })
        };

        active.onclick = function () {
          $('#new-task-content').empty();
          response.tasks.forEach(function (task) {
            if (task.completed == false) {
              
            }
          })
        };

        complete.onclick = function () {
          $('#new-task-content').empty();
          response.tasks.forEach(function (task) {
            if (task.completed) {
              
            }
          })
        };
      */