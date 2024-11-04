import { Head, Link } from "@inertiajs/react";
import Posts from "../components/Post/Posts";
import SectionTitle from "../components/shared/SectionTitle";

const Home = ({ posts }) => {
    console.log(posts);

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <div className="container py-10 mx-auto">
                <SectionTitle title="All Posts" />
                <Posts posts={posts?.data} />
            </div>
            <div className="flex justify-center mt-4">
                {posts?.links?.map((link) =>
                    link?.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            preserveScroll={true}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`mx-1 px-4 py-2 border rounded ${
                                link.active ? "bg-blue-500 text-white" : ""
                            }`}
                        />
                    ) : (
                        <span
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            key={link.label}
                            className="mx-1 px-4 py-2 text-gray-400 font-normal cursor-not-allowed"
                        />
                    )
                )}
            </div>
        </>
    );
};

export default Home;
