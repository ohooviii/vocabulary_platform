document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");

    const grid = document.createElement("div");
    grid.className = "grid";

    // Placeholder data
    const placeholderData = [
        ["Word", "Example Sentence", "English Meaning", "Korean Meaning"],
        ["example", "This is an example.", "A representative form", "예"],
    ];

    // Generate grid cells
    placeholderData.forEach((row) => {
        row.forEach((cell) => {
            const cellElement = document.createElement("div");
            cellElement.className = "cell";
            cellElement.textContent = cell;
            grid.appendChild(cellElement);
        });
    });

    app.appendChild(grid);
});
