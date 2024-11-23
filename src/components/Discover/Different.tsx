import React from "react";
import Card from "../../common/Card";
import {FiCoffee} from "react-icons/fi";
import Button from "../../common/Button";

const Different: React.FC = () => {

    const cardData = [
        {
            id: 1,
            url: "/image/bean.png",
            alt: "Bean",
            title: 'Supreme Beans',
            description: 'Beans that provides great taste'
        },
        {
            id: 2,
            url: "/image/high.png",
            alt: "High",
            title: 'High Quality',
            description: 'We provide the highest quality'
        },
        {
            id: 3,
            url: "/image/extraordinary.png",
            alt: "ExtraOrdinary",
            title: 'Extraordinary',
            description: 'Coffee like you have never tasted'
        },
        {
            id: 4,
            url: "/image/price.png",
            alt: "Price",
            title: 'Affordable Price',
            description: 'Our Coffee prices are easy to afford'
        }
    ]
    return (
        <div className="text-center space-y-4 mt-14">
            <h1 className="font-playfair font-bold text-3xl md:text-4xl text-[#4e2b10]">
                Why are we different?
            </h1>
            <h1 className="font-playfair text-base md:text-lg text-[#707070]">
                We don't just make your coffee, we make your day!
            </h1>
            <div className={"md:flex space-y-6 md:space-y-0 p-6 md:gap-4 items-center justify-center"}>
                {cardData?.map((item, index) => (
                    <Card
                        key={index}
                        className={"bg-[#F9C06A]/15 border border-[#F9C06A] hover:bg-[#F9C06A]/50 hover:border-0 items-center space-y-4 p-6"}
                        headerContent={
                            <div className={"flex items-center justify-center"}>
                                <img
                                    src={item.url}
                                    alt={item.alt}
                                    className={"w-[5rem] h-[5rem] object-contain"}
                                />
                            </div>
                        }
                    >
                        <div>
                            <h1 className={"font-bold font-playfair text-2xl text-[#4e2b10]"}>{item.title}</h1>
                            <h1 className={"font-playfair text-gray-500 w-[10rem]"}>{item.description}</h1>
                        </div>
                    </Card>
                ))}
            </div>
            <div>
                <h1 className={"font-playfair text-base md:text-lg text-[#707070]"}>Great ideas start with great coffee, Lets help you achieve that</h1>
                <h1 className={"font-bold font-playfair text-2xl text-[#4e2b10]"}>Get started today.</h1>
                <Button className={"mt-6 bg-[#F9C06A] hover:bg-[#feb850] text-base font-medium rounded-3xl px-4 md:px-8 py-2 md:py-2.5"}>Join Us</Button>
            </div>
        </div>
    )
}

export default Different