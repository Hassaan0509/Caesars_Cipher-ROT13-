function rot13(str) {
    let arr = [];
    arr = str.split(" ");
    console.log(arr)
    let regex = /\w/;
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("");
  
      for (let j = 0; j < arr[i].length; j++) {
  
        if (regex.test(arr[i][j])) {
          arr[i][j] = arr[i][j].charCodeAt(0);
          arr[i][j] = arr[i][j] + 13;
  
          if (arr[i][j] > 90) {
            arr[i][j] = 64 + arr[i][j] - 90
          }
  
          arr[i][j] = String.fromCharCode(arr[i][j])
        }
      }
      arr[i] = arr[i].join("")
    }
  
    str = arr.join(" ")
  
    console.log(arr);
    console.log(str)
    return str;
  }
  
  rot13("SERR CVMMN!");