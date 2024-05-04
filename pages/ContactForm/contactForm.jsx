import React, { useState } from "react";
import { useRouter } from "next/router"; // Import the useRouter hook
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [snackbar, setSnackbar] = useState({ message: "", color: "" });
  const router = useRouter();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    emailjs
      .send(
        "service_qugugpi",
        "template_ad6e00o",
        {
          from_name: form.name,
          to_name: "Vijay Mane",
          from_email: form.email,
          to_email: "vmane2873@gmail.com",
          message: form.message,
        },
        "RT0_DKHWYb5miLQb4"
      )
      .then(() => {
        setEmailSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setLoading(false); // Set loading to false after successful submission
        setSnackbar({ message: "Email sent successfully!", color: "green" });

        setTimeout(() => {
          router.push("/");
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Set loading to false if there is an error
        setSnackbar({ message: "Failed to send email.", color: "red" });

        setTimeout(() => {
          setSnackbar({ message: "", color: "" });
        }, 2000);
      });
  };

  return (
    <section
      id="contact"
      className="flex justify-center items-center h-screen  bg-[#121212]"
    >
      <div className="w-full max-w-md">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block text-sm mb-2 font-medium"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              required
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Jacob"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full relative"
            style={{ minHeight: "40px", minWidth: "120px" }} // Fixed dimensions for the button
          >
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-t-2 border-gray-100 rounded-full animate-spin"></div>
              </div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
      {snackbar.message && (
        <div
          className="fixed top-3 right-3 p-2 text-white rounded-md"
          style={{ backgroundColor: snackbar.color, zIndex: 9999 }}
        >
          {snackbar.message}
        </div>
      )}
    </section>
  );
};

export default EmailSection;
