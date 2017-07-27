let stuff = [ {"task":"write XYZ report","priority":1},
	      {"task":"record db video","priority":1},
	      {"task":"go to costco","priority":3},
	      {"task":"call sister re. vacation","priority":2}];

let tasks = stuff.map( (item) => {
	return item.task;
});

console.log(tasks);



