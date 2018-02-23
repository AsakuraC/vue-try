const directions = [[0, 1], [1, 0], [1, 1], [1, -1]];

function checkWinner(map, site) {
	const {x, y} = site;
	const val = map[x][y];
	const computeCount = function(direction, plus) {
		var size = map.length;
		var count = 0;
		do{
			++count;
			var x_ = plus ? (x + direction[0] * count) : (x - direction[0] * count);
			var y_ = plus ? (y + direction[1] * count) : (y - direction[1] * count);
		}while(x_ > 0 && x_ < size && y_ > 0 && y_ < size && map[x_][y_] === val);
		return count - 1;
	}
	for(var direction of directions){
		if(computeCount(direction, true) + computeCount(direction, false) > 3)
			return true;
	}
	return false;
}

function deepCopy(obj){
	var nObj = {};
	nObj.next = obj.next;
	nObj.map = [];
	for(let i = 0, len = obj.map.length; i < len; i++){
		nObj.map.push([...obj.map[i]]);
	}
	return nObj;
}

export default {
	initState(state = {}, size) {
		if(typeof size !== 'number')
			size = 15;
		size = (size < 15 || size > 22) ? 15 : size;
		var map = [];
		for(let i = 0; i < size; i++){
			map.push((new Array(size)).fill(0));
		}
		state.winner = 0;
		state.history = [{
			map,
			next: 1
		}];
		return state;
	},

	clickGrid(state, site) {
		if(state.winner)
			return;
		const oldHis = state.history[state.history.length - 1];
		var newHis = deepCopy(oldHis);
		newHis.map[site.x][site.y] = newHis.next;
		if(checkWinner(newHis.map, site))
			state.winner = newHis.next;
		newHis.next = -newHis.next;
		state.history.push(newHis);
	},

	back(state) {
		if(state.winner || state.history.length < 2)
			return alert('当前无法悔棋');
		state.history.splice(state.history.length - 1, 1);
	}
}