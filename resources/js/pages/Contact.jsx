import { Head } from "@inertiajs/react";

const Contact = () => {
    return (
        <div className="max-w-md mx-auto p-6">
            <Head title="Contact" />
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <form className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        className="border rounded w-full p-2"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        className="border rounded w-full p-2"
                        placeholder="Your Email"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Message</label>
                    <textarea
                        className="border rounded w-full p-2"
                        rows="4"
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-gray-800 text-white rounded p-2"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
