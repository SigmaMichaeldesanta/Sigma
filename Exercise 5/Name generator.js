function generateRandomName() {
    // Define variables for each word category
    const adjective = Math.random() < 1/3 ? "crazy" : (Math.random() < 1/3 ? "Amazing" : "Fire");
    const shopName = Math.random() < 1/3 ? "Engines" : (Math.random() < 1/3 ? "Foods" : "Garments");
    const lastWord = Math.random() < 1/3 ? "Bros" : (Math.random() < 1/3 ? "Limited" : "Hub");
  
    // Combine the words and return the random name
    return `${adjective} ${shopName} ${lastWord}`;
  }
  
  // Call the function and display the generated name
  const randomName = generateRandomName();
  console.log(randomName);
