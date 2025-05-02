/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const formVariants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.2 } },
};

const headingVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.3 } },
};

const inputVariants = {
  initial: { opacity: 0, y: 10 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut", delay: 0.1 * i + 0.4 },
  }),
};

const buttonVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4, ease: "easeOut", delay: 0.7 } },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

const ContactForm = () => {
  return (
    <motion.div
      className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4 py-10"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8"
        style={{
          boxShadow: "inset 0 0 25px rgba(1, 112, 67, 0.25)",
        }}
        variants={formVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2
          className="text-3xl font-bold text-[#96712a] mb-6 text-center"
          variants={headingVariants}
          initial="initial"
          animate="animate"
        >
          CONTACT US
        </motion.h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={inputVariants} custom={0}>
              <label className="block text-[#96712a] font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
              />
            </motion.div>

            <motion.div variants={inputVariants} custom={1}>
              <label className="block text-[#96712a] font-semibold mb-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
              />
            </motion.div>
          </div>

          <motion.div variants={inputVariants} custom={2}>
            <label className="block text-[#96712a] font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
            />
          </motion.div>

          <motion.div variants={inputVariants} custom={3}>
            <label className="block text-[#96712a] font-semibold mb-1">
              Attach File
            </label>
            <input
              type="file"
              className="w-full border border-gray-300 rounded-md p-2 bg-white text-gray-700"
            />
          </motion.div>

          <motion.div variants={inputVariants} custom={4}>
            <label className="block text-[#96712a] font-semibold mb-1">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#017043]"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-[#017043] text-white font-semibold py-3 rounded-md hover:bg-[#055b37] transition duration-300"
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;