/*
Assessment Requirements
1. Create a variable that can hold a number of IIFT's. What type of variable might this be?
2. Create an object inside your mintiFT function that will hold the metadata for your INFTS. The metadata values will be passed to the function as parameters. When the IFT is ready, you will store it in the variable you created in step 1
3. Your listlIFTs() function will print all of your IFTs metadata to the console (1.e. console.log("Hame:"someFT.name))
4. For good measure, getTotalSupply() should return the number of IIFT's you have created
*/
// create a variable to hold your NFT's
const NFTs = []
// this function will take in some values as parameters, create an
//NFT object using the parameters passed to it for its metadata,
// and store it in the variable above.

function mintNFT (_name,_type, _power,_price) { 
    const NFT = {
         "name": _name,
          "type": _type, 
          "power": _power,
          "price": _price,
        }
        NFTs.push(NFT);
        console.log("Minted: "+_name);
}
// create a "loop" that will go through an "array" of NFT's 
// and print their metadata with console.log()
function listNFTs () {
 for(let i=0;i < NFTs.length; i++) {
       console.log("\nID: \t\t"+ (i+1)); 
       console.log("Name: \t\t"+ NFTs[i].name); 
       console.log("Type: \t\t"+ NFTs[i].type); 
       console.log("Power: \t\t"+ NFTs[i].power);
       console.log("Price: \t\t"+ NFTs[i].price);
    }
 }
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log("\nTotal Supply:"+ NFTs.length);
}
// call your functions below this line
mintNFT("XUV700", "SUV", "200", "40000");
mintNFT("CIVIC", "SEDAN", "200", "48000"); 
mintNFT("VELLFIRE", "MPV", "250", "250000");
mintNFT("M8", "SPORT", "350", "250000");
listNFTs();
getTotalSupply();
