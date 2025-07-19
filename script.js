let grid = document.querySelector(".grid")

function makeGrid(squares)
{
    for (let i = 0; i < squares; i++)
    {
        let column = document.createElement("div")
        column.classList.add("column")
        for (let j = 1; j <= squares; j++)
        {
            let row = document.createElement("div")
            row.classList.add("row")
            row.style.border = "2px solid black"
            column.appendChild(row)
        }
        grid.appendChild(column)
    }
}

function colorCell()
{
    let squares = document.querySelectorAll(".grid .column .row")
    squares.forEach(square => 
    {
        square.addEventListener("mouseover", () => 
        {
            square.classList.add("colored");
        });
    });
}

makeGrid(16)
colorCell()

function deleteGrid()
{
    grid.innerHTML = ""
}

//deleteGrid()

function newGrid()
{
    squareNumber = prompt("Enter new grid size (number of squares per side, must be less than 100): ")
    return squareNumber

}

let newGridButton = document.querySelector(".newGrid")

newGridButton.addEventListener("click", function()
{
    let cells = prompt("Enter new grid size (number of squares per side, must be less than 100): ")
    let numberOfCells = parseInt(cells)
    while (numberOfCells > 100)
    {
        cells = prompt("Enter new grid size (number of squares per side, must be less than 100): ")
        numberOfCells = parseInt(cells)
    }
    deleteGrid()
    makeGrid(numberOfCells)
    colorCell()
})