let textDisplay = document.querySelector(".container");
let dotInterval; // For controlling the dots animation
let messages = [
    "Initializing Hacking",
    "Reading Your Files",
    "Password Files Detected",
    "Sending All Passwords And Personal Files To Server",
    "Cleaning Up",
    "Hacking Completed"
];

// Function to start the dot animation for a given element
function startDotAnimation(element) {
    let dots = ""; // Tracks the dots added
    dotInterval = setInterval(() => {
        if (dots === "...") {
            dots = ""; // Reset dots after 3
        } else {
            dots += "."; // Add one more dot
        }
        element.innerText = element.innerText.split("...")[0] + dots; // Add dots without duplicating
    }, 400);
}

// Function to stop the dot animation
function stopDotAnimation() {
    clearInterval(dotInterval);
}

// Function to get a random interval (1 to 7 seconds)
function getInterval() {
    return Math.ceil(Math.random() * 7) * 1000;
}

// Function to display a message with dots animation
async function showMessage(message) {
    return new Promise((resolve) => {
        let randomInterval = getInterval();

        // Stop the animation for the previous message before starting the new one
        setTimeout(() => {
            // Stop dot animation before showing a new message
            stopDotAnimation();

            // Create a new element for the message
            let newElement = document.createElement("h3");
            newElement.className = "text";
            newElement.innerText = `>>>> ${message}`;

            // Append the message to the container
            textDisplay.appendChild(newElement);

            // Start the dot animation for the new message
            startDotAnimation(newElement);

            // Resolve the promise after the message is displayed
            resolve();
        }, randomInterval);
    });
}

// Main function to display messages sequentially
async function main() {
    for (let i = 0; i < messages.length; i++) {
        await showMessage(messages[i]); // Show each message
    }
    stopDotAnimation(); // Stop the animation after all messages
    console.log("All messages displayed.");
}

// Call the main function
main();
