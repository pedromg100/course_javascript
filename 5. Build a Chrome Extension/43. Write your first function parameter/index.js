const welcomeEl = document.getElementById("welcome-el")

// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting = "Hello", user = "User") {
    welcomeEl.textContent = `${greeting}, ${user} !`    
}

greetUser(undefined, "123")