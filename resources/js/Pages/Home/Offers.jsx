import { AnimatedSection } from '@/Components/Layout/AnimatedSection';
import CountDown from './CountDown';
import ShopNowBtn from './ShopNowBtn';

const Offers = () => {
    return (
        <AnimatedSection className="relative z-0">
            <section className="container mx-auto flex max-w-[1280px] gap-5 px-4 py-20">
                <div className='flex h-[360px] w-[630px] items-center rounded-[10px] bg-[url("/images/Home/Offer/service1.png")] p-10'>
                    <div className="flex flex-col gap-6">
                        <p className="text-[14px] font-medium leading-[100%] tracking-[3%] text-[#fff]">
                            100% ORGANIC
                        </p>
                        <h2 className="text-[36px] font-semibold leading-[120%] tracking-[0%] text-white">
                            Fruit & Vegetable
                        </h2>
                        <p className="text-[14px] font-normal leading-[150%] tracking-[0%] text-white">
                            Starting at:{' '}
                            <span className="h-[32px] w-[62px] rounded-[5px] bg-[#FF8A00] px-2 py-1 text-[16px]">
                                $11.99
                            </span>
                        </p>
                        <div className="w-[162px]">
                            <ShopNowBtn />
                        </div>
                    </div>
                </div>
                <div className='flex h-[360px] w-[630px] items-center rounded-[10px] bg-[url("/images/Home/Offer/service2.png")] p-10'>
                    <div className="flex flex-col gap-6">
                        <p className="text-[14px] font-medium leading-[100%] tracking-[3%] text-[#fff]">
                            SALE OFF THE WEEK
                        </p>
                        <h2 className="text-[36px] font-semibold leading-[120%] tracking-[0%] text-white">
                            Sales of the Year
                        </h2>
                        <CountDown />
                        <div className="w-[162px]">
                            <ShopNowBtn />
                        </div>
                    </div>
                </div>
            </section>
            <div className="absolute -top-[150px] right-0">
                <img src="/images/Home/Offer/rSideDesign.png" alt="" />
            </div>
            <div className="absolute left-[80px] top-10">
                <img src="/images/Home/Offer/lSideDesign.png" alt="" />
            </div>
            <div className="absolute -bottom-[75px]">
                <img src="/images/Home/Offer/lSideBottomDesign.png" alt="" />
            </div>
            <div className="absolute bottom-0 right-[155px]">
                <img src="/images/Home/Offer/bottomLeaf.png" alt="" />
            </div>
        </AnimatedSection>
    );
};

export default Offers;
