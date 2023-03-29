# ArrBay

"ArrBay! A Sink or Swim Bidding Game!"
A gamified version of an eCommerce website. Hire a pirate crew to retrieve the items you want! Force the others to go bankrupt!

## Gameplay Points

- Items

  - Items have a set value. This value will be added to the player's funds if successfully won.

  - Items will disappear after x turns unless there is a bid.

  - Items with only one bid when the auction ends are automatically won by that person.

  - Higher value items will generally remain out for longer and have a higher minimum bid.

  - Minimum bid will likely be a percentage of the item value.

  - You can see how many ships (bids) have been sent for an item. You can only see the values of the bids of your own ships.

  - Items are sortable by value, number of bids on them, ships first, etc.

  - New items may become available at the beginning of a round.

  - Has: item.name, item.value, item.image, item.shipsSent

- Ships

  - A ship's power is equal to its value. A more expensive ship means you may not have to add as much additional bid on an item to reach its minimum bid value, and you can get that value back.

  - Ships can be bought and sold as items in the marketplace. Ships can be auctioned, buy-it-now, or both. The purchase price of the ship does not change its power rating. (Condition is shown as a fraction.)

  - A ship can be instantly sold to the harbor for an immediate amount, perhaps 50% of its power rating. The ship will appear on the market for that amount on the following turn for perhaps 75% of its value.

  - A ship can be buy it now, auction only, or both.

  - A ship can be sold on the marketplace.

  - Ships will be added to the catalogue as time goes on.

  - Buying a ship from the catalogue means that opponents cannot purchase it, and it becomes available to the player on that turn.

  - Custom ships can be commissioned, although they will take several turns to complete, and there is an additional charge based on a percentage of the ship value.

  - Maximum number of ships?

  - Ship values are in round increments. 50, 100, 500? No weird values.

  - Maximum value ship?

  - Ship values decrease each time they're used so they're not dominant forever and need to be replaced. Ships reduced to 0 value are lost. Ships can be repaired up to their initial value.

  - You can name your ships.

  - Has: ship.name, ship.value, ship.initValue, ship.missionAsgmt

- Bids

  - To make a bid, the player must have an available ship.

  - Bids are final.

  - All bids are lost, though all ships will return at the end of an auction unless used as collateral.

  - Only a winning bid's ship is guaranteed to return as collateral.

  - The strength of the bid is determined as a combination of the ship value and additional bid. The sum of the two must be greater than or equal to the item's minimum bid value.

  - If the additonal bid is less than the minimum bid, the ship is used as collateral, and will be lost if the bid is lost.

  - Multiple ships sent by a single player for an item will have their bids combined as if it was a single, larger bid.

  - May bid on multiple items per turn, or multiple times on the same item. (Multiple bids on the item by a player may drive up perceived demand for an item.)

  Has: bid.item, bid.ship, bid.additional

- Players

  - Different AI profiles for opponents. Risky, cautious, balanced, sniper, random, etc.

  - If the player has one ship, their name will be Captain X. If they have more than one, it will be Commodore X.

  - Has: player.name, player.funds, player.score, player.ships

- Rounds

  - If you have no ships available that are not on a voyage, you can opt to fast forward to the turn when your ship returns, or you can watch each turn. You can also skip a turn if you do not wish to make a bid.

  - Each round has Turns. Turns are not numbered, but are named for players. At the beginning of the first turn, a random ordering for the players is determined, and each player takes their turn for that round in order. On each following round, the turns will be cycled so that person who took their turn last in the prior round will be the first to take their turn in this round. Through this, the same player will not always have the first or last opportunity to act. So for round one, the player order may be ABCD, then for round 2 - DABC, round 3 CDAB, round 4 BCDA, and so on.

  - New ships may become available for purchase at the beginning of a round. They are first-come, first-served.

  - Auctions are resolved at the end of a round and scores updated.
