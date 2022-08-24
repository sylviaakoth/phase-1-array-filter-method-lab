// Code your solution here
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function findMatching(array,string){
    const results = array.filter(element => {
      return element.toLowerCase() === string.toLowerCase()
    })

    return results;
}


function fuzzyMatch(array,string){
    const results = array.filter(element => element.slice(0,3).includes(string))
    return results 
}

function matchName(driver,string){
    const results = driver.filter(element => element.name === string )
    return results;

}