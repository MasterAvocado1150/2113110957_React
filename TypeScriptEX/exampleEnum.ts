//กำหนดตัวแปรของ enum
enum OrderStatus {
  Pending = "Pending",
  Shipped = "Shipped",
  Cancelled = "Cancelled",
}

//สร้างฟังก์ชัน
function displayStatus(status: OrderStatus) {
  switch (status) {
    case OrderStatus.Pending:
      console.log("Your order is pending.");
      break;
    case OrderStatus.Shipped:
      console.log("Your order has shipped.");
      break;
    case OrderStatus.Cancelled:
      console.log("Your order has been cancelled.");
      break;

      default:
        console.log('Unknown order status');
  }
}

displayStatus(OrderStatus.Shipped);
displayStatus(OrderStatus.Cancelled);
