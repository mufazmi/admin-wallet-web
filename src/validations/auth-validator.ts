import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    mobile: yup.string().min(10, "You must enter a valid mobile").max(10, "Mobile number could not be greater than 10 digit").required("You must enter mobile"),
    password: yup.string().min(4, "Password could not be less than 4 character").max(50, "Password is too large").required("Please enter your password")
})