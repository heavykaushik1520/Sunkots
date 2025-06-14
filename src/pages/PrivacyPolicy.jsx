import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight rounded-lg">
          Privacy Policy
        </h1>
      </div>

      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
        {/* Introduction Section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            At SUNKOTS Healthy Food Pvt Ltd, your privacy is of utmost
            importance to us.
          </p>
          <p className="text-gray-700 leading-relaxed text-justify">
            This Privacy Policy outlines how we collect, use, disclose, and
            safeguard your personal information when you interact with our
            website. By registering for, accessing, or using any of our
            services, you agree to the terms described in this policy.
          </p>
        </section>

        {/* Collection, Use & Disclosure of Personal Information Section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Collection, Use & Disclosure of Personal Information
          </h2>
          <ol className="list-decimal list-inside text-gray-700 leading-relaxed space-y-2">
            <li>
              We collect personal information lawfully and fairly, with the
              knowledge or consent of the individual, wherever appropriate.
            </li>
            <li>
              The purpose of collecting personal information will be clearly
              identified at or before the time of collection.
            </li>
            <li>
              Personal information will be collected, used, and disclosed only
              for the purposes specified, or for related purposes, unless we
              obtain your consent or are legally required to do otherwise.
            </li>
            <li>
              We ensure that the personal data we collect is relevant, accurate,
              complete, and up-to-date in relation to the intended use.
            </li>
            <li>
              Reasonable security measures are implemented to protect your data
              from loss, theft, unauthorized access, disclosure, copying, or
              modification.
            </li>
            <li>
              Our policies and practices regarding the management of personal
              information will be readily available upon request.
            </li>
            <li>
              We will retain personal information only for as long as necessary
              to fulfill the stated purposes.
            </li>
          </ol>
        </section>

        {/* How We May Use or Disclose Your Information Section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            How We May Use or Disclose Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify mb-4">
            Your personal information may be used to:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
            <li>Operate and manage our website effectively</li>
            <li>Personalize and enhance your user experience</li>
            <li>Enable access to our website’s features and services</li>
            <li>Publish information, where appropriate, on our website</li>
            <li>
              Send marketing or promotional communications that may be of
              interest to you
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed text-justify">
            <strong className="font-semibold">Note:</strong> All use or
            disclosure of personal information will comply with applicable laws
            in force from time to time.
          </p>
        </section>

        {/* Links to External Websites Section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Links to External Websites
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our website may contain links to third-party websites. These sites
            may collect personal information independently. We are not
            responsible for the privacy policies or practices of any external
            sites.
          </p>
        </section>

        {/* Business Transitions Section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Business Transitions
          </h2>
          <p className="text-700 leading-relaxed text-justify">
            If SUNKOTS Healthy Food Pvt Ltd undergoes a corporate change such as
            a merger, acquisition, or sale of assets, any personal information
            collected may be transferred as part of that transaction.
          </p>
        </section>

        {/* Data Security Section */}
        <section className="mb-8 p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Data Security
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We make every effort to implement appropriate technical and
            organizational safeguards to prevent unauthorized access, misuse, or
            loss of your personal information. All data is stored securely on
            our servers located in India or those of trusted third-party
            providers.
          </p>
        </section>

        {/* Amendments to This Privacy Policy Section */}
        <section className="p-4 bg-gray-50 rounded-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 pb-2 border-b-2 border-gray-200">
            Amendments to This Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            We are committed to upholding these principles and protecting your
            data. SUNKOTS Healthy Food Pvt Ltd reserves the right to update or
            modify this Privacy Policy at any time at its sole discretion. All
            changes will be posted on this page and will become effective upon
            publication.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
