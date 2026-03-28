addEventListener("DOMContentLoaded", async function() {
    const urlParam = new URLSearchParams(window.location.search)
    const courseID = urlParam.get('id')
    console.log(courseID)

    const response = await fetch("https://5d773eba-9e9c-400e-91b6-9f61a503955b-00-2tr6fvk65b0oz.janeway.replit.dev/api/courses/" + courseID)
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
