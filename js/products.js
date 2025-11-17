const products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

const table = document.getElementById("productTable");

let editIndex = null;

function renderTable() {
    table.innerHTML = "";

    products.forEach((product, index) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.stock}</td>
            <td>
                <i class="fa-solid fa-pen action-icon edit" onclick="editProduct(${index})"></i>
                <i class="fa-solid fa-trash action-icon delete" onclick="deleteProduct(${index})"></i>
            </td>
        `;

        table.appendChild(tr);
    });
}

function editProduct(index) {
    editIndex = index;

    document.getElementById("editName").value = products[index].name;
    document.getElementById("editPrice").value = products[index].price;
    document.getElementById("editStock").value = products[index].stock;

    document.getElementById("editForm").style.display = "block";
}

function saveEdit() {
    products[editIndex].name = document.getElementById("editName").value;
    products[editIndex].price = Number(document.getElementById("editPrice").value);
    products[editIndex].stock = Number(document.getElementById("editStock").value);

    renderTable();
    document.getElementById("editForm").style.display = "none";
}

function cancelEdit() {
    document.getElementById("editForm").style.display = "none";
}

function deleteProduct(index) {
    if (confirm("Yakin hapus produk ini?")) {
        products.splice(index, 1); 
        renderTable(); 
    }
}

renderTable();
