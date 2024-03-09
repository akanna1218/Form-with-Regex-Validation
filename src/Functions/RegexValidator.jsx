//emailRegex = /^[^\s@]+@[^\s@]+$/;
// The above Regex format will check the  given input is in email format.


export const emailValidator=(i)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(i)
}



export const passWordValidator=(j)=>{
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
return passwordRegex.test(j)
}


// passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
// The above Regex format will check the  given password has a capital and a small letter , a special character , a number and minimum length of 8.
