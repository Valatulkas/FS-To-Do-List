$.ajaxSetup({
    headers: {
      'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});
  
var indexTasks = function (successCB, errorCB) {
    var request = {
      type: 'GET',
      url: 'api/tasks?api_key=1',
      success: successCB,
      error: errorCB
    }
  
    $.ajax(request);
};
  
var postTask = function (content, successCB, errorCB) {
    var request = {
      type: 'POST',
      url: 'api/tasks?api_key=1',
      data: {
        task: {
          content: $('#new-task-content').val()
        }
      },
      success: successCB,
      error: errorCB
    }
  
    $.ajax(request);
};

var deleteTask = function (id) {
  var request = {
    type: 'DELETE',
    url: 'api/tasks/:' + id + '?api_key=1',
    success: function (response, textStatus) {
      indexTasks();
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  };
  $.ajax(request);
}  

var markComplete = function(id) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/:' + id + '/mark_complete?api_key=1',
    success: function (response, textStatus) {
      indexTasks();
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  };
  $.ajax(request);
}

var markActive = function(id) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/:' + id + '/mark_active?api_key=1',
    success: function (response, textStatus) {
      indexTasks();
    },
    error: function (request, textStatus, errorMessage) {
      console.log(errorMessage);
    }
  };
  $.ajax(request);
}



