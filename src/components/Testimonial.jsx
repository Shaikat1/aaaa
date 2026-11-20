import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Avatar,
  } from "@material-tailwind/react";
   

const Testimonial = () => {
    return (
        <div>

            <div className="mt-28 mb-20 " data-aos="fade-up">
                <h1 className="text-4xl font-bold text-center">Client Testimonials</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto max-w-[1300px]">
            <div data-aos="fade-right">
             <Card className="mt-6 w-96 mx-auto bg-[#fcfbf7]">
      
      <div className="flex justify-center">
      <Avatar src="https://i.ibb.co/wR94570/360-F-224869519-a-Rae-Lneq-ALf-PNBzg0xx-MZXghtv-BXkf-IA-1.jpg" alt="avatar" size="xxl" />
      </div>
      
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
        Unforgettable Wedding Experience
        </Typography>
        <Typography>
        Our wedding day was nothing short of magical, and it wouldn't have been possible without the incredible team at [Your Event Management Company]. From the moment we met them, we knew we were in good hands. They took our vision and turned it into a reality, creating a day filled with love, joy, and beautiful memories. Every detail was meticulously planned, and their expertise truly shone through. Our guests couldn't stop raving about the decor, the flawless coordination, and the seamless flow of the event. Thank you for making our wedding day unforgettable
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
        </div>
            <div data-aos="fade-left">
             <Card className="mt-6 w-96 mx-auto bg-[#fcfbf7]">
      
      <div className="flex justify-center">
      <Avatar src="https://i.ibb.co/2611vzk/smiling-indian-man-looking-camera-mature-wearing-spectacles-portrait-middle-eastern-confident-busine.jpg"  alt="avatar" size="xxl" />
      </div>
      
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2 ">
        A Perfect Anniversary Celebration
        </Typography>
        <Typography>
        We recently celebrated our 25th anniversary, and it was an absolute joy working with [Your Event Management Company]. They took our special milestone and transformed it into a night of elegance and nostalgia. The attention to detail was astonishing, from the stunning venue selection to the personalized touches that made our guests feel cherished. Our anniversary ceremony was a beautiful journey down memory lane, thanks to their creativity and dedication. We couldn't have asked for a more perfect way to mark this significant occasion.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
        </div>
            <div data-aos="fade-right">
             <Card className="mt-6 w-96 mx-auto bg-[#fcfbf7]">
      
     <div className="flex justify-center">
     <Avatar src="https://i.ibb.co/CMgfJ4B/Stephen-Lang-Headshot-Matt-Sayles-e1605093774374-1.jpg"  alt="avatar" size="xxl" />
      
     </div>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Farewell to Remember
        </Typography>
        <Typography>
        Planning my retirement party with [Your Event Management Company] was a fantastic experience. They went above and beyond to ensure it was a memorable farewell. The venue selection was perfect, and the decor captured the essence of my career beautifully. The entertainment and speeches were flawlessly coordinated, and the entire evening felt like a heartfelt tribute. I was genuinely touched by their thoughtfulness and professionalism. Thank you for creating a retirement party that I will cherish forever.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
        </div>
            <div data-aos="fade-left">
             <Card className="mt-6 w-96 mx-auto bg-[#fcfbf7]">
      
      <div className="flex justify-center">
      <Avatar src="https://i.ibb.co/pnHq5G5/photo-1598728637989-9c5de7532584-ixlib-rb-4-0.jpg" alt="avatar" size="xxl" />
      </div>
      
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        The Best Birthday Bash!
        </Typography>
        <Typography>
        I wanted to celebrate my 40th birthday in style, and [Your Event Management Company] made it happen. From the moment I shared my ideas, they were enthusiastic and creative in planning the event. The birthday party they organized was nothing short of spectacular. The theme was executed flawlessly, and the entertainment choices were a hit with all ages. My guests had a blast, and I felt like a superstar on my special day. Thanks to [Your Event Management Company], my 20th birthday was a fantastic milestone celebration!
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
        </div>
        </div>
        </div>
    );
};

export default Testimonial;