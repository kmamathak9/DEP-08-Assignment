const tasks = [   { taskName: "Write report", completed: true, priority: 2 },   { taskName: "Attend meeting", completed: false, priority: 3 },   { taskName: "Fix bug", completed: false, priority: 1 },   { taskName: "Update website", completed: true, priority: 4 } ];
//finding the highest task

const highestPriority=tasks.find(task=>task.priority>3);
console.log(highestPriority);

//Finding the index
const taskNotCompleted=tasks.findIndex(task=>!task.completed);
console.log(`Not completed task index: ${taskNotCompleted}`);

//counting number of tasks completed
const statusTask=tasks.reduce((count,task)=>{
    return task.completed?count+1:count;
},0);
console.log(`Number of task completed: ${statusTask}`);


//printing all the task
tasks.forEach((task)=>{
    console.log(`TaskName: ${task.taskName}`);
})