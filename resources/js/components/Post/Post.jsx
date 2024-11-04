const Post = ({ title, body, isPublished, created_at }) => {
    // Function to format the date and time
    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "Invalid date"; // Check for invalid date

        return date.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <h2 className="font-bold text-2xl mb-2">{title}</h2>
                <p className="text-gray-700 text-base mb-4">{body}</p>
                <p className="text-gray-500 text-sm mb-4">
                    {formatDateTime(created_at)}
                </p>{" "}
                {/* Formatted created time and date */}
                {isPublished && (
                    <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                        Published
                    </span>
                )}
                {!isPublished && (
                    <span className="inline-block bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                        Draft
                    </span>
                )}
            </div>
        </div>
    );
};

export default Post;
