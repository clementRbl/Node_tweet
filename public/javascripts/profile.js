window.addEventListener('DOMContentLoaded', () => {
  const inputAvatar = document.getElementById('input-avatar');
  const formContainer = document.getElementById('form-container')

  formContainer.addEventListener('click', () => {
    console.log('click');
    inputAvatar.click()
  })

  inputAvatar.addEventListener('change', () => {
    formContainer.submit();
  })

})