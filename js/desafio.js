const Task = function(task, status){
    this.task = task;
    this.status = status;
}

var task_list = [];

task_list.push(new Task("Responder Bea no discord", "Nao concluida"));
task_list.push(new Task("Sofrer pelo Santa Cruz", "Concluida"));
task_list.push(new Task("Mudar algo no boilerplate (pela 1782683729 vez)", "Nao concluida"));

for(var i=0; i<task_list.length; i++){
    console.log(i+1, ".", task_list[i].task, "\n\t", "->Status:", task_list[i].status);
}