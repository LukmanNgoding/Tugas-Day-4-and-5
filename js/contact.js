function submitData() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    // console.log(name, email, phone, subject, message)

    // let emailRecoiver = "allukman.lukman99@gmail.com"

    if (name == "") {
        return alert('nama harap diisi')
    } else if (email == "") {
        return alert('email harap diisi')
    } else if (phone == "") {
        return alert('phone harap diisi')
    } else if (subject == "") {
        return alert('subject harap diisi')
    } else if (message == "") {
        return alert('message harap diisi')
    }

    let link = document.createElement('a')
    link.href = `mailto:${email}?subject=${subject}&body= Hallo nama saya ${name}, ${message}, silahkan hubungi saya di nomor${phone}`
    link.click()

    let dataStudent = {
        name,
        email,
        phone,
        subject,
        message
    }
    console.log(dataStudent)
}