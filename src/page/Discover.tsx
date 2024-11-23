import React from "react";
import Button from "../common/Button";
import Explore from "../components/Discover/Explore";

const Discover: React.FC = () => {
    return (
        <div className="min-h-screen py-8 md:py-12">
            <div className="flex flex-col md:flex-row items-center justify-between relative h-full md:h-[90%] gap-8">
                <div className="px-4 md:px-12 lg:px-24 space-y-4 md:space-y-8 max-w-full md:max-w-[50%]">
                    <h1 className="font-playfair font-bold text-3xl md:text-4xl text-[#4e2b10]">
                        Discover the best coffee
                    </h1>
                    <h1 className="font-playfair text-base md:text-lg leading-relaxed text-[#707070] max-w-full md:max-w-[32rem]">
                        Bean Scene is a coffee shop that provides you with quality coffee
                        that helps boost your productivity and helps build your mood. Having
                        a cup of coffee is good, but having a cup of real coffee is greater.
                        There is no doubt that you will enjoy this coffee more than others
                        you have ever tasted.
                    </h1>
                    <Button
                        className="bg-[#F9C06A] hover:bg-[#feb850] text-base font-medium px-6 md:px-10 py-3 md:py-3.5 rounded-3xl mt-6 md:mt-10 text-black transition-all duration-300 hover:shadow-lg w-full md:w-auto">
                        Learn More
                    </Button>
                </div>
                <img
                    src="/image/cup_coffee.png"
                    alt="coffee"
                    className="w-full md:w-[30rem] h-auto md:h-[30rem] object-cover mr-4 md:mr-12 lg:mr-24"
                />
                <img
                    src="/image/coffee_blast.png"
                    alt="blast"
                    className="w-[15rem] md:w-[20rem] h-auto md:h-[10rem] object-cover absolute -bottom-4 md:bottom-0 hidden md:block"
                />
            </div>
            <Explore/>
        </div>
    );
};

export default Discover;
