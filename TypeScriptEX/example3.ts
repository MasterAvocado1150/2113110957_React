let number: number[] = [10, 20, 30, 40, 50];
console.log(number[2]);

//array ตการใช้งานloop
let names:string[] = ['Alice', 'Bob', 'Charlie'];
for(let name of names){
    console.log(name);
}

let fruits: string[] = ['Apple','Banana'];  //ตั้งค่า array
fruits.push('Orange'); //เพิ่มเข้าไปใน array fruits
console.log(fruits);
fruits.pop();
console.log(fruits);
