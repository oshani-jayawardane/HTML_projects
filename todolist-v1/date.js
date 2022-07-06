// assigning function directly to a variable. in this case, it's the exports. we can do it by seperately declaring and assigning too

// exports.getDate = module.exports.getDate
exports.getDate = function() {

  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  return today.toLocaleDateString("en-US", options);

}


//  returning multiple functions
exports.getDay = function() {

  const today = new Date();

  const options = {
    weekday: "long",
  }

  return today.toLocaleDateString("en-US", options);

}
