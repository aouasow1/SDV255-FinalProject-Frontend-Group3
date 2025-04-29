addEventListener('DOMContentLoaded', function() {
    document.querySelector("#addBtn").addEventListener("click", addCourse)
})

//add the course to the database, it has to be async function because we are calling data outside our server
async function addCourse() {
    //create a course base on the form that the users fill out

    const course = {
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        subjectArea: document.querySelector("#subject").value,
        credits: document.querySelector("#credit").value
    }

    const response = await fetch("http://localhost:3001/api/courses", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },

        body: JSON.stringify(course)
    })

    if (response.ok) {
        const results = await response.json()
        alert("Added course with ID of" + results._id)
        //reset the form after course is successful added

        document.querySelector("form").reset()

    }
    else {
        document.querySelector("#error").innerHTML = "Cannot send course"
    }
}
