//console.log("node is working");
const {MerkleTree} = require('merkletreejs');
const keccak256 = require('keccak256');

let whitelistAddress = [
// Adreses should be drop here
"0x7b66ca737ca0ff6Bb4ec02f432AE8406Dd75B25e",
"0x7782f702DCE5B46208ed6457357c03E60F3A23a1",
"0x99086c597BEDB140a31E3437077333eEb884efB6"

],
  
// create the merkle tree
   leafNodes = whitelistAddress.map(addr => keccak256(addr));
   merkleTree = new MerkleTree(leafNodes, keccak256, {sortPairs:true});

console.log(leafNodes);
console.log(merkleTree);
 // get the root hash
 const rootHash = merkleTree.getRoot();
 console.log('whitelist mwerkle tree /n', merkleTree.toString());
 console.log("Root Hash:", rootHash);

 // the ClientSide 
  //const claimingAddress = leafNodes[0];
  const claimingAddress= "0x7b66ca737ca0ff6Bb4ec02f432AE8406Dd75B2R5w"

 // to get the hexProof
 const hexProof = merkleTree.getHexProof(claimingAddress);
 console.log(hexProof); 

 // to verify the hxproof
 console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));
 
