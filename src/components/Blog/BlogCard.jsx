/* eslint-disable react/prop-types */

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const BlogCard = ({blog}) => {
    const {id,images,eventName,title,shortDetails} = blog
    return (
        <div>
            <Card className="w-full max-w-[48rem] h-full md:h-[400px] flex-row bg-[#f7f5ec]">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={images}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {eventName}
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          {shortDetails}
        </Typography>
        <a href="#" className="inline-block">
          <Link to={`/blogs/${id}`}>
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
          </Link>
        </a>
      </CardBody>
    </Card>
        </div>
    );
};

export default BlogCard;