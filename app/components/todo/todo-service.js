function TodoService() {
	// A local copy of your todos
	var todoList = []
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
			.then(function (todoListRes) { // <-- WHY IS THIS IMPORTANT????
				todoList = todoListRes
				cb(todoListRes)
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

	this.toggleTodoStatus = function (todoId, getTodos) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList
		var updateTodo = ""
		for (var i = 0; i < todoList.length; i++) {
			var todo = todoList[i];
			// console.log(todoList)
			// console.log("todo",todo, "todoID",todoId)
			if (todo.id === todoId) {
				updateTodo = todo

			}
		}
		console.log(updateTodo,'updateTodo')
		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		if (updateTodo.completed == "false") {
			updateTodo.completed = "true"
		} else {
			updateTodo.completed = "false"
		}
		//todoList = updateTodo.completed
		console.log(updateTodo,'changed boolean')
		console.log(todoList,'todoList')


		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + todoId,
			data: updateTodo.completed
		})
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				getTodos(res)
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


