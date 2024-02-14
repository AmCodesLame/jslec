const apiUrl = 'https://catfact.ninja/fact';

async function catFact()  {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(JSON.stringify(data));
    console.log("^^")
    return data
}

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(JSON.stringify(data));
    console.log(">>")
  })
  .catch(error => {
    console.error('Error:', error);
});

console.log("REACHED")

let k = catFact();
console.log(k)

console.log("REACHED1")
