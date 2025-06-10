import React from 'react';

const RefundReturnPolicy = () => {
  return (
   
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 font-inter">
      
      <div className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight rounded-lg">
          Refund & Return Policy
        </h1>
      </div>

      {/* Content area, styled with shadow, rounded corners, and padding */}
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">

        {/* Returns Section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Returns
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            We offer a <strong className="font-semibold">7-day return window</strong> from the
            date of delivery. If more than 7 days have passed since your purchase,
            unfortunately, we will not be able to offer a refund or exchange.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">To qualify for a return:</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
            <li>The item must be unused, in its original condition, and in the original packaging.</li>
            <li>A valid proof of purchase or receipt is required.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed text-justify">
            To initiate a return, please email us at <a href="mailto:support@sunkots.com" className="text-blue-600 hover:underline">support@sunkots.com</a> with your order
            number and the reason for the return. Upon verification, we will schedule a
            pickup and process a replacement or cancellation request within <strong className="font-semibold">15 days</strong> of your
            original submission.
          </p>
        </section>

        {/* Refunds (If Applicable) Section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Refunds (If Applicable)
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Refunds are applicable only for items that
            are defective or damaged.
          </p>

          <h3 className="text-xl font-semibold text-gray-700 mb-2">Once we receive and inspect your returned item:</h3>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
            <li>You will receive an email confirmation acknowledging receipt.</li>
            <li>We will notify you of the approval or rejection of your refund request.</li>
          </ul>

          <p className="text-gray-700 leading-relaxed text-justify">
            If approved, the refund will be processed and the amount will be credited back
            to your original method of payment within a few business days.
          </p>
        </section>

        {/* Delayed or Missing Refunds Section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Delayed or Missing Refunds
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            If you haven’t received your refund:
          </p>
          <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
            <li>Double-check your bank account.</li>
            <li>Contact your bank or payment provider, as there may be a delay in processing.</li>
            <li>
              If you’ve done all of the above and still haven’t received your refund,
              please contact us at <a href="mailto:support@sunkots.com" className="text-blue-600 hover:underline">support@sunkots.com</a>.
            </li>
          </ol>
        </section>

        {/* Exchanges Section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Exchanges
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We offer exchanges only in the case of
            defective or damaged items. If you need to exchange a product for the same
            item, please contact us at <a href="mailto:support@sunkots.com" className="text-blue-600 hover:underline">support@sunkots.com</a>.
          </p>
        </section>

        {/* Return Shipping Section */}
        <section className="p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Return Shipping
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            To return your product, please email us
            with your pickup request details. Pickup and return timelines may vary
            depending on your location.
          </p>
        </section>

      </div>
    </div>
  );
};

export default RefundReturnPolicy;
