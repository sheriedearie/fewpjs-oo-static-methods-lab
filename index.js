class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(text) {
    const splitText = text.split(" ")
    const prohibitedList = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const newArray = []
    splitText.forEach((el) => {
      if (splitText[0] = el){
        return text;
      }
      else if (!prohibitedList.includes(el)) {
        newArray.push(el[0].toUpperCase() + el.slice(1))
      } else {
        newArray.push(el)
      }
    }) 
    return newArray.join(" ");
  }
}
