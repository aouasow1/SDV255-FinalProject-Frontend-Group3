
addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('https://skillful-common-laugh.glitch.me/api/courses')
    const courses =await response.json()

    let html = ''
    for (let course of courses) {
        let courseID = course._id
        html+= `
        <tr>
            <td>${course.name}</td>
            <td>${course.description}</td>
            <td>${course.subjectArea}</td>
            <td>${course.credits}</td>
            <td>${course.username}</td>
            <td>
                <a href='information.html?id=${courseID}'>Course Information</a> |
                <a href='edit.html?id=${courseID}'>Course Edit</a>
                <a href='delete.html?id=${courseID}'>Delete Course</a>
            </td>
        </tr>
        
        `
    }
    document.querySelector('#all_course').innerHTML = html
})
