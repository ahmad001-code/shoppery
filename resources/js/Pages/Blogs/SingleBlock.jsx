import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';

const SingleBlock = () => {
    return (
        <MainLayout>
            <Head title="Blogs" />
            <Breadcrumb
                items={[
                    {
                        label: 'Blog',
                        href: '/blogs',
                    },
                    {
                        label: 'Single Blog',
                        href: '/blogs/singleBlog',
                    },
                ]}
                backgroundImage="/images/Breadcrumbs.png"
            ></Breadcrumb>

            <div className="container mx-auto max-w-7xl px-4 py-20">
                <h1 className="text-4xl font-bold">Single Blogs</h1>
            </div>
        </MainLayout>
    );
};

export default SingleBlock;
