const family = [
  {
    name: "Tanay",
    haveCycle: true
  },
  {
    name: "Akanksha",
    haveCycle: false
  },
  {
    name: "Tanvi",
    haveCycle: true
  },
  {
    name: "Kanak",
    haveCycle: false
  }
];

// Your output should be: ['Tanay', 'Tanvi']
//Get the names in an
// array for only those who have a cycle.

// const getCycle = family => family.haveCycle == true;

// const getMembersWithCycle = family => family.reduce((acc, currentMember) =>
//   currentMember.haveCycle ? [...acc, currentMember.name] : acc ,[]);

// const getMembersWithCycle = family => family.reduce((acc, currentMember) =>  currentMember.haveCycle ? [...acc, currentMember.name] : acc ,[]);
// console.log(getMembersWithCycle(family));

// family.map((familyMember) => {
//    if(familyMember.haveCycle== true){
//      console.log([familyMember.name])
//    }
// })

// const haveCycle = family.filter(
//   (familyMember) => familyMember.haveCycle == true
// );

// haveCycle.map((each) => {
//   console.log(each);
// });
