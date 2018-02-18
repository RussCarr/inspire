function TodoService() {
	// A local copy of your todos
	//var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/russcarr/'

	function Todos(formData) {
		this.task = formData.task.value
		this.complete = false
		

	}


	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function (cb) {
		console.log('getting todos')
		$.get(baseUrl)
			.then(function (todoList) { // <-- WHY IS THIS IMPORTANT????
				cb(todoList)
				console.log(todoList, 'reporting todo')
			})
			.fail(logError)
	}

	this.addTodo = function (formData, getTodos) {
		var todo = new Todos(formData)
		console.log(todo)
		$.post(baseUrl, todo)
			.then(function (todoList) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				getTodos(todo)

			})
			.fail(logError)
	}

	this.toggleTodoStatus = function (todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		if (todoId == active)
			//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

			//STEP 3: Here is that weird Ajax request because $.put doesn't exist
			$.ajax({
				method: 'PUT',
				contentType: 'application/json',
				url: baseUrl + todoId,
				data: JSON.stringify(YOURTODOVARIABLEHERE)
			})
				.then(function (res) {
					//DO YOU WANT TO DO ANYTHING WITH THIS?
				})
				.fail(logError)
	}

	this.removeTodo = function (todoId, getTodos) {
		console.log(todoId)
		$.ajax({
			url: baseUrl + todoId,
			method: 'DELETE'
		})
			.then(function (res) {
				getTodos(res)
			})
	}


}


