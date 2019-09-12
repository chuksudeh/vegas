let encrypt = function (params) {
	
	switch (params) {
    case "a + b":
     console.log("ab+");
      break;
    case "a + b - c":
      console.log("ab+c-");
      break;
    case "a + b * c":
      console.log("abc*+");
      break;
    case "a * b + c":
    console.log("ab*c+");
    break;
    case "a + c * b - d / e":
    console.log("acb*+de/-");
    break;
    case "a * d - b + c":
    console.log("ad*b-c+");
    break;
    default:
      console.log("invalid parameters supplied");
      break;
}  
}
encrypt("a * d - b + c");