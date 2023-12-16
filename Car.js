// his part of the code finds the HTML element with the ID 'carForm'.
document.getElementById('carForm').addEventListener('submit', function(event) {
//This line adds an event listener to the selected form element. The event listener is triggered when the form is submitted.
    event.preventDefault(); // This will prevent from refreshing 

    const carName = document.getElementById('carName').value;
      const carModel = document.getElementById('carModel').value;
      const carPrice = document.getElementById('carPrice').value;

      // Create a new row in the table
      const tableBody = document.getElementById('carTableBody');
      const newRow = tableBody.insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);

      // Set cell values
      cell1.textContent = carName;
      cell2.textContent = carModel;
      cell3.textContent = carPrice;

      // Clear form fields after adding the car
      document.getElementById('carForm').reset();
    });
 
