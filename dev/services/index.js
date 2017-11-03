exports.forEachFunction = async (req, res) => {

  // declaring an array
  const arrayData = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const newArray = []

  // function to print value in console
  const print = (val) => {
    console.log(val)
    return newArray.push(val)
  }

  await arrayData.forEach(print)

  res.status(200).json({
    status: 200,
    data: arrayData,
    result: newArray,
    message: 'success'
  })
}

exports.mapFunction = async (req, res) => {

  // declaring an array
  const arrayData = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const map = await arrayData.map(print)

  res.status(200).json({
    status: 200,
    data: arrayData,
    result: map,
    message: 'success',
    description: 'Capitalize the given array'
  })
}

// function to convert string to upper case
const print = (val) => {
  return val.toUpperCase()
}

exports.filterFunction = async (req, res) => {

  // declaring an array
  const arrayData = [12, 32, 56, 29, 22, 19, 91, 65, 1]

  const result = await arrayData.filter(filter)

  res.status(200).json({
    status: 200,
    data: arrayData,
    result: result,
    message: 'success',
    description: 'All the numbers less that 30'
  })
}

// function to filter values
const filter = (val) => {
  return val < 30
}

exports.findFunction = async (req, res) => {

  // declaring an array
  const peopleData = [{
    name: 'Marty',
    age: 24
  }, {
    name: 'Heath',
    age: 12
  }, {
    name: 'James',
    age: 13
  }, {
    name: 'Tony',
    age: 25
  }, {
    name: 'Blake',
    age: 27
  }, {
    name: 'Jim',
    age: 25
  }, {
    name: 'Lon',
    age: 18
  }, {
    name: 'Max',
    age: 50
  }]

  const findTeenager = (val) => {
    return val.age > 10 && val.age < 20
  }

  let firstTeenager = await peopleData.find(findTeenager)

  res.status(200).json({
    status: 200,
    data: peopleData,
    result: 'First Teenager is ' + firstTeenager.name,
    message: 'success',
    description: 'To find first teenager in the given array'
  })
}

exports.everyFunction = async (req, res) => {

  // declaring an array
  const peopleData = [{
    name: 'Marty',
    age: 24
  }, {
    name: 'Heath',
    age: 12
  }, {
    name: 'James',
    age: 13
  }, {
    name: 'Tony',
    age: 25
  }, {
    name: 'Blake',
    age: 27
  }, {
    name: 'Jim',
    age: 25
  }, {
    name: 'Lon',
    age: 18
  }, {
    name: 'Max',
    age: 50
  }]

  const everyTeenager = (val) => {
    return val.age > 10 && val.age < 20
  }

  const every = await peopleData.every(everyTeenager)

  res.status(200).json({
    status: 200,
    data: peopleData,
    result: 'Everyone is Teenager: ' + every,
    message: 'success',
    description: 'Find whether everyone is teenager in the given data'
  })
}

exports.someFunction = async (req, res) => {

  // declaring an array
  const peopleData = [{
    name: 'Marty',
    age: 24
  }, {
    name: 'Heath',
    age: 12
  }, {
    name: 'James',
    age: 13
  }, {
    name: 'Tony',
    age: 25
  }, {
    name: 'Blake',
    age: 27
  }, {
    name: 'Jim',
    age: 25
  }, {
    name: 'Lon',
    age: 18
  }, {
    name: 'Max',
    age: 50
  }]

  const someTeenager = (val) => {
    return val.age > 10 && val.age < 20
  }

  const some = await peopleData.some(someTeenager)

  res.status(200).json({
    status: 200,
    data: peopleData,
    result: 'There are teenagers: ' + some,
    message: 'success',
    description: 'To find atleas one teenager in the given data'
  })
}
