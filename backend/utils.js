const isValidPassword = (password) => {
  let valid = true;
  if (password.length < 8) {
    valid = false;
  }
  if (!password.match(/[a-z]/)) {
    valid = false;
  }
  if (!password.match(/[A-Z]/)) {
    valid = false;
  }
  if (!password.match(/[0-9]/)) {
    valid = false;
  }
  return valid;
};

export {
    isValidPassword
}