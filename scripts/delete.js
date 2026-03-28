addEventListener("DOMContentLoaded", async function() {
    document.querySelector("#deleteBtn").addEventListener("click", deleteCourse)
    getAllCourses();
});

async function getAllCourses() {
    const response = await fetch("https://5d773eba-9e9c-400e-91b6-9f61a503955b-00-2tr6fvk65b0oz.janeway.replit.dev/api/courses/");
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
    const role = localStorage.getItem('role');
    if (role !== 'staff') {
        document.querySelector("#error").innerHTML = "Only staff can delete courses.";
        return;
    }

    const courseID = document.querySelector("#courseDropDown option:checked").value
    const response = await fetch("https://5d773eba-9e9c-400e-91b6-9f61a503955b-00-2tr6fvk65b0oz.janeway.replit.dev/api/courses/" + courseID, {
        method: "DELETE"
    });

    if (response.ok) {
        getAllCourses();
        alert("Course deleted");
    } else {
        document.querySelector("#error").innerHTML = "Cannot delete course";
    }
}
