var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var GitToken = artifacts.require("./GitToken.sol");
var GitCrowdsale = artifacts.require("./GitToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(GitToken, 21000000, 'GitToken', 18, 'GTT').then(function() {
    return deployer.deploy(GitCrowdsale, '0x3b86ce15ea5ea016d554e6a656b2df79c0f54c85', 5000, 30, 1, GitToken.address);
  });

};
