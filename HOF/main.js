//Higher order function

//a higher order function is a function that does at least one of the following:
//1. takes one or more functions as an arguement (parameter)
//2. return a function as it's result

//forEach()

import {posts} from "./posts.js";

posts.forEach(
    (post)=>{
        console.log(post);
    }
);
console.clear();
//filter returns arrays
const filteredPosts = posts.filter(
    (post)=>{
        return post.userId ===10;
    }
);
console.log(filteredPosts);

//map used to refer and change value

const mappedPosts=filteredPosts.map(
    post=>{
        return post.id *10;
    }
);
console.log(mappedPosts);

//reduce

const reducedPost = mappedPosts.reduce((sum,post)=>{
    return sum+post;
})

console.log(reducedPost)
