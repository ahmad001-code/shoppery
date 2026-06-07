import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';

const Index = () => {
    return (
        <MainLayout>
            <Head title="Blogs" />
            <Breadcrumb
                items={[
                    {
                        label: 'Blog',
                        href: '/blogs',
                    },
                ]}
                backgroundImage="/images/Breadcrumbs.png"
            ></Breadcrumb>

            <div className="container mx-auto max-w-7xl px-4 py-20">
                <h1 className="text-4xl font-bold">Blogs</h1>
            </div>
        </MainLayout>
    );
};

export default Index;
