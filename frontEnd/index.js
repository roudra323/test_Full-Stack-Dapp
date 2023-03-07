const { ethers, providers } = require("ethers");

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
    await ethereum.request({ method: "eth_requestAccounts" });
  }
}

async function execute() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const { abi } = require("../artifacts/contracts/Counter.sol/Counter.json");
  const provider = new providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, signer);

  await contract.inc();
  console.log(contract.prcount());
}

module.exports = {
  connect,
  execute,
};
