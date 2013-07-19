var smallestChange = function(money) {
  var change = {}
  if (money >= 25) {
    change["Quarter"] = Math.floor(money / 25)
    money %= 25
  }
  if (money >= 10) {
    change["Dime"] = Math.floor(money / 10)
    money %= 10
  }
  if (money >= 5 ) {
    change["Nickel"] = 1
    money -= 5
  }
  if (money > 0) change["Penny"] = money
  return change
}

// Test Harness

var compareValues = function(a, b ){
  return JSON.stringify(a) === JSON.stringify(b)
}

var assert = function(boolsies){
  if (!boolsies) throw new Error("Wrong Idiot!!!!")
}

var test = function(actual, expected){
  var check = compareValues(actual, expected)
  if (!check){
    console.log(actual, expected)
    assert(check)
  }
}

// Tests

test(smallestChange(0), {})
test(smallestChange(1), {"Penny": 1})
test(smallestChange(2), {"Penny": 2})
test(smallestChange(5), {"Nickel": 1})
test(smallestChange(6), {"Nickel": 1, "Penny": 1})
test(smallestChange(9), {"Nickel": 1, "Penny": 4})
test(smallestChange(10), {"Dime": 1})
test(smallestChange(11), {"Dime": 1, "Penny": 1})
test(smallestChange(15), {"Dime": 1, "Nickel": 1})
test(smallestChange(16), {"Dime": 1, "Nickel": 1, "Penny": 1})
test(smallestChange(20), {"Dime": 2})
test(smallestChange(25), {"Quarter": 1})
test(smallestChange(30), {"Quarter": 1, "Nickel": 1})
test(smallestChange(50), {"Quarter": 2})
test(smallestChange(67), {"Quarter": 2, "Dime": 1, "Nickel": 1, "Penny": 2})
test(smallestChange(100), {"Quarter": 4})

console.log("Done")


