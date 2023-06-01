let blockList = [{userName: "John",
 reason:"Abusive",
},
{userName:"Nicks",
reason:"18+",
}
]
console.log(blockList);
console.log(blockList[0]);
console.log("********");
blockList.forEach((e) => {
  console.log(e);
})
console.log("******");
blockList.forEach((e) => {
  console.log(e.reason);
})