export interface CreateOrderRequest {
  customerId: number;
  orderDate: string;
  items: CreateOrderItemRequest[];
}

export interface CreateOrderItemRequest {
  productId: number;
  quantity: number;
}


export interface OrderResponse {
  orderId: number;
  customerId: number;
  customerName: string;
  orderDate: string;
  totalAmount: number;
  items: OrderItemResponse[];
}


export interface OrderItemResponse {
  orderItemId: number;
  productId: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
}