import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <div className="bg-gray-800 py-4 w-full">
            <div className="container mx-auto">
                <ul className="flex space-x-4 justify-center">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-300 hover:text-white"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="text-gray-300 hover:text-white"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/services"
                            className="text-gray-300 hover:text-white"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className="text-gray-300 hover:text-white"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
