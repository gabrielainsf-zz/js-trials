// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
	['home', '510-867-5309'],
	['mobile', '415-555-1212'],
	['business', '415-123-4567']
	]);

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printInfo (acctHolder, acctNumber, bizName) {
	console.log(`Account Holder Name: ${accountHolder}`);
	console.log(`Account Holder Number: ${accountNumber}`);
	console.log(`Business Name: ${businessName}`);
}

// Add function to print all addresses, including a header
function showAddresses(addresses) {
	console.log(`Addresses:`);
	for (i = 0; i < addresses.length; i++) {
		console.log(`${addresses[i]}`);
	}
}

// Add function to print phone types and numbers
function showPhoneNums(phoneNums) {
	console.log(`Phone Numbers:`);
	for (let[numType, phoneNum] of phoneNums) {
		console.log(`${numType}: ${phoneNum}`);
	}
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const accountTransactions = new Map();

// Add function to add transactions
function addTransaction(date, amt) {
	accountTransactions.set(date, amt);
} 

// Use the function to add transactions
addTransaction('May-2', -500)
addTransaction('May-13', +1200)
addTransaction('May-15', -100)
addTransaction('May-21', -359)
addTransaction('May-29', +2200)

// Add function to show balance status
function showBalanceStatus(balance) {
	console.log(`Final Balance: ${balance}`);
	if (balance < 0) {
		console.log('You are overdrawn!');
	} else if (0 < balance && balance < 20) {
		console.log('Warning: You are close to zero balance');
	} else {
		console.log('Thank you for your business.')
	}
}

// Add function to show transactions
function showTransactions(acctTransactions, begBalance) {
	console.log(`Starting Balance: ${begBalance}`);
	for (let [date, amt] of acctTransactions) {
		console.log(`${date}`);
		if (amt < 0) {
			console.log('Withdrawal');
		} else if (amt > 0) {
			console.log('Deposit');
		}
		console.log(`Amount changed: ${amt}`);
		begBalance += amt;
		console.log(`Current Balance: ${begBalance}`);
	}
	showBalanceStatus(begBalance);
}

showTransactions(accountTransactions, 26000)

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




