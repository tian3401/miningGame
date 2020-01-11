//Creates the Dependency Class that will allow us to update any changes to our data and notify the program we should rerun methods with the updated values 
let data, 
target;

class Dependency {
  constructor() {
    this.subscribers = []; 
  }
  depend() {
    if(target && !this.subscribers.includes(target)) {
      this.subscribers.push(target)
    }
  }
  notify() {
    this.subscribers.forEach(method => method()); 
  }
}

exports.data = data; 
exports.target = target;
exports.dep = Dependency; 