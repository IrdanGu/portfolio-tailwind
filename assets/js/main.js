// Set current year in footer
if (document.getElementById("currentYear")) {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

// Skills Chart
if (document.getElementById("skillsChart")) {
  const ctx = document.getElementById("skillsChart").getContext("2d");
  const skillsChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Desain Web",
        "Pengembangan Web (Frontend)",
        "Pengembangan Web (Backend)",
        "Adm. Jaringan",
        "Adm. Basis Data",
        "Komunikasi",
      ],
      datasets: [
        {
          label: "Tingkat Keahlian (Perkiraan %)",
          data: [80, 85, 60, 70, 75, 90],
          backgroundColor: [
            "rgba(59, 130, 246, 0.7)",
            "rgba(14, 165, 233, 0.7)",
            "rgba(34, 197, 94, 0.7)",
            "rgba(249, 115, 22, 0.7)",
            "rgba(168, 85, 247, 0.7)",
            "rgba(239, 68, 68, 0.7)",
          ],
          borderColor: [
            "rgba(59, 130, 246, 1)",
            "rgba(14, 165, 233, 1)",
            "rgba(34, 197, 94, 1)",
            "rgba(249, 115, 22, 1)",
            "rgba(168, 85, 247, 1)",
            "rgba(239, 68, 68, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: "#475569",
          },
          grid: {
            color: "#e2e8f0",
          },
        },
        x: {
          ticks: {
            color: "#475569",
            maxRotation: 45,
            minRotation: 45,
            callback: function (value, index, values) {
              const label = this.getLabelForValue(value);
              if (label.length > 16) {
                return label.substring(0, 16) + "...";
              }
              return label;
            },
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#0f172a",
          titleColor: "#f1f5f9",
          bodyColor: "#cbd5e1",
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y + "%";
              }
              return label;
            },
          },
        },
      },
    },
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
