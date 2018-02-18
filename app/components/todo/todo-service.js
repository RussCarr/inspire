function TodoService() {
	// A local copy of your todos
	//var todoList = []
	var baseUrl = 'https://inspire-server.herokuapp.com/api/russcarr/'

	function Todos(formData) {
		this.task = formData.task.value
		this.completed = false

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
			var completed = "" 
			var todo = todoId.find(completed)
			todo.completed = !todo.completed
			//STEP 3: Here is that weird Ajax request because $.put doesn't exist
			$.ajax({
				method: 'PUT',
				contentType: 'application/json',
				url: baseUrl + todoId,
				data: JSON.stringify(todo)
			})
				.then(function (res) {
					getTodos(todo)
				})
				.fail(logError)
	}

	this.removeTodo = function (todoId, getTodos) {
		
		$.ajax({
			url: baseUrl + todoId,
			method: 'DELETE'
		})
			.then(function (res) {
				getTodos(res)
			})
	}


}


