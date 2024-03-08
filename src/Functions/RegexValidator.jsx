//emailRegex = /^[^\s@]+@[^\s@]+$/;
// passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const emailValidator=(i)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+$/;
    return emailRegex.test(i)
}

export const passWordValidator=(j)=>{
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
return passwordRegex.test(j)
}