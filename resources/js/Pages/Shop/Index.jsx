import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import Bannar from './Bannar';
import { Head } from '@inertiajs/react';

import DeliveryCard from './DeliveryCard';
import FilterBar from './FilterBar';

export default function Index() {
    return (
        <MainLayout>
            <Head title='Shop' />
            <Breadcrumb
                items={[
                    {
                        label: 'Category',
                        href: '/shop',
                    },
                    {
                        label: 'Vegetables',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            />

            <div className="flex flex-col justify-center items-center">
                <Bannar />
                <FilterBar />
                <DeliveryCard />
            </div>
        </MainLayout>
    );
}
