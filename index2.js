console.log ("index2.js");
let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
let p=[]
arr.forEach((f,i) => {
p[i]=0.13*f**3-2.5*f+8;
});
console.log(p);