let array=[]

function displayProduct(){
    let data="<table>"
    data+="<tr>"
    data+="<td colspan='2'>" + "Product Name" + "</td>"  
    data+="<td>" + array.length + "product" + "</td>"  
    data+="<tr>"
    for(let i=0;i<array.length;i++){
        data+="<tr>"
        data+="<td>" + array[i]+"</td>"
        data+="<td><button onclick='editProduct("+i+")'>Edit</button></td>"
        data+="<td><button onclick='deleteProduct("+i+")'>Delete</button></td>"
        data+="<tr>"
    }
    data+="</table>"
    document.getElementById("result").innerHTML=data
}

// displayProduct();

function create(){
    let create=document.getElementById("product").value;
    array.push(create)
    document.getElementById("product").value="";
    localStorage.setItem("list", JSON.stringify(array))
    displayProduct()
    
}

function createFunction(){
    let inputs=document.getElementById("results").value;
    array.push(inputs)
    document.getElementById("results").value="";
    // localStorage.setItem("list", JSON.stringify(array))
    // displayProduct()
}

function deleteProduct(index){
    if(confirm("Bạn chắc muốn xóa ko")){
        array.splice(index,1)
        alert("Bạn đã xóa thành công")
    }
    localStorage.setItem("list", JSON.stringify(array))
    displayProduct()
    
}

function editProduct(index){
    let sti=prompt("nhập vào tên sản phẩm để sử: ")
    if(sti !== null){
        array[index]=sti
        alert("sử thành công")
    }
    localStorage.setItem("list", JSON.stringify(array))
    displayProduct();
    
}
















































// function displayProduct(){
//     let data="<table >"
//     data+="<tr>"
//     data+="<td colspan='2'>" +"Product Name"+ "</td>"
//     data+="<td style=\"color:red\">" +array.length+ "product"+"</td>"
//     data+="</tr>"
//     for(let i=0;i<array.length;i++){
//         data+="<tr>"
//         data+="<td>"+ array[i] +"</td>"
//         data+="<td><button>Edit</button></td>"
//         data+="<td><button>Delete</button></td>"
//         data+="</tr>"
//     }
//     data+="</table>"
//     document.getElementById("result").innerHTML=data
// }

// displayProduct();