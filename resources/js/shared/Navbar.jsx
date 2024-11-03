const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <h1 className="text-white text-lg">My Navbar</h1>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
