let file_Name = prompt("Enter filename with extension")
 const extension= file_Name.split(".").pop();  //split will divide the words into two and pop will remove the last word and return it
 alert(extension);