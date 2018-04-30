let Greeter = {
    greet: function (name) {
        return "Hello " + name + "!";
    }
}

// let name = prompt("Enter your name: ");
// if (name != null) {
//     alert(Greeter.greet(name));
// }

let FavouriteShow = {
    name: "Archer",
    numSeasons: 9,
    mainActor: "H. Jon Benjamin",
    getInfo: function () {
        return [this.name, this.numSeasons, this.mainActor];
    }
};