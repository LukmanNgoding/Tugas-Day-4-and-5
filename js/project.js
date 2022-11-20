let data = [];

function addData(event) {
    event.preventDefault();
    let projectName = document.getElementById("projectName").value
    let startDate = new Date(document.getElementById("startDate").value)
    let endDate = new Date(document.getElementById("endDate").value)
    let description = document.getElementById("description").value
    let imageInput = document.getElementById("image").files

    if (projectName == "") {
        return alert("Project Name Harus di isi!");
    } else if (isNaN(startDate)) {
        return alert("Start Date Harus di isi!");
    } else if (isNaN(endDate)) {
        return alert("End Date Harus di isi!");
    } else if (description == "") {
        return alert("Description Harus di isi!");
    } else if (imageInput.length == 0) {
        return alert("Image Harus di isi!");
    }

    // IMAGE
    image = URL.createObjectURL(imageInput[0])


    // CHECKBOX
    let technologies = [];
    let inputTechnologies =
        document.getElementsByClassName("technologies_input")
    for (let x = 0; x < inputTechnologies.length; x++) {
        if (inputTechnologies[x].checked) {

            let techIconHTML = `<span class="icon-list">
            <img src="img/${inputTechnologies[x].value}.svg" alt="Icon"/>
            </span>`;
            technologies.push(techIconHTML)
        }
    }

    let itemProject = {
        projectName,
        startDate,
        endDate,
        technologies,
        description,
        image,
    }

    data.push(itemProject)
    myProject()
}

function myProject() {
    document.getElementById("project").innerHTML = "";

    for (let x = 0; x < data.length; x++) {
        document.getElementById("project").innerHTML +=
            `<div class="container-project" id="project">
                <div class="cards">
                    <div href="">
                        <div class="card">
                            <img src="${data[x].image}" alt="Image" class="img">
                            <h3 class="title"><a href="projectDetail.html">${data[x].projectName}</a></h3>
                            <span class="duration">
                                ${dateProject(
                data[x].endDate,
                data[x].startDate)}
                            </span>
                            <p class="description">${data[x].description}</p>
                            <div class="technologies">
                                ${data[x].technologies.join(" ")}
                            </div>
                            <div class="action">
                                <a class="btn edit" href="#!" class="btn">Edit</a>
                                <a class="btn delete" href="#!" class="btn">Delete</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    }
}



function dateProject(endDate, startDate) {
    let distance = endDate - startDate;

    let distanceMonth = Math.floor(distance / 1000 / 60 / 60 / 24 / 30)
    let distanceDay = Math.floor(distance / 1000 / 60 / 60 / 24)

    if (distanceMonth > 0) {
        if (distanceDay % 30 >= 1) {
            return `${distanceMonth} month ${distanceDay % 30} days`
        }
        return `${distanceMonth} month`
    } else if (distanceDay > 0) {
        return `${distanceDay} days`
    } else {
        return `0 days`
    }
}