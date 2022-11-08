const stringLength = (str) => {
  if (str.length < 1 || str.length > 10) {
    return('Error');
  }else {
    return(str.length);
  }
}
module.exports = stringLength;
