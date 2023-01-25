const myForm=document.querySelector('#my-form');

const expenseInput = document.querySelector('#expense');
const descriptionInput = document.querySelector('#description');
const categoryInput = document.querySelector('#category');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  
    let obj={
       'Expense':expenseInput.value,
       'Description':descriptionInput.value,
       'Category':categoryInput.value
    }
    
   
    axios.post("https://crudcrud.com/api/3ec3f047d5bb47e5be0303045e37ebc8/orderdata",obj);
    const li = document.createElement('li');
    let userList = document.querySelector(`#${obj.Category}`);
        // Add text node with input values
        li.appendChild(document.createTextNode(`${obj.Expense}--${obj.Category} -- ${obj.Description}`));
        userList.appendChild(li);
        var deleteBtn=document.createElement('button');
        deleteBtn.className='btn btn-danger btn-sm  delete';
        deleteBtn.appendChild(document.createTextNode('delete'));
        li.appendChild(deleteBtn);
        // deleteBtn.onclick=()=>{
        // // axios.delete(`https://crudcrud.com/api/3ec3f047d5bb47e5be0303045e37ebc8/orderdata/${obj._id}`)
        //     userList.removeChild(li);
        // } 
        
    expenseInput.value = '';
    descriptionInput.value = '';
    categoryInput.value=table1;
  
}

window.addEventListener("DOMContentLoaded",()=>{
axios.get("https://crudcrud.com/api/3ec3f047d5bb47e5be0303045e37ebc8/orderdata")
     .then((res)=>{
      for(var i=0;i<res.data.length;i++){
        showOrder(res.data[i]);
      }
     })
    });


   function showOrder(obj){
    const li = document.createElement('li');
    
        let userList = document.querySelector(`#${obj.Category}`);
        // Add text node with input values
        li.appendChild(document.createTextNode(`${obj.Expense}--${obj.Category} -- ${obj.Description}`));
        userList.appendChild(li);
        var deleteBtn=document.createElement('button');
        deleteBtn.className='btn btn-danger btn-sm  delete';
        deleteBtn.appendChild(document.createTextNode('delete'));
        li.appendChild(deleteBtn);
        deleteBtn.onclick=()=>{
        axios.delete(`https://crudcrud.com/api/3ec3f047d5bb47e5be0303045e37ebc8/orderdata/${obj._id}`)
            userList.removeChild(li);
        } 
    }
