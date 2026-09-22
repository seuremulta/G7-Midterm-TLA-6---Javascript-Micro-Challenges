## Project Overview

This repository contains the official solution developed by **Group 7** for the assigned **Enterprise Income Tracker** module challenge.

### Assigned Challenge Deliverables:

- **Core Task:** Enforce structural cleanliness on input data prior to table insertion by automatically converting the Category Name to uppercase text and truncating Category Descriptions exceeding 25 characters with an appended ellipsis (`"..."`).
- **Mandatory Technical Workflow:**
  - Extract input strings via the `.value` property.
  - Apply `.toUpperCase()` to the category name string.
  - Evaluate the description's `.length` using a conditional check.
  - Apply `.slice(0, 25)` and append `"..."` if the description length exceeds 25 characters.
  - Inject the sanitized strings directly into the table using ES6 template literals.

---

## Technical Implementation & DOM Logic

The JavaScript controller (`app.js`) handles event processing, string sanitation, and dynamic DOM manipulation without relying on external libraries or inline event attributes.

### Key Logic & Features:

1. **Targeting DOM Nodes:** Direct references to inputs (`txtCatName`, `txtCatDesc`), the trigger button (`btnAdd`), and the table body (`listIncomeCat`) are cached using `document.getElementById()`.
2. **Event Handling:** A non-inline `click` listener is attached to the Save Category button, routing user actions through `handleAddCategory()`.
3. **Data Sanitization & Validation (Guard Clauses):**
   - `.trim()` removes surrounding whitespace from both inputs.
   - A guard clause validates that neither field is empty before proceeding.
   - `.toUpperCase()` enforces uppercase formatting on the Category Name.
   - `.slice(0, 25)` truncates Category Descriptions longer than 25 characters and appends an ellipsis (`...`).
4. **RAM Insertion:** Processed strings are formatted using template literals and dynamically injected into the table body using `.insertAdjacentHTML("beforeend", ...)`. This avoids re-parsing existing table rows and prevents unnecessary layout reflows.
5. **State Reset:** Upon successful insertion, input values are cleared and focus is programmatically shifted back to the Category Name input via `.focus()`.

---

## Group Members & Reporting Roles

| Member Name                    | Assigned Reporting Role |
| :----------------------------- | :---------------------- |
| **Macrohon, Cyrus**            | QA                      |
| **Po, Oliver Vince G.**        | Frontend Developer      |
| **Remulta, Sophia Ernilda U.** | Systems Analyst         |
