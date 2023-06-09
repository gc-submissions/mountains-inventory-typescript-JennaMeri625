interface Mountain {
  name: string,
  height: number
}

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  { 
    name: "Everest", 
    height: 29029, 
  },
  {
    name: "Denali",
    height: 20310,
  },
];

export function findNameOfTallestMountain(arrayOfMountains:Mountain[]): string {
    //ABOVE --- export function is preferred for ease vs exporting all at bottom of file
    //ARRAY: we want whatever array that comes in to be type 'Mountain'
    //:string - string is specified as what is being returned

    let highestMountain: Mountain = arrayOfMountains[0];

    //compare first mountain in array to the others

    for (let mountain of mountains) {
      //multiple loops can be used to solve
      if(mountain.height > highestMountain.height) {
        highestMountain = mountain;
      }
    }
    return highestMountain.name;
}

let highest = findNameOfTallestMountain(mountains);
console.log(highest);
