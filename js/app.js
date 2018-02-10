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
			
	var stockcards=new Array(stocknames.length);

	window.addEventListener('load', function() {			
		// check for metamask
		if ( typeof web3 !== 'undefined' ) {
			var provider = new Web3(web3.currentProvider);
			web3.eth.getAccounts(function(error, accounts) {
				// check if user is logged into metamask
				if (accounts.length == 0){
					document.getElementById("metamask-login").style.display = "block";
				} else {
					web3.eth.defaultAccount = accounts[0];
				}
			});

			// get the list of contracts and display info
			stocknames.forEach( function(e, i) {
				// create a card and fill out info
				var stockcard = addcard(i);
				stockcards[i]=stockcard;
				getStockValues(addrs[i], stockcard, i);
				stockcard.querySelector(".stockname").innerHTML = '<a href="https://etherscan.io/address/'+addrs[i]+'" class="tooltipx"><span><canvas id="marketcanvas-'+i+'" style="float:right"></canvas></span>'+e+'</a>';
				stockcard.querySelector(".symbol").className = 'symbol oi' + ' oi-' + symbols[i];
				stockcard.querySelector(".btnBuy").addEventListener("click", function(e) { buystock(addrs[i]);	});
				stockcard.querySelector(".btnSell").addEventListener("click", function(e) { sellstock(addrs[i]); });
				stockcard.querySelector(".btnReinvest").addEventListener("click", function(e) { reinvest(addrs[i]); });
				stockcard.querySelector(".btnWithdraw").addEventListener("click", function(e) { withdraw(addrs[i]); });
				stockcard.querySelector(".btnGTFO").addEventListener("click", function(e) { GTFO(addrs[i]); });

				// create card-deck as necessary and add cards to it
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
			// show user's stock values
			document.getElementById("accntStats").style.display = "block";
			
			setInterval(tableupdate, 1001);
			updatepump();
			updategraphs();
			
		} else {
			document.getElementById("no-metamask").style.display = "block";
		}
	});
	
	function updategraphs(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				var lines=xhr.responseText.split("\r\n");
				
				var charts=new Array(stocknames.length);
				for(var i=0;i<stocknames.length;i++)charts[i]=new Array(0);
				var times=new Array(lines.length);
				for(var i=0;i<lines.length-1;i++){
					var data=lines[i].split(' ');
					var convert=new Date(data[0]*1000);
					
					var hours = convert.getHours();
					var minutes = "0" + convert.getMinutes();
					
					times[i]=hours+":"+minutes.substr(-2);
					
					for(var j=0;j<stocknames.length;j++)charts[data[1+j*2]].push(data[2+j*2]);
				}
				
				for(var i=0;i<stocknames.length;i++){
					var config = {
						type: 'line',
						data: {
							labels: times,
							datasets: [{
								label: stocknames[i],
								backgroundColor: window.chartColors.red,
								borderColor: window.chartColors.red,
								data: charts[i],
								fill: false,
							}]
						},
						options: {
							responsive: true,
							tooltips: {
								mode: 'index',
								intersect: false,
							},
							hover: {
								mode: 'nearest',
								intersect: true
							},
							scales: {
								xAxes: [{
									display: true,
								}],
								yAxes: [{
									display: true,
								}]
							}
						}
					};
					
					var ctx = document.getElementById("marketcanvas-"+i).getContext("2d");
					window.myLine = new Chart(ctx, config);
				}
			}
		}
		xhr.open('GET', 'graphdata.txt', true);
		xhr.send(null);
	}
	
	var pumpadr;
	var pumpname;
	var pumpbuy;
	var pumpsell;
	var pumpcap;
	var timesync;
	var timenext;
	var timeend;
	
	function leftpad(string,pad,length) {
		return (new Array(length+1).join(pad)+string).slice(-length);
	}
	
	function updatepump(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == XMLHttpRequest.DONE) {
				var data=xhr.responseText.replace('<',' ').split(' ',4);
				timesync=(new Date().getTime()/1000)-data[0];
				timeend=data[2];
				timenext=data[3];
				pumpadr=data[1];
				
				pumpname="";
				for(var i=0;i<addrs.length;i++)if(addrs[i]==data[1])pumpname=stocknames[i];
			}
		}
		xhr.open('GET', 'pump.php', true);
		xhr.send(null);
	}
	
	function tableupdate(){

		stockcards.forEach(function(e,i){getStockValues(addrs[i],e,i);});
		
		var pumpdiv=document.getElementById("pump");
		
		var timeleft=timeend-(new Date().getTime()/1000)+timesync;
		
		if(timeleft>0){
			var minutes = leftpad(Math.floor(timeleft / 60),'0',2);
			var seconds = leftpad(Math.floor(timeleft % 60),'0',2);
			
			pumpdiv.innerHTML="<a href='https://etherscan.io/address/"+pumpadr+"'><h6>"+pumpname+"</h6></a><br>";
			pumpdiv.innerHTML+="Buy cost: "+pumpbuy+" ETH<br>";
			pumpdiv.innerHTML+="Sell cost: "+pumpsell+" ETH<br>";
			pumpdiv.innerHTML+="Market cap: "+pumpcap+" ETH<br>";
			pumpdiv.innerHTML+='<center><button type="button" class="btn btn-block btn-primary btnBuy" style="background-color: #4CAF50;width:100px">Buy</button></center>';
			pumpdiv.innerHTML+="Time remaining: "+minutes+":"+seconds+"<br>";
			
			pumpdiv.querySelector(".btnBuy").addEventListener("click", function(e) { buystock(pumpadr); });
		}else{
			timeleft=timenext-(new Date().getTime()/1000)+timesync;
			
			if(timeleft<0)updatepump();
			else{
				var hours = Math.floor(timeleft / 3600);
				var minutes = leftpad(Math.floor((timeleft % 3600)/60),'0',2);
				var seconds = leftpad(Math.floor((timeleft % 3600) % 60),'0',2);
				
				pumpdiv.innerHTML="Next pump: "+hours+":"+minutes+":"+seconds;
			}
		}

		var totals = { shares : 0, value: 0, divs: 0 };
		stockcards.forEach( function(c, i) {
			var share = parseFloat(c.querySelector(".usershares").textContent);
			var val = parseFloat(c.querySelector(".uservalue").textContent);
			var div = parseFloat(c.querySelector(".dividends").textContent);
			
			if (!isNaN(share)) totals.shares += share;
			if (!isNaN(val)) totals.value += val;
			if (!isNaN(div)) totals.divs += div;
		});
		
		document.getElementById("totShare").innerHTML = totals.shares.toFixed(4);
		document.getElementById("totVal").innerHTML = totals.value.toFixed(4);
		document.getElementById("totDiv").innerHTML = totals.divs.toFixed(4);

	}
	
	// fires when different sorting method is chosen
	function sort(e) {
		var cards = document.getElementsByClassName("card");
		cards = Array.prototype.slice.call(cards, 0);
		
		var sortby=document.getElementById("sortby");
		var ascdesc=document.getElementById("ascdesc");
		
		var sort=sortby.options[sortby.selectedIndex].value;
		var order=ascdesc.options[ascdesc.selectedIndex].value;

		console.log("SORT BY "+sort+" "+order);
		switch (sort) {
			case "name":
				cards.sort(function(a, b) {
					var nameA = a.querySelector(".stockname").textContent.toUpperCase();
					var nameB = b.querySelector(".stockname").textContent.toUpperCase();
					console.log("HERE "+order);
					if(order=='ascent'){
						if (nameA < nameB)return -1;
						if (nameA > nameB)return 1;
					}else{
						if (nameA > nameB)return -1;
						if (nameA < nameB)return 1;
					}
					return 0;
				});
				break;
			case "price":
				cards.sort(function(a, b) {
					var priceA = a.querySelector(".buyprice").textContent;
					var priceB = b.querySelector(".buyprice").textContent;
					if(order=='ascent')return priceA - priceB;
					return priceB-priceA;
				});
				break;
			case "share":
				cards.sort(function(a, b) {
					var priceA = a.querySelector(".shares").textContent;
					var priceB = b.querySelector(".shares").textContent;
					if(order=='ascent')return priceA - priceB;
					return priceB-priceA;
				});
				break;
			case "cap":
				cards.sort(function(a, b) {
					var priceA = a.querySelector(".cap").textContent;
					var priceB = b.querySelector(".cap").textContent;
					if(order=='ascent')return priceA - priceB;
					return priceB-priceA;
				});
				break;
			case "usershares":
				cards.sort(function(a, b) {
					var priceA = a.querySelector(".usershares").textContent.replace('<b>','').replace('</b>','');
					var priceB = b.querySelector(".usershares").textContent.replace('<b>','').replace('</b>','');
					if(order=='ascent')return priceA - priceB;
					return priceB-priceA;
				});
				break;
			case "dividends":
				cards.sort(function(a, b) {
					var priceA = a.querySelector(".dividends").textContent.replace('<b>','').replace('</b>','');
					var priceB = b.querySelector(".dividends").textContent.replace('<b>','').replace('</b>','');
					if(order=='ascent')return priceA - priceB;
					return priceB-priceA;
				});
				break;
			case "uservalue":
				cards.sort(function(a, b) {
					var priceA = a.querySelector(".uservalue").textContent.replace('<b>','').replace('</b>','');
					var priceB = b.querySelector(".uservalue").textContent.replace('<b>','').replace('</b>','');
					if(order=='ascent')return priceA - priceB;
					return priceB-priceA;
				});
				break;
		}
		redraw(cards);
	}
	
	document.getElementById("sortby").addEventListener("change", sort);
	document.getElementById("ascdesc").addEventListener("change", sort);
	
	// mystocks checkbox filter
	document.getElementById("mystocks").addEventListener("change", function(e) {
		if (e.target.checked) {
			redraw(stockcards.filter(function(card) {
				return card.mine;
			}));
		} else {
			redraw(stockcards);
		}
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
	function addcard(i) {
		var cardhtml = '<div class="card-header">\n' +
				'<h4 class="font-weight-normal"><span class="symbol oi" title="" aria-hidden="true"></span> <span class="stockname"></span></h4>\n' +
			  '</div>\n' +
			  '<div class="card-body">\n' +
				'<h2 class="card-title"><span class="buyprice"></span> <small class="text-muted">ETH</small></h2>\n' +
				'<ul class="list-unstyled mt-3 mb-4">\n' +
				  '<li><strong>Total Shares: </strong><span class="shares"></span> <small class="text-muted">EPY</small></li>\n' +
				  '<li><strong>Market Cap: </strong><span class="cap"></span> <small class="text-muted">ETH</small></li>\n' +
				  '<li><strong>Buy cost: </strong><span class="buycost"></span> <small class="text-muted">ETH</small></li>\n' +
				  '<li><strong>Sell cost: </strong><span class="sellcost"></span> <small class="text-muted">ETH</small></li>\n' +
				  '<li><strong>Your shares: </strong><span class="usershares"></span> <small class="text-muted">EPY</small></li>\n' +
				  '<li><strong>Share value: </strong><span class="uservalue"></span> <small class="text-muted">ETH</small></li>\n' +
				  '<li><strong>Dividends: </strong><span class="dividends"></span> <small class="text-muted">ETH</small></li>\n' +
				'</ul>\n' +
				'<button type="button" class="btn btn-block btn-primary btnBuy" style="background-color: #4CAF50">Buy</button>\n'+
				'<button type="button" class="btn btn-block btn-primary btnSell" style="background-color: #f44336">Sell</button>\n'+
				'<button type="button" class="btn btn-block btn-primary btnReinvest" style="background-color: #ff9800">Reinvest</button>\n'+
				'<button type="button" class="btn btn-block btn-primary btnWithdraw" style="background-color: #008CBA">Withdraw</button>\n'+
				'<button type="button" class="btn btn-block btn-primary btnGTFO">Get out</button>\n'+
			  '</div>\n';

		var carddiv = document.createElement("div");
		carddiv.id = "stock" + i;
		carddiv.className = 'card border-dark mb-2 box-shadow';
		carddiv.innerHTML = cardhtml;
		return carddiv;
	}

	// get contract information and fill in the stock card
	function getStockValues(address, card, index) {

		var contract = web3.eth.contract(abi).at(address);

		contract.buyPrice(function(e, r) {
			let buyPrice = (1 / (convertWeiToEth(r) * .9) / 1000000).toFixed(6);
			card.querySelector(".buyprice").innerHTML = buyPrice;
			card.querySelector(".buycost").innerHTML = buyPrice;
			
			if(address==pumpadr)pumpbuy=buyPrice;
		});

		contract.totalSupply(function(e, r) {
			let totalSupply = (r / 1e18 * 1000).toFixed(4);
			card.querySelector(".shares").innerHTML = totalSupply;
		});
		
		web3.eth.getBalance(contract.address, function(e, r) {
			let marketCap = convertWeiToEth(r).toFixed(4);
			card.querySelector(".cap").innerHTML = marketCap;
			
			if(address==pumpadr)pumpcap=marketCap;
		});
		
		contract.balanceOf(web3.eth.defaultAccount, function(e, r) {
			let usershares = (r / 1e18*1000).toFixed(4);

			// turn on mine flag if user holds some shares
			if (usershares!="0.0000") {
				usershares = "<b>" + usershares + "</b>";
				stockcards[index].mine = true;
			} else {
				stockcards[index].mine = false;
			}

			card.querySelector(".usershares").innerHTML = usershares;
			
			contract.getEtherForTokens(r, function(e, r) {
				let uservalue=convertWeiToEth(r * 0.9).toFixed(4);
				if(uservalue!="0.0000")uservalue="<b>"+uservalue+"</b>";
				card.querySelector(".uservalue").innerHTML = uservalue;
			});
		});

		contract.dividends(web3.eth.defaultAccount, function(e, r) {
			let dividends=convertWeiToEth(r).toFixed(4);
			if(dividends!="0.0000")dividends="<b>"+dividends+"</b>";
			card.querySelector(".dividends").innerHTML = dividends;
		});

		contract.sellPrice(function(e, r) {
			let sellPrice = convertWeiToEth(r).toFixed(6)
			card.querySelector(".sellcost").innerHTML = sellPrice;
			
			if(address==pumpadr)pumpsell=sellPrice;
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
		if (n != null) // don't execute if cancel is clicked
			contract.fund({value: convertEthToWei(n)}, function(e, r) { console.log(e, r); });
	}
	
	function sellstock(address){
		console.log("SELL "+address);
		var contract = web3.eth.contract(abi).at(address);
		contract.sellMyTokens(function(e, r) { console.log(e, r); });
	}
	
	function reinvest(address){
		var contract = web3.eth.contract(abi).at(address);
		contract.reinvestDividends(function(e, r) { console.log(e, r); })
	}
	
	function withdraw(address){
		var contract = web3.eth.contract(abi).at(address);
		contract.withdraw(function(e, r) { console.log(e, r); });
	}
	
	function GTFO(address){
		var contract = web3.eth.contract(abi).at(address);
		contract.getMeOutOfHere(function(e, r) { console.log(e, r); })
	}