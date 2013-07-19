var aussie = {
  "TwoDollar": 200,
  "Dollar": 100,
  "Fiddy": 50,
  "Emu": 20,
  "Roos": 10,
  "Wombat": 5,
  "Deuce": 2,
  "Pence": 1
}

var murika = {
  "Quarter": 25,
  "Dime": 10,
  "Nickel": 5,
  "Penny": 1
}


var smallestChange = function(money, coinSet) {
  var change = {}
  for (coinName in coinSet) {
    var coinValue = coinSet[coinName]
    if (money >= coinValue) {
      change[coinName] = Math.floor(money / coinValue)
      money %= coinValue
    }
  }
  return change
}

// Test Harness

var compareValues = function(a, b){
  return JSON.stringify(a) === JSON.stringify(b)
}

var abort = function(){
  throw new Error('Wrong Idiot!!11!!1')
}

var test = function(actual, expected){
  var check = compareValues(actual, expected)
  if (!check){
    console.log(actual, expected)
    abort()
  }
}

// Tests

test(smallestChange(0,murika), {})
test(smallestChange(1,murika), {"Penny": 1})
test(smallestChange(2,murika), {"Penny": 2})
test(smallestChange(5,murika), {"Nickel": 1})
test(smallestChange(6,murika), {"Nickel": 1, "Penny": 1})
test(smallestChange(9,murika), {"Nickel": 1, "Penny": 4})
test(smallestChange(10,murika), {"Dime": 1})
test(smallestChange(11,murika), {"Dime": 1, "Penny": 1})
test(smallestChange(15,murika), {"Dime": 1, "Nickel": 1})
test(smallestChange(16,murika), {"Dime": 1, "Nickel": 1, "Penny": 1})
test(smallestChange(20,murika), {"Dime": 2})
test(smallestChange(25,murika), {"Quarter": 1})
test(smallestChange(30,murika), {"Quarter": 1, "Nickel": 1})
test(smallestChange(50,murika), {"Quarter": 2})
test(smallestChange(67,murika), {"Quarter": 2, "Dime": 1, "Nickel": 1, "Penny": 2})
test(smallestChange(100,murika), {"Quarter": 4})

// Aussie Tests

// test(smallestChange(0), {})
// test(smallestChange(1), {"Cent": 1})

console.log("Done")


