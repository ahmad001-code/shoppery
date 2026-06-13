import Breadcrumb from '@/Components/Breadcrumb';
import MainLayout from '@/Components/Layout/MainLayout';
import {
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
} from '@heroicons/react/24/outline';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Contact() {
    // const informations = [
    //     {
    //         id: '1',
    //         icon: '',
    //         text: '2715 Ash Dr. San Jose, South Dakota 83475',
    //     },
    //     { id: '2', icon: '', text: 'Proxy@gmail.com Help.proxy@gmail.com' },
    //     {
    //         id: '3',
    //         icon: '',
    //         text: '(219) 555-0114 (164) 333-0487',
    //     },
    // ];
    return (
        <MainLayout>
            <Head title="Contact" />
            <Breadcrumb
                items={[
                    {
                        label: 'Contact',
                    },
                ]}
                backgroundImage="/images/breadcrumbs.png"
            />

            <div className="container mx-auto w-full max-w-[1320px] bg-gray-50 px-4 py-20">
                <div className='flex flex-col gap-10 justify-center lg:flex-row'>
                    <div className="flex justify-center">
                        <div className="flex w-full h-[500px] max-w-[600px] lg:max-w-[312px] flex-col gap-6 rounded-lg bg-white p-6 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                            <div className="flex flex-col items-center justify-center gap-4">
                                <MapPinIcon className="h-10 w-10 text-green-600" />
                                <p className="text-center leading-[170%] text-[#333333]">
                                    2715 Ash Dr. San Jose, South Dakota 83475
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 border-t py-6">
                                <EnvelopeIcon className="h-10 w-10 text-green-600" />
                                <p className="text-center leading-[170%] text-[#333333]">
                                    Proxy@gmail.com <br /> Help.proxy@gmail.com
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 border-t py-6">
                                <PhoneIcon className="h-10 w-10 text-green-600" />
                                <p className="text-center leading-[170%] text-[#333333]">
                                    (219) 555-0114 <br /> (164) 333-0487
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center lg:max-w-[984px]'>
                        <div className=" h-[530px] flex w-auto max-w-[600px] lg:max-w-[984px] flex-col gap-6 rounded-lg bg-white p-4 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                            <div className="gap- flex flex-col">
                                <h2 className="text-[24px] font-semibold leading-[150%]">
                                    Just Say Hello!
                                </h2>
                                <p className="leading-[150%] text-[#808080]">
                                    Do you fancy saying hi to me or you want to
                                    get started with your project and you need
                                    my help? Feel free to contact me.
                                </p>
                            </div>
                            <form className="flex w-full flex-col gap-4">
                                <div className="flex flex-col gap-4 lg:flex-row">
                                    <input
                                        className="rounded-lg w-full border focus:border-green-500"
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        id="name"
                                    />
                                    <input
                                        className="rounded-lg w-full border focus:border-green-500"
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <input
                                        className="rounded-lg border focus:border-green-500"
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder=""
                                    />
                                    <textarea
                                        className="rounded-lg border focus:border-green-500"
                                        placeholder="Subjects"
                                        rows={4}
                                    ></textarea>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex h-[55px] w-auto max-w-[200px] items-center justify-center rounded-[43px] bg-[#00B207]"
                                >
                                    <button className="text-[16px] font-semibold leading-[120%] text-white">
                                        Send Message
                                    </button>
                                </motion.div>
                            </form>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </MainLayout>
    );
}
