
(Stack1 = {
    web3Provider: null,
    contracts: {},
    account: "0x0",
    render: function () {
        if (typeof web3 !== "undefined") {
            Stack1.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            Stack1.web3Provider = new Web3(
                new Web3.providers.HttpProvider("http://127.0.0.1:7545")
            );
            web3 = new Web3(Stack1.web3Provider);
        }

        $.ajaxSetup({ async: false });
        $.getJSON("UserInfo.json", function (i) {
            //Instantiate a new truffle contract from the artifact
            Stack1.contracts.UserInfo = TruffleContract(i);
            //connect provider to interact with contract
            Stack1.contracts.UserInfo.setProvider(Stack1.web3Provider);
        });

        Stack1.contracts.UserInfo.deployed()
            .then(function (instance) {
                UserInfoInstance = instance;
                return UserInfoInstance.userCount();
            })
            .then(function (count) {
                var candidatesResults = $("#select");
                candidatesResults.empty();
                count = count.toNumber();
                for (var i = count + 1; i <= 10; i++) {
                    var dropdown = document.getElementById("select");
                    var opt = document.createElement("option");
                    opt.text = i;
                    opt.value = i;
                    dropdown.options.add(opt);
                }
            });
    },




    addStackholder: function () {
        if (typeof web3 !== "undefined") {
            Stack1.web3Provider = web3.currentProvider;
            web3 = new Web3(web3.currentProvider);
        } else {
            Stack1.web3Provider = new Web3(
                new Web3.providers.HttpProvider("http://127.0.0.1:7545")
            );
            web3 = new Web3(Stack1.web3Provider);
        }

        $.ajaxSetup({ async: false });
        $.getJSON("UserInfo.json", function (i) {
            //Instantiate a new truffle contract from the artifact
            Stack1.contracts.UserInfo = TruffleContract(i);
            //connect provider to interact with contract
            Stack1.contracts.UserInfo.setProvider(Stack1.web3Provider);
        });

        Stack1.contracts.UserInfo.deployed().then(function (instance) {
        })

    },
}),




$(document).on('submit', 'form.remember', function () {
    var address = $('#select').val();
    var Name = $("#Name").val();
    var Email = $("#Email").val();
    var License = $("#License").val();
    var Contact = $("#Contact").val();
    var Role = $("#Role").val();
    console.log(address);
    console.log(Name);
    console.log(Email);
    console.log(License);
    console.log(Contact);
    console.log(Role);
});