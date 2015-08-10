function convert(str) {
  // Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their corresponding HTML entities.
  
  str = str.replace(/[&]/g, "&amp;")
  .replace(/[<]/g, "&lt;")
  .replace(/[>]/g, "&gt;")
  .replace(/[""]/g, "&quot;")
  .replace(/[']/g, "&apos;");
  
  return str; 
  
}

convert('Dolce & Gabbana');