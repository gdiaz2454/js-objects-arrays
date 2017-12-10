//Question1
function currentdate(mm,dd,yyyy){
  this.mm = mm;
  this.dd = dd;
  this.yy = yyyy;
  this.currentdate = function(){
    console.log(this.mm + "/" + this.dd + "/" + this.yy);
  }
}
//Question2
function leapyear(year){
  if(year % 4 === 0){
    console.log("leap")
  }
  else{
    console.log("not leap")
  }
}
//Question3
var numbers = [1,2,3,4,5];
for (var i=0; i < numbers.length; i++){
  console.log((numbers[i]) = numbers[i]);
  consecutive = numbers;
}
//Question4
var nums = [1,1,2,3,3,4,5];
for (var i=0; i < nums.length; i++){
  if (nums[i] === nums[i+1])
  console.log(nums[i])
}
//Question5
var num = [7,9,0,-2];
function result(num,n){
  for (i=0; i < n ; i++){
    console.log(num[i])
}
}
//Question6
var mycolor = ["red","green","white","black"];
var mystring = function (mycolor){
  for(i=0; i < 2; i++){
    console.log(mycolor[i].concat(i+1))
  }
}
//Question7
var b = ["l","l","s","e"];
function j (b){
  var g =[]
  for (i=0; i < b.length; i++){
    if (g.includes(b[i])){
      counter = +1
    }
    else {g.append(b[i])}
  }
}
//Question8
var color = ["Blue","Green","Red","Orange","Violet","Indigo","Yellow"];
var o = ["st","nd","rd","th"];
function both (color,o){
  for (i=0; i < o.length; i++){
    console.log(o[i].concat(color[i]))
  }
}
both(o,color)
