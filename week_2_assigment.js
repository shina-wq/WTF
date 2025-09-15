// Daily Tasks Manager

// 1. Array of tasks
let tasks = ["study", "exercise", "read"];

// 2. Function declaration: add a task
function addTask(taskList, task) {
  taskList.push(task);
}

// 3. Function expression: check if all tasks are done
const allDone = function(doneTasks, totalTasks) {
  return doneTasks >= totalTasks; // logical operator
};

// 4. Add more tasks
addTask(tasks, "code");
addTask(tasks, "cook");

// 5. For loop: show tasks
for (let i = 0; i < tasks.length; i++) {
  console.log("Task " + (i + 1) + ": " + tasks[i]);
}

// 6. While loop: simulate finishing tasks
let finished = 0;
while (!allDone(finished, tasks.length)) {
  console.log("Finished task number", finished + 1);
  finished++;
}

// 7. Object with day info
let dayInfo = {
  day: "Monday",
  mood: "productive"
};

console.log("Keys:", Object.keys(dayInfo));
console.log("Values:", Object.values(dayInfo));
console.log("Entries:", Object.entries(dayInfo));

// 8. Type conversion example
let hours = "5"; // string
let totalHours = Number(hours) + 2;
console.log("Total hours worked:", totalHours);
