// abi for ethpyramid contract
let abi = [
				{
					"constant": true,
					"inputs": [
						{
							"name": "",
							"type": "address"
						},
						{
							"name": "",
							"type": "address"
						}
					],
					"name": "allowance",
					"outputs": [
						{
							"name": "",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "totalSupply",
					"outputs": [
						{
							"name": "",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "",
							"type": "address"
						}
					],
					"name": "tokenBalance",
					"outputs": [
						{
							"name": "",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "symbol",
					"outputs": [
						{
							"name": "",
							"type": "string"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "buyPrice",
					"outputs": [
						{
							"name": "",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "ethervalue",
							"type": "uint256"
						},
						{
							"name": "subvalue",
							"type": "uint256"
						}
					],
					"name": "calculateDividendTokens",
					"outputs": [
						{
							"name": "tokens",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "",
							"type": "address"
						}
					],
					"name": "payouts",
					"outputs": [
						{
							"name": "",
							"type": "int256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "name",
					"outputs": [
						{
							"name": "",
							"type": "string"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "decimals",
					"outputs": [
						{
							"name": "",
							"type": "uint8"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "_owner",
							"type": "address"
						}
					],
					"name": "dividends",
					"outputs": [
						{
							"name": "amount",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "_owner",
							"type": "address"
						}
					],
					"name": "balanceOf",
					"outputs": [
						{
							"name": "balance",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "tokens",
							"type": "uint256"
						}
					],
					"name": "getEtherForTokens",
					"outputs": [
						{
							"name": "ethervalue",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [],
					"name": "sellPrice",
					"outputs": [
						{
							"name": "",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": true,
					"inputs": [
						{
							"name": "ethervalue",
							"type": "uint256"
						}
					],
					"name": "getTokensForEther",
					"outputs": [
						{
							"name": "tokens",
							"type": "uint256"
						}
					],
					"payable": false,
					"stateMutability": "view",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [],
					"name": "reinvestDividends",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [
						{
							"name": "to",
							"type": "address"
						}
					],
					"name": "withdrawOld",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"inputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "constructor"
				},
				{
					"constant": false,
					"inputs": [],
					"name": "withdraw",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [],
					"name": "sellMyTokens",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"payable": true,
					"stateMutability": "payable",
					"type": "fallback"
				},
				{
					"constant": false,
					"inputs": [],
					"name": "getMeOutOfHere",
					"outputs": [],
					"payable": false,
					"stateMutability": "nonpayable",
					"type": "function"
				},
				{
					"constant": false,
					"inputs": [],
					"name": "fund",
					"outputs": [],
					"payable": true,
					"stateMutability": "payable",
					"type": "function"
				}
			]

	window.addEventListener('load', function() {
		// check for metamask
		if ( typeof web3 !== 'undefined' ) {
			var provider = new Web3(web3.currentProvider);
			var account = web3.eth.accounts[0];

			// get the list of contracts and display info
			stocknames.forEach( function(e, i) {
				var stockcard = addcard();
				getStockValues(addrs[i], stockcard);
				stockcard.querySelector(".stockname").innerHTML = '<a href="https://etherscan.io/address/' + addrs[i] + '">' + e + '</a>';
				stockcard.querySelector(".symbol").className = 'symbol oi' + ' oi-' + symbols[i];
				stockcard.querySelector(".btnBuy").setAttribute("data-addr", addrs[i]);
				stockcard.querySelector(".btnBuy").addEventListener("click", function(e) {
					buystock(this.dataset.addr);
				});

				var decks = document.getElementsByClassName("card-deck");
				var lastdeck = decks[decks.length - 1];
				var cards = lastdeck.getElementsByClassName("card");
				if (cards.length == 4) {
					var newdeck = document.createElement("div");
					newdeck.className = 'card-deck mb-3 text-center';
					newdeck.appendChild(stockcard);
					document.querySelector(".deck-wrapper").appendChild(newdeck);
				} else {
					lastdeck.appendChild(stockcard);
				}
			});
		} else {
			console.log('No MetaMask');
		}
	});
	
	// fires when different sorting method is chosen
	document.getElementById("sortby").addEventListener("change", function(e) {
		var cards = document.getElementsByClassName("card");
		cards = Array.prototype.slice.call(cards, 0);

		switch (this.value) {
			case "name":
				cards.sort(function(a, b) {
					var nameA = a.querySelector(".stockname").textContent.toUpperCase();
					var nameB = b.querySelector(".stockname").textContent.toUpperCase();
					if (nameA < nameB)
						return -1;
					if (nameA > nameB)
						return 1;
					return 0;
				});
				break;
			case "price":
				cards.sort(function(a, b) {
					var priceA = a.querySelector(".buyprice").textContent;
					var priceB = b.querySelector(".buyprice").textContent;
					return priceA - priceB;
				});
				break;
			case "share":
				cards.sort(function(a, b) {
					var priceA = a.querySelector(".shares").textContent;
					var priceB = b.querySelector(".shares").textContent;
					return priceA - priceB;
				});
				break;
			case "cap":
				cards.sort(function(a, b) {
					var priceA = a.querySelector(".cap").textContent;
					var priceB = b.querySelector(".cap").textContent;
					return priceA - priceB;
				});
				break;
		}
		redraw(cards);
	});
	
	// redraw using the given cards
	function redraw(items) {
		var topdiv = document.querySelector(".deck-wrapper");
		
		// clear current display
		while (topdiv.lastChild) {
			topdiv.removeChild(topdiv.lastChild);
		}
		// add single deck
		var topdeck = document.createElement("div");
		topdeck.className = 'card-deck mb-3 text-center';
		topdiv.appendChild(topdeck);

		items.forEach( function(e, i) {
			var decks = document.getElementsByClassName("card-deck");	
			var lastdeck = decks[decks.length - 1];
			var cards = lastdeck.getElementsByClassName("card");
			if (cards.length == 4) {
				var newdeck = document.createElement("div");
				newdeck.className = 'card-deck mb-3 text-center';
				newdeck.appendChild(e);
				topdiv.appendChild(newdeck);
			} else {
				lastdeck.appendChild(e);
			}
		});
	}
	
	// create a blank stock card
	function addcard() {
		var cardhtml = '<div class="card-header">\n' +
				'<h4 class="font-weight-normal"><span class="symbol oi" title="" aria-hidden="true"></span> <span class="stockname"></span></h4>\n' +
			  '</div>\n' +
			  '<div class="card-body">\n' +
				'<h2 class="card-title"><span class="buyprice"></span> <small class="text-muted">ETH</small></h2>\n' +
				'<ul class="list-unstyled mt-3 mb-4">\n' +
				  '<li><strong>Total Shares: </strong><span class="shares"></span> <small class="text-muted">EPY</small></li>\n' +
				  '<li><strong>Market Cap: </strong><span class="cap"></span> <small class="text-muted">ETH</small></li>\n' +
				'</ul>\n' +
				'<button type="button" class="btn btn-block btn-primary btnBuy">Buy</button>\n' +
			  '</div>\n'
		var carddiv = document.createElement("div");
		carddiv.className = 'card mb-4 box-shadow';
		carddiv.innerHTML = cardhtml;
		return carddiv;
	}

	// get contract information and fill in the stock card
	function getStockValues(address, card) {

		var contract = web3.eth.contract(abi).at(address);

		contract.buyPrice(function(e, r) {
			let buyPrice = (1 / (convertWeiToEth(r) * .9) / 1000000).toFixed(6);
			card.querySelector(".buyprice").innerHTML = buyPrice;
		});

		contract.totalSupply(function(e, r) {
			let totalSupply = (r / 1e18 * 1000).toFixed(4);
			card.querySelector(".shares").innerHTML = totalSupply;
		});
		
		web3.eth.getBalance(contract.address, function(e, r) {
			let marketCap = convertWeiToEth(r).toFixed(4);
			card.querySelector(".cap").innerHTML = marketCap;
		});

	}

	function convertEthToWei(e) {
		return 1e18 * e
	}

	function convertWeiToEth(e) {
		return e / 1e18
	}

	// fires when buy button is clicked
	function buystock(address){
		var n = prompt("How much ETH?");
		var contract = web3.eth.contract(abi).at(address);
		contract.fund({value: convertEthToWei(n)}, function(e, r) {});
	}