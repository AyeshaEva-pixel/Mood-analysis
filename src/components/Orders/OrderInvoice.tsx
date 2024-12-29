// import { Button, Modal } from "antd";
// import { TOrderInvoiceParams, TOrderItem } from "../../types/order.type";

// const OrderInvoice = ({
//   invoiceModalOpen,
//   setInvoiceModalOpen,
//   orderData,
// }: TOrderInvoiceParams) => {
//   const handlePrint = () => {
//     const printWindow = window.open("", "_blank");
//     if (printWindow) {
//       printWindow.document.write(`
//             <html>
//               <head>
//                 <title>Invoice</title>
//                 <style>
//                   body { font-family: Arial, sans-serif; padding: 20px; }
//                   .invoice { border: 1px solid #ccc; padding: 20px; }
//                   .header { text-align: center; }
//                   .footer { text-align: left; margin-top: 10px; }
//                   table { width: 100%; border-collapse: collapse; margin-top: 20px; }
//                   th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
//                   th { background-color: #f2f2f2; }
//                   .signature { margin-top: 40px; }
//                   .summary { margin-top: 20px; text-align: right; }
//                 </style>
//               </head>
//               <body>
//                 <div class="invoice">
//                   <h1 class="header">Invoice</h1>
//                   <p><strong>Shop Name:</strong> ${orderData?.shopName}</p>
//                   <p><strong>Owner Name:</strong> ${
//                     orderData?.shopOwnerName
//                   }</p>
//                   <p><strong>Contact:</strong> ${orderData?.contact}</p>
//                   <p><strong>Delivery Date:</strong> ${
//                     orderData?.deliveryDate
//                   }</p>
//                   <p><strong>Address:</strong> ${orderData?.address}</p>
//                   <p><strong>Location:</strong> ${orderData?.location}</p>
//                   <h2>Items</h2>
//                   <table>
//                     <tr>
//                       <th>Name</th>
//                       <th>Unit Price</th>
//                       <th>Quantity</th>
//                       <th>Total Price</th>
//                     </tr>
//                     ${orderData?.items
//                       .map(
//                         (item) => `
//                           <tr>
//                             <td>${item.name}</td>
//                             <td>${item.unitPrice.toFixed(2)}</td>
//                             <td>${item.quantity}</td>
//                             <td>${item.itemTotalPrice.toFixed(2)}</td>
//                           </tr>
//                         `
//                       )
//                       .join("")}
//                   </table>
//                   <div class="summary">
//                     <p><strong>Advanced Price:</strong> ${orderData?.advancedPrice.toFixed(
//                       2
//                     )}</p>
//                     <p><strong>Due Price:</strong> ${orderData?.duePrice.toFixed(
//                       2
//                     )}</p>

//                     <p><strong>Grand Total: ${orderData?.grandTotalPrice.toFixed(
//                       2
//                     )}</strong></p>
//                     <h2><strong>Total Price:</strong> ${orderData?.totalPrice.toFixed(
//                       2
//                     )}</h2>
//                   </div>
//                   <div class="footer">
//                     <p><strong>Seller:</strong> ${orderData?.seller?.name}</p>
//                     <div class="signature">
//                       <p>_______________________</p>
//                       <p>Signature</p>
//                     </div>
//                     <p>Thank you for your business!</p>
//                   </div>
//                 </div>
//               </body>
//             </html>
//           `);
//       printWindow.document.close(); // Close the document to render
//       printWindow.print(); // Open print dialog
//     }
//   };

//   return (
//     <>
//       <Modal
//         title={null}
//         centered
//         open={invoiceModalOpen}
//         onOk={() => setInvoiceModalOpen(false)}
//         onCancel={() => setInvoiceModalOpen(false)}
//         // width={1000}
//         footer={[
//           <Button key="print" onClick={handlePrint}>
//             Print
//           </Button>,
//           <Button key="close" onClick={() => setInvoiceModalOpen(false)}>
//             Close
//           </Button>,
//         ]}
//       >
//         {orderData && (
//           <div>
//             <h1>Invoice</h1>
//             <p>
//               <strong>Shop Name:</strong> {orderData?.shopName}
//             </p>
//             <p>
//               <strong>Owner Name:</strong> {orderData?.shopOwnerName}
//             </p>
//             <p>
//               <strong>Contact:</strong> {orderData?.contact}
//             </p>
//             <p>
//               <strong>Delivery Date:</strong> {orderData?.deliveryDate}
//             </p>
//             <h2>Items</h2>
//             <table
//               style={{
//                 width: "100%",
//                 borderCollapse: "collapse",
//                 marginTop: "20px",
//               }}
//             >
//               <thead>
//                 <tr>
//                   <th style={{ border: "1px solid #ccc", padding: "8px" }}>
//                     Name
//                   </th>
//                   <th style={{ border: "1px solid #ccc", padding: "8px" }}>
//                     Unit Price
//                   </th>
//                   <th style={{ border: "1px solid #ccc", padding: "8px" }}>
//                     Quantity
//                   </th>
//                   <th style={{ border: "1px solid #ccc", padding: "8px" }}>
//                     Total Price
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {orderData?.items?.map((item: TOrderItem) => (
//                   <tr key={item?.name}>
//                     <td style={{ border: "1px solid #ccc", padding: "8px" }}>
//                       {item?.name}
//                     </td>
//                     <td style={{ border: "1px solid #ccc", padding: "8px" }}>
//                       {item?.unitPrice?.toFixed(2)}
//                     </td>
//                     <td style={{ border: "1px solid #ccc", padding: "8px" }}>
//                       {item?.quantity}
//                     </td>
//                     <td style={{ border: "1px solid #ccc", padding: "8px" }}>
//                       {item?.itemTotalPrice?.toFixed(2)}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <h2>Total: {orderData?.grandTotalPrice.toFixed(2)}</h2>
//           </div>
//         )}
//       </Modal>
//     </>
//   );
// };

// export default OrderInvoice;
