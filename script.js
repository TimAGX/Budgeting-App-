const budget = document.querySelector('.budget-input');
const expense = document.querySelector('.expense-input');
const amount = document.querySelector('.amount-input');
const budgetNumber = document.querySelector('.budgetnumber');
const expensesNumber = document.querySelector('.expensesnumber');
const balanceNumber = document.querySelector('.balancenumber');
const expensesItem = document.querySelector(".expenses");
let expenses = [];

function calculate(){
    const total = expenses.reduce((accumulator, object) => {
        return accumulator + object.amount;
    }, 0);
    budgetNumber.innerHTML = `budget: $ ` + budget.value;
    expensesNumber.innerHTML = `expenses: $ ` + total;
    const difference = budget.value - total;
    balanceNumber.innerHTML = `balance: $ ` + difference;
}
function deleteItem(item) {
    expenses = expenses.filter((exp) => exp.id !== item);
    displayExpenses()
    calculate() 
}
function addItem(){
    
}

function displayExpenses() {
    let display = `
    <table class="tablee">
    <thead>
            <td>Expense Title</td>
            <td>Expense Value</td>
            <td>Remove Value</td>
    </thead>
    ${expenses.map((item)=>{
        return `
        <tbody class="expenses">
            
            <td>${item.expense}</td>
            <td>$${item.amount}</td>
            <td onclick="deleteItem('${item.id}')"><i class="fa-solid fa-trash"></i></td>
        </tbody>`
    }).join('')}
    </table>`;
   expensesItem.innerHTML = display; 
}

function addExpense() {
    const expenseItem = {
        id: Math.random().toString(36).substring(2,7),
        expense: expense.value,
        amount: parseInt(amount.value),
    };
    window.localStorage.setItem("expenseslocal", JSON.stringify(expenseItem))
    expenses.push(expenseItem);
    calculate();
    displayExpenses();
}
window.addEventListener("DOMContentLoaded", ()=>{
    budgetNumber.innerHTML = `budget: $0`;
    expensesNumber.innerHTML = `expense: $0`;
    balanceNumber.innerHTML = `balance: $0`;
})