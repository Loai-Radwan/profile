

export function isNotEmpty(value){
    return value.trim() !== ''
}

export function isEmail(email){
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email)
}

export function isGreaterThan(value , number){
    return value.trim().length >= number
}