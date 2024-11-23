import React from "react";
import Card from "../../common/Card";
import Button from "../../common/Button";
import {FiCoffee} from "react-icons/fi";

const Different: React.FC = () => {

    const cardData = [
        {id: 1, icon: <FiCoffee className={"w-[5rem] h-[5rem]"}/>, title: 'Supreme Beans', description: 'Beans that provides great taste'},
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
                        className={"bg-[#F9C06A]/15 border border-[#F9C06A] hover:bg-[#F9C06A]/50 hover:border-0 w-fit items-center space-y-4 p-6"}
                        headerContent={
                            <div className={"flex items-center justify-center"}>
                                {item.icon}
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
        </div>
    )
}

export default Different