let age = 10;
let is18;
let score = 0;
let username = '';
let isAdmin = false;

for (i = 1; i<=age; i++) {
    console.log(i)
}

if (age >= 18) {
    is18 = true;
} else {
    is18 = false;
}
console.log(is18)

if (score !== 0) {
    console.log("Score is available");
} else if (score === 0) {
    console.log("Score is NOT available");
}

if (score == true) {
    console.log("Score is truthy");
} else if (score == false) {
    console.log("Score is evaluated as falsy")
}

if (username != 0) {
    console.log("Username is available");
} else if (username == 0) {
    console.log("Username is evaluated as falsy");
}

if (isAdmin) {
    console.log("isAdmin is evaluated as truthy");
} else if (!isAdmin) {
    console.log("isAdmin is false");
}

