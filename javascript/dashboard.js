const transactions = [
  {
    date: "2024-10-07",
    description: "Payment Received",
    amount: "$200.00",
  },
  {
    date: "2024-10-06",
    description: "Payment Sent",
    amount: "-$150.00",
  },
  {
    date: "2024-10-05",
    description: "Subscription Fee",
    amount: "-$50.00",
  },
  {
    date: "2024-10-04",
    description: "Gift Received",
    amount: "$100.00",
  },
  {
    date: "2024-10-03",
    description: "Invoice Payment",
    amount: "-$300.00",
  },
  {
    date: "2024-10-02",
    description: "Refund Issued",
    amount: "-$75.00",
  },
  {
    date: "2024-10-01",
    description: "Consultation Fee",
    amount: "$400.00",
  },
  {
    date: "2024-09-30",
    description: "Payment Received",
    amount: "$250.00",
  },
  {
    date: "2024-09-29",
    description: "Service Charge",
    amount: "-$80.00",
  },
  {
    date: "2024-09-28",
    description: "Gift Received",
    amount: "$150.00",
  },
  {
    date: "2024-09-27",
    description: "Payment Sent",
    amount: "-$200.00",
  },
];

let currentPage = 1;
const rowsPerPage = 5;
const totalPages = Math.ceil(transactions.length / rowsPerPage);

function displayTransactions(page) {
  const start = (page - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const paginatedItems = transactions.slice(start, end);

  const tableBody = document.getElementById("transaction-table");
  tableBody.innerHTML = "";

  paginatedItems.forEach((transaction) => {
    const amountValue = parseFloat(transaction.amount.replace(/[$,]/g, ""));

    // Adding amount-negative class if the amount is negative
    const amountClass = amountValue < 0 ? "amount-negative" : "";

    const row = `<tr>
<td data-label="Date">${transaction.date}</td>
<td data-label="Description">${transaction.description}</td>
<td class="${amountClass}" data-label="Amount">${transaction.amount}</td>
</tr>`;
    tableBody.innerHTML += row;
  });

  updatePagination();
}
function updatePagination() {
  document
    .getElementById("prev-page")
    .classList.toggle("hidden", currentPage === 1);
  document
    .getElementById("next-page")
    .classList.toggle("hidden", currentPage === totalPages);

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.getElementById(`page-${i}`);
    if (pageItem) {
      pageItem.classList.toggle("active", i === currentPage);
    }
  }
}

document.querySelectorAll(".page-item a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetPage =
      parseInt(this.textContent) ||
      (this.parentElement.id === "next-page"
        ? currentPage + 1
        : currentPage - 1);
    if (targetPage >= 1 && targetPage <= totalPages) {
      currentPage = targetPage;
      displayTransactions(currentPage);
    }
  });
});

displayTransactions(currentPage);

var ctx = document.getElementById("barChart").getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
gradient.addColorStop(0, "#007bff");
gradient.addColorStop(1, "#00d4ff");

var barChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Housing",
      "Groceries",
      "Utilities",
      "Shopping",
      "Transportation",
      "Entertainment",
      "Miscellaneous",
    ],
    datasets: [
      {
        label: "Spending Categories",
        data: [700, 600, 500, 450, 300, 200, 100],
        backgroundColor: gradient,
        borderColor: "#007bff",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
