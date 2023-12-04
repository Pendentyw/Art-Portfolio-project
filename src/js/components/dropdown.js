export const dropdown = () => {
  const nav = document.querySelector('nav');
  const dropdown = document.querySelector('.dropdown');
  console.log(dropdown);
  const burgerIconContainer = document.querySelector('.burger-icon');

  const handleOpenDropdown = (event) => {
    if (event.target == burgerIconContainer) {
      dropdown.classList.remove('hide', 'default');
      dropdown.classList.add('show');

      console.log('show');
    } else {
      return;
    }
  };

  const handleCloseDropdown = (event) => {
    if (event.target !== burgerIconContainer) {
      dropdown.classList.replace('show', 'hide');
    }
  };

  nav.addEventListener('click', handleOpenDropdown);
  document.addEventListener('click', handleCloseDropdown);
};
