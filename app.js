// Creates the Data Structures
let route1 = new LinkedList();
let route2 = new LinkedList();
let busQueue = new Queue();
let stopTree = new BinarySearchTree();

// Adds Bus Stops to Route 1
route1.add("St. George's");
route1.add("Grand Anse");
route1.add("Morne Rouge");
route1.add("Calliste");

//Adds Bus Stops to Route 2
route2.add("St. George's");
route2.add("Tempe");
route2.add("Woburn");
route2.add("Grenville");

//Asdd all unique Bus Stops to the BST (Binary Search Tree)
let allStops = route1.display().concat(route2.display());
for (let i = 0; i < allStops.length; i++) {
    if (stopTree.search(allStops[i]) == false) {
        stopTree.insert(allStops[i]);
    }
}

//Displays Routes in order From the Doubly Linked List
function displayRoute() {
    let choice = document.getElementById("routeChoice").value;
    let stops;
    if (choice == "0") {
        stops = route1.display();
    } else {
        stops = route2.display();
    }

    let list = document.getElementById("routeList");
    list.innerHTML = "";
    for (let i = 0; i < stops.length; i++) {
        list.innerHTML += "<li>" + stops[i] + "</li>";
    }
}

//Adds a New Bust Stop when Searched
function addStop() {
    let name = document.getElementById("newStop").value.trim();
    let choice = document.getElementById("routeChoice").value;
    if (name == "") {
        alert("Enter a stop name");
        return;
    }
    if (choice == "0") {
        route1.add(name);
    } else {
        route2.add(name);
    }
    if (stopTree.search(name) == false) {
        stopTree.insert(name);
    }

    document.getElementById("newStop").value = "";
    displayRoute();
    displayStops();
}

//Searches for a Bus Stop
function searchStop() {
    let name = document.getElementById("searchName").value.trim();
    let result = stopTree.search(name);
    if (name == "") {
        document.getElementById("searchResult").textContent = "Enter a stop name.";
    } else if (result == true) {
        document.getElementById("searchResult").textContent = name + " was found!";
    } else {
        document.getElementById("searchResult").textContent = name + " was not found.";
    }
}
//Displays the Bus Stops that were Searched for
function displayStops() {
    let stops = stopTree.getAll();
    let list = document.getElementById("stopList");
    list.innerHTML = "";
    for (let i = 0; i < stops.length; i++) {
        list.innerHTML += "<li>" + stops[i] + "</li>";
    }
}

//Function That Keeps count of the bus that is added and the Bus that is Departing
function addBus() {
    let number = document.getElementById("busNumber").value.trim();
    let destination = document.getElementById("destination").value.trim();

    if (number == "" || destination == "") {
        alert("Enter bus registration and destination");
        return;
    }

    busQueue.enqueue({
        number: number,
        destination: destination
    });

    document.getElementById("busNumber").value = "";
    document.getElementById("destination").value = "";

    displayBuses();
}
//Displays Busses in the Queue
function displayBuses() {
    let buses = busQueue.display();
    let list = document.getElementById("busList");

    list.innerHTML = "";

    for (let i = 0; i < buses.length; i++) {
        list.innerHTML += "<li>" + buses[i].number + " - " + buses[i].destination + "</li>";
    }
}
//Displays the Bus/Busses that are Departing
function departBus() {
    let bus = busQueue.dequeue();

    if (bus == null) {
        document.getElementById("departureResult").textContent = "No buses waiting.";
    } else {
        document.getElementById("departureResult").textContent =
            bus.number + " has departed for " + bus.destination;
    }

    displayBuses();
}


function sortStops() {
    let stops = bubbleSort(stopTree.getAll());
    let list = document.getElementById("stopList");

    list.innerHTML = "";

    for (let i = 0; i < stops.length; i++) {
        list.innerHTML += "<li>" + stops[i] + "</li>";
    }
}
//Function For the Main pages of the Application
function showPage(page) {
    let pages = ["home", "routes", "search", "terminal"];

    for (let i = 0; i < pages.length; i++) {
        document.getElementById(pages[i]).classList.add("hidden");
    }

    document.getElementById(page).classList.remove("hidden");
}

//Displays only the information needed on the current page
if (document.getElementById("routeList")) {
    displayRoute();
}
if (document.getElementById("stopList")) {
    displayStops();
}
if (document.getElementById("busList")) {
    displayBuses();
}