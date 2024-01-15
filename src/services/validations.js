const isValid = (gamerTag) => {
    if (typeof gamerTag !== 'string' || gamerTag.length < 8) {
      return false;
    }
  
    const specialCharacters = ['&', '$', '!', 'è', '§', 'à', '_'];
    let hasSpecialCharacter = false;
    let hasNumber = false;
  
    for (const char of gamerTag) {
      if (specialCharacters.includes(char)) {
        hasSpecialCharacter = true;
      } else if (!isNaN(char)) {
        hasNumber = true;
      }
      if (hasSpecialCharacter && hasNumber) {
        return true;
      }
    }
  
    return false;
  };
  
  exports.isValid = isValid;
