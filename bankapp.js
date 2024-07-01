class Node {
    constructor(data){
        this.data=data;
        this.next = null;     
    }
}
class LinkedList {
        
    constructor(head=null){
        console.log("linked list constructor called...")
        this.head=head;    
    }
    appendNode(newNode){
        let node = this.head;    
        if(node==null){
            this.head=newNode;
            return;
        }
        while(node.next){
            node = node.next;
        }  
        node.next=newNode;    
    }
    printList() {
        let node = this.head;      
        process.stdout.write("[HEAD->")
            while(node){
                process.stdout.write(node.data.accno+"->")
               // node.data.checkbalance();
                node = node.next;   
            }
            process.stdout.write("NULL]")

    }
    searchNode(accno){
        let node = this.head;  
        while(node){
            if(node.data.accno==accno){
                console.log("accno is "+accno)
                return node;
            }
            node=node.next;
          }
    }
}

class TreeNode {
             constructor(data){
                 this.root = null;      
                 this.children=[data];
             }
             }


            
class BankAccount{
    constructor(accno, custname, amount, typeofacc){
        this.accno=accno;
        this.custname=custname;
        this.amount=amount;
        this.typeofacc=typeofacc;
    }
    checkbalance() {
    console.log ("Balance is :"+this.amount);
    }
    transferamount(to,from, amount){
    to.amount+=amount;
    from.amount-=amount;
    console.log("transfered amount "+amount+ " from "+from.custname + " to "+ to.custname)
   }

}

let rootNode=new TreeNode("root account")
let saving=new TreeNode("saving account").children
let current=new TreeNode("current account").children
let loan=new TreeNode("loan account").children

let accobj1=new BankAccount(100,"Sagarika Choudhury", 10000, saving);
let accobj2=new BankAccount(102,"Joykishon Choudhury", 30000, current);
let accobj3=new BankAccount(103,"Sipra Choudhury", 50000, loan);

let list=new LinkedList();
let node1=new Node(accobj1);
let node2=new Node(accobj2);
let node3=new Node(accobj3);

list.appendNode(node1);
list.appendNode(node2);
list.appendNode(node3);


list.printList();
let obj=list.searchNode(100);
let obj1=list.searchNode(102);
console.log(obj.data.checkbalance());
obj.data.transferamount( obj1.data,obj.data, 2000)
console.log(obj.data.checkbalance());
console.log(obj1.data.checkbalance());

