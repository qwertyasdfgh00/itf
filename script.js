const logOutput         = document.getElementById('logOutput');
const accountMoneyInput = document.getElementById('account_money');
const cashInput         = document.getElementById('cash');
const changeButton      = document.getElementById('change');
const bankOpInput       = document.getElementById('numBankOp');
const operationSelect   = document.getElementById('operation');
const proceedButton     = document.getElementById('proceed');

let account = 0;
let cash = 0;
let i = 1;

function setBalances() {
    const accountBalanceValue = Number(accountMoneyInput.value) || 0;
    const cashBalanceValue = Number(cashInput.value) || 0;

    account = accountBalanceValue;
    cash = cashBalanceValue;

    logOutput.value += `${i}, Account Balance ${account}, Cash Balance: ${cash}\n`;
    logOutput.scrollTop = logOutput.scrollHeight;
    i += 1

    accountMoneyInput.value = '';
    cashInput.value = '';
};

function handleProceed() {
    const money = Number(bankOpInput.value) || 0;
    const selectedOperation = operationSelect.value;

    if (selectedOperation === "deposit" && money > 0 && money <= cash) {
        cash -= money;
        account += money;
        logMessage = `${i}, Account Balance ${account}, Cash Balance: ${cash}\n`;
        i += 1
    } else if (selectedOperation === "withdraw" && money > 0 && money <= account) {
        account -= money;
        cash += money;
        logMessage = `${i}, Account Balance ${account}, Cash Balance: ${cash}\n`;
        i += 1
    } else {
        // If the transaction is not possible, show an alert
        logMessage = `${i}, Transaction Not Possible!\n`;
        i += 1
    }

    logOutput.value += logMessage;
    logOutput.scrollTop = logOutput.scrollHeight;
    bankOpInput.value = '';
};

changeButton.addEventListener('click', setBalances);
proceedButton.addEventListener('click', handleProceed);
