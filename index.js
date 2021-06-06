class Formatter {
  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize (str){
    str.replace(/[^-, , '','A-Za-z0-9]+/g);
    console.log(str)
  }

  static titleize(){

  }
}