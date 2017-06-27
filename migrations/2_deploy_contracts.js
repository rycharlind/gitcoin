var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var GitToken = artifacts.require("./GitToken.sol");
var GitCrowdsale = artifacts.require("./GitToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  //deployer.autoLink();
  deployer.deploy(MetaCoin);
  deployer.deploy(GitToken, 21000000, 'GitToken', 18, 'GTT').then(function() {
    return deployer.deploy(GitCrowdsale, '0x957cbcbf9fa5f6b24e4f690ed3519c6658a302a9', 5000, 30, 1, GitToken.address);
  });

};
