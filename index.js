// Your code here

function saturdayFun(MyActivity = "roller-skate"){
  return `This Saturday, I want to ${MyActivity}!`
}
saturdayFun()
saturdayFun('I want to bathe my dog')

let mondayWork = function (MyActivity1 = "go to the office") {
  return `This Monday, I will ${}`
}

mondayWork('Play basketball with friend')

function wrapAdjective(mySymbol = "*"){
  return function(mySpecial = "special"){
    return `You are ${mySymbol} ${mySpecial}`
  }
}

wrapAdjective()();