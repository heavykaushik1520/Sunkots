import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight rounded-lg">
          Shipping Policy
        </h1>
      </div>

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
        {/* Introduction paragraph */}
        <p className="text-gray-700 leading-relaxed text-justify mb-6">
          We ship all orders via reliable logistics partners such as Shiprocket,
          using standard ground shipping services. Our team strives to dispatch
          all orders within{" "}
          <strong className="font-semibold">24 to 48 business hours</strong>{" "}
          from the time of order confirmation.
        </p>

        <strong className="text-gray-700">Estimated Delivery Time:</strong>
        <p className="text-gray-700 leading-relaxed text-justify mb-6">
         Shipment time is typically <strong>7 to 15 business days</strong> via Shiprocket, depending on the delivery location and courier operations.
        </p>

        {/* Please Note section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Please Note:
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
            <li>
              Orders are not dispatched on Saturdays, Sundays, or public
              holidays.
            </li>
            <li>
              While we make every effort to ensure timely delivery, we do not
              guarantee specific delivery dates or times, as these are subject
              to the courier partner’s operations and the delivery location.
            </li>
            <li>
              Shipping charges may apply depending on the order value, delivery
              location, or promotional conditions.
            </li>
            <li>
              Any applicable shipping fees will be clearly displayed on the
              checkout page prior to final payment.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
