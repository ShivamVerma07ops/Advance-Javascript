var arr = [45, 56, 67, 45, 67,29];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum += arr[i];
}
console.log(sum);
let avg = sum/5;
console.log(avg);
let count=0;
for (let i = 0; i < arr.length; i++) {
if(arr[i]>=60){
count+=1;
}
}
console.log(count);
for (let i = 0; i < arr.length; i++) {
if(arr[i]<30){
console.log(arr[i]);
}
}
for (let i = 0; i < arr.length; i++) {
if(arr[i]<80 && arr[i]>60){
console.log(arr[i]);
}
}