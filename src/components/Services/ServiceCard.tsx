
import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { CgWebsite } from "react-icons/cg";
import {
  Dribbble,
  TabletSmartphone,
} from "lucide-react";
import { steps } from "@/utils/types";
import { Card, CardBody, CardFooter, Typography } from '../../utils/MaterialUi';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceCard = ({ item }: any) => {
  return (
    <Card
      data-aos-delay="50"
      data-aos-duration="700"
      data-aos={item?.animate}
      className="mt-6 w-[30%]"
    >
      <CardBody>
        {item?.name == "Website" && (
          <CgWebsite size={35} className="text-primary mb-3" />
        )}
        {item?.name == "App" && (
          <TabletSmartphone size={35} className="text-primary mb-3" />
        )}
        {item?.name == "UI/UX Design" && (
          <Dribbble size={35} className="text-primary mb-3" />
        )}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {item?.name}
        </Typography>
        <Typography>{item?.description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2 text-black dark:text-white hover:bg-black duration-300 hover:text-white"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{item?.name}</DialogTitle>
              <DialogDescription>{item?.description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p className="font-bold">{item?.name} service flow: </p>
              {item?.steps?.map((step: steps) => (
                <div key={item?.id} className="flex gap-2 items-center text-primary text-sm">
                  <p className="font-normal">
                    <span className="font-bold">{step?.name} :</span>{" "}
                    {step?.description}
                  </p>
                </div>
              ))}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Got it</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
