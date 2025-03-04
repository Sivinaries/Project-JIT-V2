import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState({
    show: false,
    type: 'success', // or 'error'
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
        setNotification({
            show: true,
            type: 'error',
            message: 'Please fill in all required fields',
        });

        setTimeout(() => {
            setNotification({ show: false, type: 'error', message: '' });
        }, 5000);

        return;
    }

    const phone_number = '6282139915859';
    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${phone_number}?text=${encodedMessage}`;

    window.open(whatsappLink, '_blank');

    setNotification({
        show: true,
        type: 'success',
        message: 'Message sent via WhatsApp',
    });

    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
        setNotification({ show: false, type: 'success', message: '' });
    }, 5000);
};

  return (
    <section id="contact">
      <div className="grid grid-cols-1 bg-black h-full">
        <div className="my-8 md:my-20">
          <div className="mx-4 md:mx-20">
            <div className="space-y-4 md:space-y-12">
              <div>
                <h1 className="text-white text-2xl md:text-5xl font-semibold">
                  We are always ready to help you
                </h1>
                <h1 className="text-white text-2xl md:text-5xl font-semibold">
                  and answer your questions
                </h1>
              </div>
              <div className="p-4 md:p-16 space-y-2 md:space-y-8 bg-white rounded-3xl">
                <h1 className="text-center text-2xl text-black md:text-5xl font-semibold">
                  Get in Touch
                </h1>

                {notification.show && (
                  <div
                    className={`text-white text-center p-2 rounded ${notification.type === "success"
                        ? "bg-green-500"
                        : "bg-red-500"
                      }`}
                  >
                    {notification.message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="md:flex md:gap-4">
                    <div className="space-y-2 md:space-y-12 md:w-1/2 flex flex-col justify-center my-auto">
                      <div className="space-y-2">
                        <h1 className="text-lg md:text-2xl font-light">
                          Full Name
                        </h1>
                        <input
                          className="bg-gray-100 rounded-3xl w-full border-2 border-black p-2"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <h1 className="text-lg md:text-2xl font-light">
                          Email Address
                        </h1>
                        <input
                          className="bg-gray-100 rounded-3xl w-full border-2 border-black p-2"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="space-y-2">
                        <h1 className="text-lg md:text-2xl font-light">
                          Message
                        </h1>
                        <textarea
                          className="bg-gray-100 rounded-3xl w-full border-2 border-black p-2 h-44 md:h-56"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 md:p-4 bg-teal-500 rounded-3xl w-full md:w-1/4 mx-auto mt-4">
                    <button type="submit">
                      <h1 className="text-2xl md:text-3xl text-white">Send</h1>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
