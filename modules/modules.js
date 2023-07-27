//modules
//appyling module imposes strict mode

import * as Guitars from "./guitars.js";
import User from "./user.js";

const me = new User("email@email.com","Dave");
console.log(me);
console.log(me.greeting());
console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());