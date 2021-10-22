
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
  
var postTask = function (successCB, errorCB) {
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
    url: 'api/tasks/' + id + '?api_key=1',
    success: function (response, textStatus) {
      console.log(response, textStatus);
      indexTasks();
    },
    error: function (request, textStatus, errorMessage) {
      console.log(request, textStatus, errorMessage);
    }
  };
  $.ajax(request);
}  

var mark_complete = function(id) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + id + '/mark_complete?api_key=1',
    success: function (response, textStatus) {
      console.log(response, textStatus);
      indexTasks();
    },
    error: function (request, textStatus, errorMessage) {
      console.log(request, textStatus, errorMessage);
    }
  };
  $.ajax(request);
}

var mark_active = function(id) {
  var request = {
    type: 'PUT',
    url: 'api/tasks/' + id + '/mark_active?api_key=1',
    success: function (response, textStatus) {
      console.log(response, textStatus);
      indexTasks();
    },
    error: function (request, textStatus, errorMessage) {
      console.log(request, textStatus, errorMessage);
    }
  };
  $.ajax(request);
}


