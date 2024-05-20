const cat = {
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true
}

console.log('Cat:');
for (const key in cat) {
    console.log(`${key}: ${cat[key]}`);
}