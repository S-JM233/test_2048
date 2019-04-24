var arr=[
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,0,0,0]
];
window.onload = function(){
	var interface = document.getElementById("interface");
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			var new_div = document.createElement("div");
			new_div.id="c"+i+j;
			new_div.className = "cell";
			interface.appendChild(new_div);
		}
	}
	for(var i=0;i<2;i++){
		random();
	}
}
function random(){
	if(isFull()){return};
	var randx = parseInt(Math.floor(Math.random()*4));
    var randy = parseInt(Math.floor(Math.random()*4));
    if(arr[randx][randy] == 0){
    	var randnum = document.getElementById("c"+randx+randy);
    	arr[randx][randy] = Math.random()<0.75?"2":"4";
    	randnum.innerHTML = arr[randx][randy];
    	randnum.className +=" fadeOut" + " n"+arr[randx][randy];
    }else{
    	random();
    }
}
function isFull(){
	for(var i=0;i<4;i++){
		for(var j=0;j<4;j++){
			if(arr[i][j]==0){
				return false;
			}
		}
	}
	return true;
}
/***************************************/
function moveLeft(){
	if(canLeft()){
		for(var row=0;row<4;row++){
			moveLeftInRow(row);
		}
		random();
	}
}
function canLeft(){
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if(arr[i][j]!=0){
				if(arr[i][j-1]==0||arr[i][j-1] == arr[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
function moveLeftInRow(row){
	for(var col=0;col<3;col++){
		var nextCol = getFirstRight(row,col);
		if(nextCol == -1){
			break;
		}else{
			var cid = document.getElementById("c"+row+col);
			var cidNext = document.getElementById("c"+row+nextCol);
		   	if(arr[row][col] == 0){
		   		arr[row][col] = arr[row][nextCol];
		   		cid.className = "cell n" + arr[row][nextCol];
				cid.innerHTML = arr[row][nextCol];
				arr[row][nextCol] = 0;
				cidNext.className = "cell";
				cidNext.innerHTML = "";
				col--;
				/*RecordMove(""+row+nextCol,""+row+col);*/
				/*cidNext.style.cssText = "transition:all 0.5s;left:"+getByClass(cid,"left");*/
			}else if(arr[row][col] == arr[row][nextCol]){
				arr[row][col]*= 2;
				cid.className = "cell n" + arr[row][col];
				cid.innerHTML = arr[row][col];
				arr[row][nextCol] = 0;
				cidNext.className = "cell";
				cidNext.innerHTML = "";
				/*cidNext.style.cssText = "transition:all 0.5s;left:"+getByClass(cid,"left");*/
			}
		}
	}
} 
function getFirstRight(row,col){
	for(var i = col+1;i<4;i++){
		if(arr[row][i] != 0){
			return i;
		}
	}
	return -1;
}
/******************************************/
function moveRight(){
	if(canRight()){
		for(var row=0;row<4;row++){
			moveRightInRow(row);
		}
		random();
	}
}
function canRight(){
	for(var i=0;i<4;i++){
		for(var j=2;j>=0;j--){
			if(arr[i][j]!=0){
				if(arr[i][j+1]==0||arr[i][j+1] == arr[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
function moveRightInRow(row){
	for(var col=3;col>0;col--){
		var nextCol = getFirstLeft(row,col);
		if(nextCol == -1){
			break;
		}else{
			var cid = document.getElementById("c"+row+col);
			var cidNext = document.getElementById("c"+row+nextCol);
		   	if(arr[row][col] == 0){
		   		arr[row][col] = arr[row][nextCol];
		   		cid.className = "cell n" + arr[row][nextCol];
				cid.innerHTML = arr[row][nextCol];
				arr[row][nextCol] = 0;
				cidNext.className = "cell";
				cidNext.innerHTML = "";
				col++;
			}else if(arr[row][col] == arr[row][nextCol]){
				arr[row][col]*= 2;
				cid.className = "cell n" + arr[row][col];
				cid.innerHTML = arr[row][col];
				arr[row][nextCol] = 0;
				cidNext.className = "cell";
				cidNext.innerHTML = "";
			}
		}
	}
} 
function getFirstLeft(row,col){
	for(var i = col-1;i>=0;i--){
		if(arr[row][i] != 0){
			return i;
		}
	}
	return -1;
}
/******************************************/
function moveUp(){
	if(canUp()){
		for(var col=0;col<4;col++){
			moveUpInRow(col);
		}
		random();
	}
}
function canUp(){
	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
			if(arr[i][j]!=0){
				if(arr[i-1][j]==0||arr[i-1][j] == arr[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
function moveUpInRow(col){
	for(var row=0;row<3;row++){
		var nextRow = getFirstDown(row,col);
		if(nextRow == -1){
			break;
		}else{
			var cid = document.getElementById("c"+row+col);
			var cidNext = document.getElementById("c"+nextRow+col);
		   	if(arr[row][col] == 0){
		   		arr[row][col] = arr[nextRow][col];
		   		cid.className = "cell n" + arr[nextRow][col];
				cid.innerHTML = arr[nextRow][col];
				arr[nextRow][col] = 0;
				cidNext.className = "cell";
				cidNext.innerHTML = "";
				row--;
			}else if(arr[row][col] == arr[nextRow][col]){
				arr[row][col]*= 2;
				cid.className = "cell n" + arr[row][col];
				cid.innerHTML = arr[row][col];
				arr[nextRow][col] = 0;
				cidNext.className = "cell";
				cidNext.innerHTML = "";
			}
		}
	}
} 
function getFirstDown(row,col){
	for(var i = row+1;i<4;i++){
		if(arr[i][col] != 0){
			return i;
		}
	}
	return -1;
}
/******************************************/
function moveDown(){
	if(canDown()){
		for(var col=0;col<4;col++){
			moveDownInRow(col);
		}
		random();
	}
}
function canDown(){
	for(var i=2;i>=0;i--){
		for(var j=0;j<4;j++){
			if(arr[i][j]!=0){
				if(arr[i+1][j]==0||arr[i+1][j] == arr[i][j]){
					return true;
				}
			}
		}
	}
	return false;
}
function moveDownInRow(col){
	for(var row=3;row>0;row--){
		var nextRow = getFirstUp(row,col);
		if(nextRow == -1){
			break;
		}else{
			var cid = document.getElementById("c"+row+col);
			var cidNext = document.getElementById("c"+nextRow+col);
		   	if(arr[row][col] == 0){
		   		arr[row][col] = arr[nextRow][col];
		   		cid.className = "cell n" + arr[nextRow][col];
				cid.innerHTML = arr[nextRow][col];
				arr[nextRow][col] = 0;
				cidNext.className = "cell";
				cidNext.innerHTML = "";
				row++;
			}else if(arr[row][col] == arr[nextRow][col]){
				arr[row][col]*= 2;
				cid.className = "cell n" + arr[row][col];
				cid.innerHTML = arr[row][col];
				arr[nextRow][col] = 0;
				cidNext.className = "cell";
				cidNext.innerHTML = "";
			}
		}
	}
}
function getFirstUp(row,col){
	for(var i = row-1;i>=0;i--){
		if(arr[i][col] != 0){
			return i;
		}
	}
	return -1;
}
/******************************************/
document.onkeydown = function(event){
	var event=window.event||arguments[0];//||经常用于解决浏览器兼容性问题
	if(event.keyCode==37){
		moveLeft();
	}else if(event.keyCode==38){
		moveUp();
	}else if(event.keyCode==39){
		moveRight();
	}else if(event.keyCode==40){
		moveDown();
	}
}
//获取行间样式
/*function getByClass(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}*/
/*var task = [];
var interval = 10;
function RecordMove(source,target){
	console.log(source+","+target);
	var sourceDiv = document.getElementById("c"+source);
	var targetDiv = document.getElementById("c"+target);
	var topStep = (parseInt(getByClass(sourceDiv,"top"))-parseInt(getByClass(targetDiv,"top")))/10;
	var leftStep = (parseInt(getByClass(sourceDiv,"left"))-parseInt(getByClass(targetDiv,"left")))/10;
	task.push([sourceDiv,topStep,leftStep]);
}
function animation(){
	var timer = setInterval(function(){
		for(var i=0;i<task.length;i++){
			moveStep(i);
		}
	},interval);
}*/