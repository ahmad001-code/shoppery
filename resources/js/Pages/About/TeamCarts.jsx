import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
function TeamCarts() {
    const members = [
        {
            image: '/images/member1.png',
            name: 'Jenny Wilson',
            role: 'CEO & Founder',
        },
        {
            image: '/images/member2.png',
            name: 'Jane Cooper',
            role: 'Worker',
        },
        {
            image: '/images/member3.png',
            name: 'Cody Fisher',
            role: 'Security Guard',
        },
        {
            image: '/images/member4.png',
            name: 'Robert Fox',
            role: 'Senior Farmer Manager',
        },
        // {
        //     image: '/images/member5.png',
        //     name: 'Alex',
        //     role: 'Manager',
        // },
    ];
    return (
        <>
            <div className="relative w-full">
                <button className="team-prev absolute left-[-25px] top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border bg-white shadow">
                    <ArrowLeftIcon className="h-5 w-5" />{' '}
                </button>
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.team-prev',
                        nextEl: '.team-next',
                    }}
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {members.map((member, index) => (
                        <SwiperSlide key={index}>
                            <div className='w-full overflow-hidden ${bg-[url({m})]} rounded-lg bg-white shadow-md'>
                                <div backgroundImage={member.image}
                                    className="h-72 w-full object-cover"
                                    alt={member.name}
                                >
                                    {' '}
                                </div>

                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">
                                        {member.name}
                                    </h3>

                                    <p className="text-sm text-[#666666]">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="team-next absolute right-[-25px] top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-green-600 text-white shadow">
                    <ArrowRightIcon className="h-5 w-5" />
                </button>
            </div>
        </>
    );
}

export default TeamCarts;
