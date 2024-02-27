function generateTree(height) {
    // Loop through each level
    for (let i = 1; i <= height; i++) {
        // Create spaces before '*' to center the tree
        let spaces = ' '.repeat(height - i);

        // Create '*' for each level
        let stars = '*'.repeat(2 * i - 1);

        // Combine spaces and '*' and print the line
        console.log(spaces + stars);
    }
}

// Example usage with height 5
generateTree(6);
