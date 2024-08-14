//index.js
let ToDoList =
{
      TaskList :[],
      SaveTask :() =>
         {
            let taskName =document.getElementById("txtTaskName");
            let periority =document.getElementById("ddlperiority");
            let reminderDate =document.getElementById("txtDate");
            let description =document.getElementById("txtDescription");
               let Task={
                     TaskName :taskName.value,
                     Periority :periority.value,
                     ReminderDate :reminderDate.value,
                     description:description.value

               };
              ToDoList.TaskList.push(Task);
              console.log( ToDoList.TaskList);
               ToDoList.SaveInStorage();
              ToDoList.ShowTasks();
         },

         ShowTasks :() =>
            {
               let savedArray = JSON.parse( localStorage.getItem("Tasks"));
               let Container =document.getElementById("TaskContainer");
               Container.innerHTML="";

               savedArray.forEach(function(task,index) 
               {
                  Container.innerHTML += "<div class='law'>" +
            "<div style='width: 28%; float: left;'>" + task.TaskName + "</div>" +
            "<div style='width: 22%; float: left;'>" + task.Periority + "</div>" +
            "<div style='width: 20%; float: left;'>" + task.ReminderDate + "</div>" +
            "<div style='width: 30%; float: left;'>" + task.description + "</div>" +
            "</div>";
               });

         
               
            },

            SaveInStorage:() =>
               {
                  localStorage.setItem("Tasks", JSON.stringify(ToDoList.TaskList));
               }
           
}