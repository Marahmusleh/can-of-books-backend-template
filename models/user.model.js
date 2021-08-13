'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: { type: String },
    description:{type: String},
    status: { type: String },
    ownerEmail: { type: String },
});

const userModel = mongoose.model('users', userSchema);


const seedUserData =() => {
    const book1 = new userModel({ // create new obj
                title: 'The Alchemist',
                description: 'The Alchemist’ tells the enthralling story of an Andalusian shepherd who wants to travel in search of treasure. But during his adventures, he finds himself, instead,” said Varga. “Coelho shows us the journey that matters—a journey of lessons and charming stories of snakes, love, dunes and alchemy.',
                status: 'available',
                ownerEmail: 'marahaltarefe18@gmail.com'
            });
    const book2 = new userModel({ // create new obj
                title: 'Half of a Yellow Sun',
                description: 'When Nigerian author Adichie was growing up, the Biafran war “hovered over everything”. Her sweeping, evocative novel, which won the Orange prize, charts the political and personal struggles of those caught up in the conflict and explores the brutal legacy of colonialism in Africa.',
                status: 'available',
                ownerEmail: 'marahaltarefe18@gmail.com'
            });
    const book3 = new userModel({ // create new obj
                title:'Alone Time',
                description:'​​Four cities, four seasons, and countless tables for one. In this memoir, Stephanie Rosenbloom explores the joys of solo adventuring.',
                status: 'available',
                ownerEmail: 'marahaltarefe18@gmail.com'
            });


    book1.save(); // save the data into database
    book2.save();
    book3.save();

}

module.exports = {userModel , seedUserData}