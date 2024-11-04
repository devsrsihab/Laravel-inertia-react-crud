import { Head } from "@inertiajs/react";

const Services = () => {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <Head title="Services" />;
            <h1 className="text-2xl font-bold mb-4">Our Services</h1>
            <ul className="list-disc list-inside text-gray-700">
                <li>Service 1: Description of service 1.</li>
                <li>Service 2: Description of service 2.</li>
                <li>Service 3: Description of service 3.</li>
            </ul>
        </div>
    );
};

export default Services;
