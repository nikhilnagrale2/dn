function is_array(params) {
  if (typeof params == "object") return true;
  else return false;
}

console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));