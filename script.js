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
  // Construct Row Markup
  const newRowHTML = `
<tr>
<td class="fw-semibold text-dark">${catName}</td>
<td class="text-secondary">${catDesc}</td>
</tr>
`;
  // Dynamic RAM Insertion
  incomeTableBody.insertAdjacentHTML("beforeend", newRowHTML);
  // Reset Inputs & Refocus
  categoryNameInput.value = "";
  categoryDescInput.value = "";
  categoryNameInput.focus();
}
