export const checkValidData = (name, email, password, isSignInForm) => {

    if (!isSignInForm) {
        const nameRegex = /^[A-Za-z ]+$/;
        if (!name || !nameRegex.test(name)) {
            return "Name should contain only letters and spaces";
        }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Invalid email format";
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
        return "Password must be at least 6 characters with letters and numbers";
    }

    return null;
};
