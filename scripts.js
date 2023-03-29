"use strict";

class Item {
    static #nextID = 0;
    
    /**
     * 
     * @param {string} name 
     * @param {string} imgURL 
     * @param {number} value 
     */
    constructor(itemName, imgURL, value) {
        this.itemName = itemName;
        this.value = value;
        this.itemID = `id${(Item.#nextID++).toString().padStart(4, '0')}`;
        this.imgURL = imgURL;
    }

    

    get HTMLElement() {
        let element = document.createElement("div");
        element.itemLink = this;
        element.classList.add("itemBox", "item", this.itemID);

        let itemImage = document.createElement("img");
        itemImage.src = this.imgURL;
        itemImage.alt = "`${this.itemName} image`";
        itemImage.onerror = "this.onerror=null; this.src='/assets/placeholder.webp'";
        itemImage.classList.add("itemImage");
        element.appendChild(itemImage);

        let itemCaption = document.createElement("p");
        let captionText = document.createTextNode(this.itemName);
        itemCaption.appendChild(captionText);
        itemCaption.classList.add("itemCaption");
        element.appendChild(itemCaption);

        return element;
    }
}


class Ship extends Item {
    #assignedItem = null;
    
    /**
     * 
     * @param {string} name - name of the ship
     * @param {string} imgURL - string path to the image file
     * @param {number} value - current value of the ship
     * @param {number} [maxValue] - optional maximum value of the ship.  If omitted, defaults to value 
     */
    constructor(name, imgURL, value, maxValue) {
        super(name, imgURL, value);
        this.maxValue = (maxValue == undefined ? value : maxValue);
    }

    get HTMLElement() {
        let element = super.HTMLElement;
        element.classList.add("ship");
        if(this.#assignedItem != null) {
            element.classList.add("busy");
        }
        return element;
    }

    get assignedItem() {
        return this.#assignedItem;
    }


    /**
     * @param {Item} item
     */
    set assignedItem(item) {
        let shipElements = document.getElementsByClassName(this.itemID);

        if (item == null) {
            this.#assignedItem = null;
            for (var i = 0; i < shipElements.length; i++) {
                shipElements[i].classList.remove("busy");
            }
        }
        else {
            this.#assignedItem = item;
            for (var i = 0; i < shipElements.length; i++) {
                shipElements[i].classList.add("busy");
            }
        }
    }
}

class Bid {
    constructor(item, ship, additional) {

    }
}

class Player {
    #funds = 0;
    #allShips = [];

    constructor(playerName, funds, allShips) {
        this.playerName = playerName;
        this.#funds = funds;
        this.allShips.push(...allShips);
        this.availableShips.push(...availableShips);
    }
    



    /**
     * Returns a copy of this Player.  Useful for logging game state for stats.
     */
    get currentStats() {
        return new Player (this.playerName, this.#funds, ships);
    }
}

demoItems();
function demoItems() {
    var mainbox = document.getElementById("main");

    var ballItem = new Item("Placeholder Ball", "/assets/rand-ball.jfif", 5000);
    var noItem = new Item("Placeholder Item", "/assets/placeholder.webp", 5000);
    var peppItem = new Item("Placeholder Pepper", "/assets/rand-pepp.jpg", 5000);
    var charcItem = new Item("Placeholder Charcuterie", "/assets/rand-charc.jfif", 5000);
    var glueItem = new Item("Placeholder Glue", "/assets/rand-glue.jpg", 5000);
    var ship1 = new Ship("Placeholder Ship", "/assets/rand-ship.jpg", 5000);
    mainbox.appendChild(noItem.HTMLElement);
    mainbox.appendChild(ballItem.HTMLElement);
    mainbox.appendChild(peppItem.HTMLElement);
    mainbox.appendChild(charcItem.HTMLElement);
    mainbox.appendChild(glueItem.HTMLElement);
    mainbox.appendChild(noItem.HTMLElement);
    mainbox.appendChild(noItem.HTMLElement);
    mainbox.appendChild(noItem.HTMLElement);
    mainbox.appendChild(noItem.HTMLElement);
    mainbox.appendChild(noItem.HTMLElement);
    mainbox.appendChild(noItem.HTMLElement);
    mainbox.appendChild(ship1.HTMLElement);

}