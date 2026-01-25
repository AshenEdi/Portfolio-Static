// Contact.jsx
import Header from "../Components/Header";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "ashen2003ml@gmail.com",
      link: "mailto:ashen2003ml@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+94 71 095 5908",
      link: "tel:+94710955908",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Colombo, Sri Lanka",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen w-screen bg-linear-to-br from-black via-slate-900 to-black text-white py-12">
      <div className="w-full max-w-7xl mx-auto px-6">
        <Header />

        <div className="pt-24">
          {/* HEADER */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-6xl md:text-7xl xl:text-8xl">Get In</span>
              <br />
              <span className="text-orange-500 text-7xl md:text-8xl xl:text-9xl">
                Touch.
              </span>
            </h1>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Have a project in mind or want to discuss opportunities? Feel free
              to reach out—I'm always open to new connections and
              collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT */}
            <div className="lg:col-span-1 space-y-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group flex items-start gap-4 p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/50 hover:bg-gray-900/30 transition-all"
                >
                  <div className="p-3 rounded-full bg-indigo-500/10">
                    <div className="text-indigo-400">{info.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-300 mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-white">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-2">
              <div className="relative p-8 rounded-3xl border border-gray-800 bg-gray-900/20 backdrop-blur-sm">
                {/* Glow Layer (SAFE) */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-indigo-500/20 to-orange-500/20 rounded-3xl blur opacity-30 pointer-events-none"></div>

                <div className="relative z-10">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                      <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-gray-400">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:border-indigo-500 outline-none"
                        />

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          required
                          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:border-indigo-500 outline-none"
                        />
                      </div>

                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:border-indigo-500 outline-none"
                      />

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Your Message"
                        required
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white resize-none focus:border-indigo-500 outline-none"
                      />

                      {/* PREMIUM GRADIENT BUTTON */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative z-10 w-full px-8 py-4 rounded-full 
                        text-white font-semibold
                        bg-linear-to-r from-indigo-500 via-indigo-600 to-indigo-700
                        hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800
                        transition-all duration-300
                        flex items-center justify-center gap-3
                        disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
