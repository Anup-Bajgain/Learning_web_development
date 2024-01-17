const friends = [
    { name: 'anup',
      height: 177,
      weight: 65,
      eye_color: "brown",
      gender: 'male' 
    },
    { name: 'toran',
    height: 160,
    weight: 53,
    eye_color: "gray",
    gender: 'male' 
   },
 
    { name: 'arun',
    height: 152,
    weight: 48,
    eye_color: "brown",
    gender: 'male' 
    },
    { name: 'abinash_g',
    height: 165,
    weight: 54,
    eye_color: "light_black",
    gender: 'male' 
    },
    { name: 'abinash_y',
    height: 174,
    weight: 78,
    eye_color: "normal_black",
    gender: 'male' 
    },
    { name: 'yogesh',
    height: 165,
    weight: 52,
    eye_color: "black",
    gender: 'male' 
    }
];

array1 = friends.map(getNameAndHeight);

function getNameAndHeight(bla){
    return [bla.name,bla.height].join(",");
}
const names = friends.map(v=> {return [v.name,v.height].join(",")})