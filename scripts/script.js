
addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('http://localhost:3001/api/courses')
    const courses =await response.json()

    let html = ''
    for (let course of courses) {
        let courseID = course._id
        html+= `<li>${course.name} - ${course.description} - <a href='information.html?id=${courseID}'>Course Information</a> - <a href='edit.html?id=${courseID}'>Edit Course</a> - <a href='delete.html?id=${courseID}'>Delete Course</a></li>`
    }
    document.querySelector('#all_course').innerHTML = html
})
