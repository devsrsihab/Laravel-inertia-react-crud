const Footer = () => {
    return (
        <div className="bg-gray-800 p-6 text-center">
            <p className="text-gray-300">
                © 2023 My Company. All rights reserved.
            </p>
            <ul className="flex justify-center space-x-4 mt-2">
                <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                        Facebook
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
