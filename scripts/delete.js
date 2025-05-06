addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#deleteBtn").addEventListener("click", deleteCourse)
    getAllCourses();
});


async function getAllCourses() {
    const response = await fetch("https://skillful-common-laugh.glitch.me/api/courses/");
    if (response.ok) {

        const courses = await response.json()
        let html = ""
        for (let course of courses) {
            html += `<option value="${course._id}">${course.name}</option>`
        }

        document.querySelector("#courseDropDown").innerHTML = html
    }
}

async function deleteCourse() {
    // Get the course ID of the selected course
    const courseID = document.querySelector("#courseDropDown option:checked").value
    const response = await fetch("https://skillful-common-laugh.glitch.me/api/courses/"+ courseID, {
        method: "DELETE"
    });

    if (response.ok) {
       // Successfully deleted course
        getAllCourses();
        alert("course deleted")
    }
    else {
        document.querySelector("#error").innerHTML = "Cannot delete course";
    }
}
