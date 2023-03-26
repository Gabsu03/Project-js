// create a variable to hold your NFT's
for(var i=i; i<5; i++){
    console.log(i);
}
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let numberofNFTs = 0;
function mintNFT(name, description, image) {
    let newNFT = {
        name: name,
        description: description,
        image: image,

    };
    nfts.push(newNFT);
    numberofNFTs++;
    return newNFT;

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < nfts.length; i++){
        console.log ("Name: " + nfts[i].name);
        console.log ("Description: " + nfts[i].description);
        console.log ("Image: " + nfts[i].image);
        console.log ("\n")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply () {
    return numberofNFTs;
}

let nfts = [];

// call your functions below this line
let myNFT1 = mintNFT("Naruto Uzumaki", "Fire, Water, Wind, Lightning, and, Earth", "https://example.com/naruto.png")
let myNFT2 = mintNFT("Sasuke Uchiha", "Lightning, Fire, Water, Wind, and, Earth", "https://example.com/sasuke.png")
let myNFT3 = mintNFT("Kakashi Hatake", "Fire, Water, Wind, and, Earth", "https://example.com/kakashi.png")
let myNFT4 = mintNFT("Sakura Haruno", "Earth, Water, Yin and, Yang", "https://example.com/sakura.png")
let myNFT5 = mintNFT("Hinata Hyuga", "Fire and, Lightning", "https://example.com/hinata.png")

listNFTs();

let totalNFTs = getTotalSupply();
console.log("Total NFTs: " + totalNFTs);
