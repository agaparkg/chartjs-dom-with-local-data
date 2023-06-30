import { data } from "./data.js";

const cxt = document.querySelector("#myChart");

const labels = data.map((d) => d.employee_name);
const salaries = data.map((d) => d.employee_salary);
const ages = data.map((d) => d.employee_age);

const config = {
  type: "bar",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Employee Salaries",
        data: salaries,
      },
      {
        label: "Employee Ages",
        data: ages,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

new Chart(cxt, config);
