export const resetSearchProblemInput = () => {
  const searchProblemInput = document.getElementById('search-problem') as HTMLInputElement;
  searchProblemInput.value = '';
};

export const resetCheckboxes = () => {
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]',
  ) as NodeListOf<HTMLInputElement>;
  checkboxes.forEach((checkbox) => (checkbox.checked = false));
};
