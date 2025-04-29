addEventListener("DOMContentLoaded", async function() {
    const urlParam = new URLSearchParams(window.location.search)
    const courseID = urlParam.get('id')
    console.log(courseID)

    const response = await fetch("http://localhost:3001/api/courses/" + courseID)
    const course = await response.json()
    console.log(course)

    let heading = ''
    heading+= `${course.name}`
    document.querySelector('h1').innerHTML = heading

    let html = ''
    html+= `
        <h3>description - ${course.description} </h3>
        <p>subjectArea - ${course.subjectArea} </p>
        <p>credits - ${course.credits} </p>
    
    `
    document.querySelector('div').innerHTML = html
})
