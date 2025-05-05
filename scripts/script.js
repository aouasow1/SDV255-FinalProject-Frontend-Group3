
addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('http://localhost:3001/api/courses')
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
            <td>
                <a href='information.html?id=${courseID}'>Course Information</a> |
                <a href='edit.html?id=${courseID}'>Course Edit</a>
            </td>
        </tr>
        
        `
    }
    document.querySelector('#all_course').innerHTML = html
})
