
// Signup
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', e => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // sign up user
    auth.createUserWithEmailAndPassword(email, password).then( credentials => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    });
});

// Login
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    // get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;
    
    // sign in user
    auth.signInWithEmailAndPassword(email, password).then( credentials => {
        console.log(credentials.user);
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});

// Logout
const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();

    // sign out user
    auth.signOut().then( () => {
        console.log("logged out");
    });
});



