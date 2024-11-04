import { Head } from "@inertiajs/react";

const About = () => {

    return (
        <div className="max-w-2xl mx-auto p-6">
            <Head title="About" />;
            <h1 className="text-2xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700 mb-4">
                We are a company dedicated to providing the best services to our
                customers. Our team is passionate and committed to excellence.
            </p>
            <p className="text-gray-700">
                Our mission is to deliver high-quality products that meet the
                needs of our clients while maintaining a strong focus on
                sustainability and innovation.
            </p>
        </div>
    );
};

export default About;
