import React from "react";

interface CategoryCardProps {
    title: string;
    image?: string;
    onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({title, image, onClick}) => {
    return(
        <div className="border border-gray-300 shadow-lg relative group  overflow-hidden aspect-[4/3]" onClick={onClick} role="button">
            <img src={image} alt="" className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"/>
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-black bg-opacity-30 transition-all duration-300 group-hover:bg-opacity-50">{title}</h3>
        </div>
    );
};

export default CategoryCard;