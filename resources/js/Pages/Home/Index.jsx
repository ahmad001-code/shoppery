import MainLayout from '@/Components/Layout/MainLayout';
import { Head } from '@inertiajs/react';
import Hero from './Hero';
import IntroducingProducts from './IntroducingProducts';
import Services from './Services';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            <Hero />
            <Services />
            <IntroducingProducts />
        </MainLayout>
    );
}
