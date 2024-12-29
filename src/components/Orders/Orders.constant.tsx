import { TOrderFormValues } from "../../types/order.type";
import { format } from "date-fns";

export const handlePrint = (orderData: TOrderFormValues) => {
  const printWindow = window.open("", "_blank");
  if (printWindow) {
    const orderDate = orderData?.createdAt
      ? format(new Date(orderData.createdAt), " dd-MM-yyyy")
      : "";
    const deliveryDate = orderData?.deliveryDate
      ? format(new Date(orderData.deliveryDate), " dd-MM-yyyy")
      : "";

    printWindow.document.write(`
        <html>
          <head>
            <title>Invoice</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              .invoice { border: 1px solid #ccc; padding: 20px; }
              .header { text-align: center; }
              .footer { text-align: left; margin-top: 20px; }
              .dateContainer { display: flex; justify-content: space-between; }
              table { width: 100%; border-collapse: collapse; margin-top: 20px; }
              th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
              th { background-color: #f2f2f2; }
              .signature { margin-top: 40px; }
              .summary { margin-top: 20px; text-align: right; }
            </style>
          </head>
          <body>
            <div class="invoice">
            <h1 class="header">Invoice</h1>
              <div class="dateContainer">
                <p><strong>Delivery Date:</strong> ${deliveryDate}</p>
                 <p><strong>Order Date:</strong> ${orderDate}</p>
              </div>
              <p><strong>Shop Name:</strong> ${orderData?.shopName}</p>
              <p><strong>Owner Name:</strong> ${orderData?.shopOwnerName}</p>
              <p><strong>Contact:</strong> ${orderData?.contact}</p>
              <p><strong>Address:</strong> ${orderData?.address}</p>
              <p><strong>Location:</strong> ${orderData?.location}</p>
              <h2>Items</h2>
              <table>
                <tr>
                  <th>Name</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
                ${orderData?.items
                  .map(
                    (item) => `
                      <tr>
                        <td>${item.name}</td>
                        <td>${item.unitPrice.toFixed(2)}</td>
                        <td>${item.quantity}</td>
                        <td>${item.itemTotalPrice.toFixed(2)}</td>
                      </tr>
                    `
                  )
                  .join("")}
              </table>
              <div class="summary">
              <p><strong>Grand Total: ${orderData?.grandTotalPrice.toFixed(
                2
              )}</strong></p>
                <p><strong>Advanced Price:</strong> ${orderData?.advancedPrice.toFixed(
                  2
                )}</p>
                <p><strong>Old Due:</strong> ${orderData?.duePrice.toFixed(
                  2
                )}</p>
                
                <h2><strong>Total Price:</strong> ${orderData?.totalPrice.toFixed(
                  2
                )}</h2>
                
              </div>
              <div class="footer">
                <p><strong>Seller:</strong> ${orderData?.seller.name}</p>
                <div class="signature">
                  <p>_______________________</p>
                  <p>Signature</p>
                </div>
                <p>Thank you for your business!</p>
              </div>
            </div>
          </body>
        </html>
      `);
    printWindow.document.close(); // Close the document to render
    printWindow.print(); // Open print dialog
  }
};
