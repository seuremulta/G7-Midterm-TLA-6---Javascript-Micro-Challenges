// 1. Target DOM Nodes (Matching Slide 7)

const categoryNameInput = document.getElementById("txtCatName");
const categoryDescInput = document.getElementById("txtCatDesc");
const addCategoryBtn = document.getElementById("btnAdd");
const incomeTableBody = document.getElementById("listIncomeCat");
// 2. Attach Non-Inline Event Listener
addCategoryBtn.addEventListener("click", handleAddCategory);
// 3. Controller Action
function handleAddCategory() {
  const catName = categoryNameInput.value.trim();
  const catDesc = categoryDescInput.value.trim();
  // Guard Clause Validation
  if (!catName || !catDesc) {
    alert("Please complete both input fields.");
    return;
  }
  // Auto-Formatter: Uppercase the Category Name
  const formattedName = catName.toUpperCase();
  // Limits Description to 25 chars with ellipsis
  let formattedDesc = catDesc;
  if (formattedDesc.length > 25) {
    formattedDesc = formattedDesc.slice(0, 25) + "...";
  }
  // Construct Row Markup
  const newRowHTML = `
<tr>
<td class="fw-semibold text-dark">${formattedName}</td>
<td class="text-secondary">${formattedDesc}</td>
</tr>
`;
  // Dynamic RAM Insertion
  incomeTableBody.insertAdjacentHTML("beforeend", newRowHTML);
  // Reset Inputs & Refocus
  categoryNameInput.value = "";
  categoryDescInput.value = "";
  categoryNameInput.focus();
}
