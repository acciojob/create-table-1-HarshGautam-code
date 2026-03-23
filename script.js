

	function insert_Row() {
    // get table
    let table = document.getElementById("sampleTable");

    // insert new row at top (index 0)
    let newRow = table.insertRow(0);

    // create two cells
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // add text
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}
  
