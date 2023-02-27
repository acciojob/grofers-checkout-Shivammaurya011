const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    var table = document.querySelector('tbody');
    let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
        return total + parseFloat(row.cells[1].innerHTML);
      }, 0);
    console.log(subTotal)
  document.getElementById('tp').innerText = `Total Price: ${subTotal}`;

};

getSumBtn.addEventListener("click", getSum);

