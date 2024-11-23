import React from "react";
import Card from "../../common/Card";
import Button from "../../common/Button";

const Explore: React.FC = () => {

    const cardData = [
        {
            id: 1,
            url: "/image/cup1.png",
            alt: "Cup 1",
            title: "Cappuccino",
            description: "Coffee 50% | Milk 50%",
            money: "$8.50"
        },
        {
            id: 2,
            url: "/image/cup2.png",
            alt: "Cup 2",
            title: "Chai Latte",
            description: "Coffee 50% | Milk 50%",
            money: "$8.50"
        },
        {
            id: 3,
            url: "/image/cup3.png",
            alt: "Cup 3",
            title: "Macchiato",
            description: "Coffee 50% | Milk 50%",
            money: "$8.50"
        },
        {
            id: 4,
            url: "/image/cup4.png",
            alt: "Cup 4",
            title: "Expresso",
            description: "Coffee 50% | Milk 50%",
            money: "$8.50"
        }
    ]
    return (
        <div className="text-center space-y-4">
            <h1 className="font-playfair font-bold text-3xl md:text-4xl text-[#4e2b10]">
                Enjoy a new blend of coffee style
            </h1>
            <h1 className="font-playfair text-base md:text-lg text-[#707070]">
                Explore all flavours of coffee with us. There is always a new cup worth experiencing
            </h1>
            <div className={"md:flex space-y-6 md:space-y-0 p-6 md:gap-4 items-center justify-center"}>
                {cardData?.map((item, index) => (
                    <Card
                        key={index}
                        className={"bg-[#F9C06A]/15 border border-[#F9C06A] w-fit p-0 items-center space-y-4"}
                        headerContent={
                            <img
                                src={item.url}
                                alt={item.alt}
                                className={"md:w-[15rem] md:h-[12rem] object-cover"}
                            />
                        }
                        footerContent={
                            <Button
                                className="bg-[#F9C06A] hover:bg-[#feb850] text-base font-medium px-4 md:px-8 py-2 md:py-2.5 -mb-4 rounded-3xl  text-black transition-all duration-300 hover:shadow-lg ">
                                Order Now
                            </Button>
                        }
                    >
                        <div>
                            <h1 className={"font-bold font-playfair text-xl text-[#4e2b10]"}>{item.title}</h1>
                            <h1 className={"font-playfair text-sm"}>{item.description}</h1>
                            <h1 className={"font-playfair text-xl text-[#4e2b10]"}>{item.money}</h1>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Explore;