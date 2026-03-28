addEventListener('DOMContentLoaded', function() {
    document.querySelector("#addBtn").addEventListener("click", addCourse)
})

// Add course only if role is staff
async function addCourse() {
    const role = localStorage.getItem('role');
    if (role !== 'staff') {
        document.querySelector("#error").innerHTML = "Only staff can add courses.";
        return;
    }

    const course = {
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        subjectArea: document.querySelector("#subject").value,
        credits: document.querySelector("#credit").value,
        username: localStorage.getItem('uname'),
        role: role
    }

    const response = await fetch("https://5d773eba-9e9c-400e-91b6-9f61a503955b-00-2tr6fvk65b0oz.janeway.replit.dev/api/courses", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(course)
    })

    if (response.ok) {
        const results = await response.json()
        alert("Added course with ID of " + results._id)
        document.querySelector("form").reset()
    } else {
        document.querySelector("#error").innerHTML = "Cannot send course";
    }
}
