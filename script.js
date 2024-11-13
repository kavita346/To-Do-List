function addTask(){
    var taskInput=document.getElementById("new-task")
    var taskList=document.getElementById("task-list")
    // now i check condition
    if(taskInput.value===""){
        alert("Please enter the task")
        return
    }
    // create element li, div , complete, delete
    var listItem=document.createElement('li')
    // whatever i type in listitem its put and sat listitem
    listItem.innerText=taskInput.value

    var buttonConatiner=document.createElement('div')
    //because already i have div element , thats why we differntiate this div element using classname
    buttonConatiner.className='task-button'

    //this button display as delete
    var deleteButton=document.createElement('button')
    //the button i will give one containt
    deleteButton.innerText='Delete'
    //this is function expression
    deleteButton.onclick=function(){
        taskList.removeChild(listItem)
    }

    //this button display as complete
    var completeButton=document.createElement('button')
    //the button i will give one containt
    completeButton.innerText='Complete'
    completeButton.onclick=function(){
        listItem.classList.toggle('complete')
    }

    buttonConatiner.appendChild(deleteButton)
    buttonConatiner.appendChild(completeButton)
    //both button container will append
    listItem.append(buttonConatiner)
    taskList.append(listItem)

    taskInput.value=""
}
