const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

document.getElementById("totalProducts").innerText = summary.totalProducts;
document.getElementById("totalSales").innerText = summary.totalSales;

document.getElementById("totalRevenue").innerText =
    "Rp " + summary.totalRevenue.toLocaleString("id-ID");

document.getElementById("btnProduct").addEventListener("click", () => {
    window.location.href = "products.html";
});
