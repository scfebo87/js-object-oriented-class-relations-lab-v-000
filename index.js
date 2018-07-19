let store = {drivers: [], passengers: [], trips: []};
let driverId = 0; 
let passengerId = 0;
let tripId = 0;

class Driver { 
  constructor(name) { 
    this.name = name;
    this.id = ++driverId; 
    store.drivers.push(this);
  }
  trips() { 
    return store.trips.filter(trip => { 
      return trip.driverId === this.id;
    });
  }
  
  passengers() { 
    return store.passengers.filter(passenger => { 
      return this.trips().map(trip => trip.passengerId);
    });
  }
}

class Passenger { 
  constructor(name) { 
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this);
  }
  trips() { 
    return store.trips.filter(trip => { 
      return trip.passengerId === this.id;
    });
  }
  drivers() { 
    return store.drivers.filter(driver => { 
      return this.trips().map(trip => trip.driverId);
    });
  }
}

class Trip { 
  constructor(driver, passenger) { 
    this.driver = driver;
    this.passenger = passenger;
    this.id = ++tripId; 
    this.driverId = driverId;
    this.passengerId = passengerId;
    store.trips.push(this);
  }
  driver() { 
    return store.drivers.filter(driver => {
      return driver.id === this.driverId;
    });
  }
  
  passenger() { 
    return store.passengers.filter(passenger => {
      return passenger.id === this.passengerId;
    });
  }
}