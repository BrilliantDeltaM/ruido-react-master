import React from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import './masonryLayout.css';

const MasonryLayout = ({ items }) => {
  const breakpointColumns = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="masonry-grid mx-auto my-8 px-8"
      columnClassName="masonry-grid_column"
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-lg bg-gray-100 transition-transform duration-300 transform hover:scale-105"
        >
          <Link to={`/murales/${item.id}`}> 
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </Link>
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
