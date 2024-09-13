import BillingDetails from "./BillingDetails";
import OrderSummary from "./OrderSummary";


const Checkout = () => {
    return (
        <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BillingDetails />
          <OrderSummary />
        </div>
      </div>
    </div>
    );
};

export default Checkout;