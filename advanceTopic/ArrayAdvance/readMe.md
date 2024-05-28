const myArr=[]
# continious ,Holey 
### - SMI (small integer)
### - packed element
### - Double (float,string,function)

const arrTwo =[1, 2, 3, 4, 5]
### PACKED_DOUBLE_ELEMENT


arrTwo.push("7")
### PACKED_ELEMENTS

arrTwo[10]=11
### HOLEY_ELEMENTS

console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[19])

## Array check list
 - bound Check
 - hasOwnProperty(arrTwo,9)
 - hasOwnProperty(arrTwo.prototype, 10)
 - hasOwnProperty(Object.prototype,11)
## hole are very expensive in js

# OPTMIZATION TREE IN ARRAY
### SMI > DOUBLE > PACKED
### HOLES_SMI > HOLES_DOUBLE > HOLES_PACKED

 HOLES ARE EVERY WARE FOR,WHILE,forEach 30 varitation use holes theory