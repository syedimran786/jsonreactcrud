let validateForm = (formValues) => {

    let errors = {};

    let fullnameRegex = /^[a-zA-Z]+$/g;
    let mobileRegex = /^[6-9][0-9]{9}$/

    //! Fullname
    if (formValues.fullname === "") {
        errors.fullname = "Fullname Is Mandatory"
    }
    else if (formValues.fullname.length < 6) {
        errors.fullname = "Fullname Should Contain Atleast 6 Characters"
    }
    else if (!fullnameRegex.test(formValues.fullname)) {
        errors.fullname = "Fullname Should Contain Only Alphabets"
    }

    //! Password
    if (formValues.password === "") {
        errors.password = "Password Is Mandatory"
    }
    else if (formValues.password.length < 6) {
        errors.password = "Password Should Contain Atleast 8 Characters"
    }

    //! mobile

    if (formValues.mobile === "") {
        errors.mobile = "Mobile Is Mandatory"
    }
    else if (!mobileRegex.test(formValues.mobile)) {
        errors.mobile = "Invalid Mobile Number"
    }
    return errors
}

export { validateForm }