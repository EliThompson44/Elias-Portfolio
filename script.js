const projects = {
  sales: {
    title: "AI-Assisted Sales Performance Analyzer",
    type: "Python Project",
    overview:
      "This beginner-friendly Python project reads a sales dataset and calculates core KPIs such as total sales, average order value, total units sold, top product, top region, and top sales rep. It also generates simple charts to make trends easy to interpret.",
    does:
      "The script uses pandas for data cleaning and aggregation, then matplotlib for visuals. It creates a lightweight analysis workflow that can be reused with updated sales data files.",
    understand:
      "I used AI as a coding assistant to improve structure and debug issues, while making sure I understood each section of the script, including how group-by logic, KPI calculations, and plotting work.",
    value:
      "This project demonstrates how a basic analytics pipeline can turn transaction-level data into actionable performance reporting for business teams.",
    steps: [
      "Download sales_analyzer.py, sales_data.csv, and/or sales_data.xlsx from the buttons below.",
      "Install Python 3 and required libraries: pandas and matplotlib.",
      "Place the files in the same folder.",
      "Run: python sales_analyzer.py",
      "Review KPI output and generated charts."
    ],
    code: `import pandas as pd\n\ndf = pd.read_csv("sales_data.csv")\ntotal_sales = df["Sales"].sum()\navg_order_value = df["Sales"].mean()\nprint("Total Sales:", total_sales)\nprint("Avg Order Value:", round(avg_order_value, 2))`,
    actions: [
      { label: "Download Python Script", href: "sales_analyzer.py", download: true, primary: true },
      { label: "Download CSV", href: "sales_data.csv", download: true },
      { label: "Download Excel Data", href: "sales_data.xlsx", download: true }
    ]
  },
  "ai-adoption": {
    title: "AI Adoption and Business Impact Analysis",
    type: "Excel Project",
    overview:
      "This Excel workbook analyzes how companies across industries are adopting AI and where that adoption creates measurable business value.",
    does:
      "The workbook includes sections such as Executive Summary, Overview, Dataset, Analysis Dashboard, Project Guide, and Chart Data to organize the complete analysis flow.",
    understand:
      "I structured this project to move from data to findings in a clear sequence, helping readers quickly understand key patterns and supporting evidence.",
    value:
      "This project highlights my ability to translate complex topic areas into clean business-focused analysis and presentation.",
    steps: [
      "Download the workbook using the button below.",
      "Open the file in Microsoft Excel desktop version for best compatibility.",
      "Start with Executive Summary and Overview for context.",
      "Review Dataset and Analysis Dashboard for core insights.",
      "Use Project Guide and Chart Data tabs to understand methodology and visual support."
    ],
    code: "Example focus area: Compare AI adoption maturity by industry and map findings to productivity, cost, and decision-speed outcomes.",
    actions: [
      {
        label: "Download Excel Workbook",
        href: "Eli AI Adoption Business impact project.xlsx",
        download: true,
        primary: true
      }
    ]
  },
  sql: {
    title: "SQL Customer Segmentation Project",
    type: "SQLite Project",
    overview:
      "This project uses SQL and SQLite to analyze customer behavior and revenue patterns from a structured transactional database.",
    does:
      "The analysis covers top customers, customer lifetime value, repeat customer behavior, revenue by segment, and revenue by channel.",
    understand:
      "I built and interpreted SQL queries to isolate valuable customer groups, identify retention opportunities, and compare performance drivers across segments.",
    value:
      "The project shows how query-based analysis supports customer strategy, revenue planning, and operational decision-making.",
    steps: [
      "Download the SQLite .db file using the button below.",
      "Open it in DB Browser for SQLite or SQLiteStudio.",
      "Browse the tables and schema to understand available fields.",
      "Run SQL queries to explore customer value and behavior.",
      "Export results for reporting or dashboarding."
    ],
    code: `SELECT customer_id,\n       SUM(revenue) AS lifetime_value\nFROM customer_transactions\nGROUP BY customer_id\nORDER BY lifetime_value DESC\nLIMIT 10;`,
    actions: [
      {
        label: "Download SQLite Database",
        href: "SQLite Customer Segmentation project.db",
        download: true,
        primary: true
      }
    ]
  },
  viz: {
    title: "Business Data Visualization Project",
    type: "Tableau + Adobe Express",
    overview:
      "This project uses public data, including sources like PolicyMap, to build Tableau visualizations and present findings through Adobe Express.",
    does:
      "I selected chart types intentionally based on the business question and audience, then organized visuals into a clear narrative for non-technical viewers.",
    understand:
      "I focused on balancing analytical depth with communication clarity, ensuring each visual had a purpose and direct takeaway.",
    value:
      "The final output demonstrates data storytelling skills and the ability to make analytics accessible to decision-makers.",
    steps: [
      "Click the Open Adobe Express Project button below.",
      "Review the project flow from context to visualization to conclusions.",
      "Inspect chart choices and supporting narrative text.",
      "Use the content as a model for clear audience-centered reporting."
    ],
    code: "Visualization principle used: one chart = one primary message, with clean labels and limited visual noise.",
    actions: [
      {
        label: "Open Adobe Express Project",
        href: "https://new.express.adobe.com/webpage/HJvjBVdumeUth",
        external: true,
        primary: true
      }
    ]
  },
  auto: {
    title: "Auto Purchase Cost Analysis Model",
    type: "Excel Assumptions-Based Model",
    overview:
      "This Excel project compares vehicle ownership costs using assumptions and formula-driven logic.",
    does:
      "It uses an assumptions section and formulas such as IF, OR, VLOOKUP, multiplication, and division to calculate gas cost, maintenance cost, premium gas requirements, and decision-based outputs.",
    understand:
      "This project reflects my understanding of core Excel formulas learned in class and how assumptions can dynamically change model outputs.",
    value:
      "It demonstrates practical financial modeling logic for scenario comparison and consumer/business decision support.",
    steps: [
      "Download and open the Excel file below.",
      "Review the assumptions section first (fuel cost, usage, and other inputs).",
      "Check formula areas calculating ownership cost components.",
      "Adjust assumptions and observe output updates in real time.",
      "Use results to compare purchasing scenarios."
    ],
    code: "Example formula pattern: =IF(OR(FuelType=\"Premium\", MPG<22), AnnualMiles/MPG*PremiumPrice, AnnualMiles/MPG*RegularPrice)",
    actions: [
      {
        label: "Download Auto Purchase Model",
        href: "Eli Thompson Auto Purchase File.xlsx",
        download: true,
        primary: true
      }
    ]
  }
};

const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const closeButton = document.getElementById("modalClose");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function renderActions(actions) {
  return actions
    .map((action) => {
      const classes = action.primary ? "btn btn-primary" : "btn btn-secondary";
      const downloadAttr = action.download ? "download" : "";
      const targetAttr = action.external ? 'target="_blank" rel="noopener noreferrer"' : "";
      return `<a class="${classes}" href="${action.href}" ${downloadAttr} ${targetAttr}>${action.label}</a>`;
    })
    .join("");
}

function openModal(projectKey) {
  const project = projects[projectKey];
  if (!project) return;

  const stepsList = project.steps.map((step) => `<li>${step}</li>`).join("");

  modalBody.innerHTML = `
    <h2 id="modalTitle">${project.title}</h2>
    <p><strong>Type:</strong> ${project.type}</p>

    <section class="modal-section">
      <h3>Project Overview</h3>
      <p>${project.overview}</p>
    </section>

    <section class="modal-section">
      <h3>What This Project Does</h3>
      <p>${project.does}</p>
    </section>

    <section class="modal-section">
      <h3>What I Understand About It</h3>
      <p>${project.understand}</p>
    </section>

    <section class="modal-section">
      <h3>Business Value</h3>
      <p>${project.value}</p>
    </section>

    <section class="modal-section">
      <h3>Step-by-Step Access / Run Instructions</h3>
      <ol class="modal-list">${stepsList}</ol>
    </section>

    <section class="modal-section">
      <h3>Download / Open</h3>
      <div class="modal-actions">${renderActions(project.actions)}</div>
    </section>

    <section class="modal-section">
      <h3>Example Snippet / Small Example</h3>
      <pre class="modal-code"><code>${project.code}</code></pre>
    </section>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.project));
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-close")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});
