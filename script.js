let transactions = [];

function addTransaction() {

    let desc = document.getElementById("desc").value;
    let amount = Number(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if(desc === "" || amount === ""){
        alert("Please fill all fields");
        return;
    }

    transactions.push({
        desc,
        amount,
        type
    });

    displayTransactions();
}

function displayTransactions(){

    let list = document.getElementById("transactionList");
    list.innerHTML = "";

    let balance = 0;

    transactions.forEach((item,index)=>{

        let li = document.createElement("li");

        li.innerHTML =
        `${item.desc}
         <span>${item.type==="income" ? "+" : "-"}₹${item.amount}</span>`;

        list.appendChild(li);

        if(item.type==="income"){
            balance += item.amount;
        }else{
            balance -= item.amount;
        }
    });

    document.getElementById("balance").innerText = balance;
}