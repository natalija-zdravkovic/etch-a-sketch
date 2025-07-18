function makeGrid(squares)
{
    let grid = document.querySelector(".grid")
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

makeGrid(16)

let squares = document.querySelectorAll(".grid .column .row");

squares.forEach(square => 
    {
        square.addEventListener("mouseover", () => 
        {
            square.classList.add("colored");
        });
    });

