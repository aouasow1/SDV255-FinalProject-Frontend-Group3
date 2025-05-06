addEventListener("DOMContentLoaded", async function() {
    document.querySelector('#editBtn').addEventListener('click', editCourse)
    const urlparam = new URLSearchParams(window.location.search)
    const courseID = urlparam.get('id')

    const response= await fetch("https://skillful-common-laugh.glitch.me/api/courses/" + courseID)

    if (response.ok) {
        let course = await response.json()
        document.querySelector('#courseId').value = course._id
        document.querySelector('#name').value = course.name
        document.querySelector('#description').value = course.description
        document.querySelector('#subject').value = course.subjectArea
        document.querySelector('#credit').value = course.credits

    }

})

async function editCourse() {
    //create couses object from form field
    const courseID = document.querySelector('#courseId').value
    const course = {
        _id: document.querySelector('#courseId').value,
        name: document.querySelector('#name').value,
        description: document.querySelector('#description').value,
        subjectArea: document.querySelector('#subject').value,
        credits: document.querySelector('#credit').value,
    }

    const response= await fetch("https://skillful-common-laugh.glitch.me/api/courses/" + courseID, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    })

    if (response.ok) {
        alert('Course Edited')
    }
    else {
        document.querySelector('#error').innerHTML = 'Cannot Edit Course'
    }
}
