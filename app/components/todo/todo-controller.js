function TodoController() {
	var todoListElem = document.getElementById('todo')
	var todoFormElem = document.getElementById('form')
	var todoService = new TodoService()
	var form = ''
	// Use this getTodos function as your callback for all other edits

	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}

	this.createTodo = function CreatTodo() {
		
		form = `
		<div>
		<form onsubmit="app.controllers.todoController.addTodoFromForm(event)">
		<lable for="task">Add to list</lable>
		<input type="text" name="task" required>
		<button type="submit">Add Task</button>
		</form>
		</div>`
		todoFormElem.innerHTML = form
	}

	function draw(todoList) {
		console.log('im here at to do')
		var template = ''

		if (todoList.length <= 0) {
			todoListElem.innerHTML = `<h4>No tasks</h4><button onclick="app.controllers.todoController.createTodo()">Add Task</button>`
			console.log('no tasks')
			return
		}
		for (let i = 0; i < todoList.length; i++) {
			const todo = todoList[i];
			template += `
			<div class="taskCard">
			<input id="delete" type="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX/////AAD/39//9/f/5ub/nJz/+/v/mZn/y8v/bGz/8PD/4uL/ior/enr/Skr/MzP/wsL/Cwv/1NT/ubn/Fhb/paX/PT3/QUH/rKz/Hx//dnb/b2//xsb/RUX/WFj/UFD/fn7/Njb/1tb/kpL/ZWX/VFT/lJT/JCT/srL/Ghr/jY3rE3xdAAAEXElEQVR4nO3b6VbbMBAFYBQHE5ywOCxlTQKlLH3/B+xxIUSONbKWsUfi3O9vWzGiZDySLwcHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALmplsu5dA1DurpVjUUlXchA5m9q61y6lkGcK82FdDUDOFItU+l62N23N6hWQnVU75u7zTt/Iyiu1T6RblNuv9H3zAvP684GRT6JE+3rLzkXPu/uT6kjzq/gpmoVcMO38JFpgxI7XLcrOOFa99i4Qc5voaPlfgmnBceyxS/zBtWEY3Uvm04NNUMRc2J/6ix+bV9nhjKi+52xx/w346jZj7GORdyah+QGNxwle7o0VrIqI5YkeoxibGM+VuZa3oIHSLLHKHXFWbizK6qch7D1JtR6Ip/BRkEWdBiyHN1jLsWOFTdkTcf+i5nnmMZpzCc70h1Z1ZnvQWD/rLQj0mO+Lci6/CZxw1lpS6bH7FzQW/QYIyeGs9IXoR6jF0dv0fnHK8UeoylOyfoe3SbxNHuM7oSssHa5y6V7zN3gpbuinxr9k3jCPUbXOSnu9EzipvuYL4GT0UCqJ7JQ6ySeeI9peSFrvaVrpc9KqfQYHV0t+fOW2Fmp1wO9ReMkntxZqd/0lizZMIlbeoz8HEMizsTKMInTPeYjuR6js0ziz62/SM8xjwn2GJ3jJJ5bj9G5TOJlHnMMpX8ST+8+xpdlEm/uxHPtMTrrJJ7+WcmFZRJ/JP8k/R6jq0zvNOxy6DEt9PPALJMeo7NM4l11Nj1GZ5nE960z6jG66YfjBtO5j/FGT+K67HqMzjKJf8uwx+gsk/infOYYiuXCvpHTHEOxTOIyL+f5lZYdZv8j2pibAw1ffkAulj4rfYpMp8ijz0pbUsFYJi7zt+VOPHmWO9+WtN7BeCAzeB1B6RR5fT1G9yJdbAiv86F6yu+XYnzP+Lw58eG59hjd+CHnCJY733f6WJzRZZv13XVB3yfy5MRH0HfnS9+JC4TVQ/Rn8GLSKfKc8jGWO/G/grU7cczgWe7EE5/E3fMx9PMyPCc+Ap/3SgHpFHl+GTzfdIo87wze9I38B0lO4gEZvJK+E09wEg/L4HHlxEcQmsHjyYmPIDwfY3mAJjSJR2Xw4nPiw4vN4PWkU+TF52MSn8Q5MnhJT+I8GbyCnsTXg5XuhC+DR3+nLiUf/pwZPPqJWsu9ReXN4NGTeMBvM/LgzuDROXGhh8YAOV9qEhd5yTjM7xIQk/g1X93OKnMpjah8DDGJc5XtgXx+xWbwjO255inax29qg/EZvNJwJy7w1Kc2yJLB607i49/bzIgNMmXwOpP4+FMNMX+wZfD2JvFXrnXdvZr2x5nBa92J/+Fb15np/5A5g7f7MIrkaw2fQ/ZLldnngLMSip92NjhEzrd8nj2LHSv2n4eZ53xNWjNN/jlfg0q7X/sJOV+D8vvwJPC0Gslkca3q9WF6r1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIG//ANvMK+ZxKp0kAAAAAElFTkSuQmCC" width="30" height="30" onclick="app.controllers.todoController.removeTodo('${todo.id}')">
			<input id="checkbox" type="checkbox" onclick="app.controllers.todoController.ToggleTodoStatus()">
			<p>${todo.task} </p>
			
			</div>
			`
		}

		
		todoListElem.innerHTML = template
		todoFormElem.innerHTML = form
	}

	this.getTodos = function getTodos() {
		`
			<p>Tasks</p>
			<h5>To do List:</h5>
			
			`
	}
	this.addTodoFromForm = function addTodoFromForm(event) {
		event.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = event.target
		console.log(form)
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(form, getTodos)
		form.reset()
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT

	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		console.log(todoId)
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	getTodos()

	this.getTodosToggle = function getTodosToggle() {

		var list = document.getElementById('todo')
		if (list.style.display === "none") {
			list.style.display = "block";
		} else {
			list.style.display = "none";

		}

		//FYI DONT EDIT ME :)

		todoService.getTodos(draw)

	}
}