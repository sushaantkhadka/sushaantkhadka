import { Button } from "@/components/ui/button";
import { CalendarCheck, Mail, MessageSquare } from "lucide-react";
import { styles } from "../ui/styles";
import Link from "next/link";

export default function Connect() {
  return (
    <div
      className={`${styles.boxColor} w-full h-full flex items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="p-5 bg-gray-800 w-fit rounded-full">
          <MessageSquare className="text-white w-12 h-12" />
        </div>
        <div className="mb-5 text-center">
          <h2 className="mt-6 text-2xl font-bold">What about a Coffee?</h2>
          <p className="text-md text-gray-400">
            Let’s Make Magic Happen Together!
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Link href="mailto:sushantkhadka2060@gmail.com" target="_blank">
              <Button className="bg-red-500 text-white flex items-center w-full">
                <Mail /> Email Me
              </Button>
          </Link>

          <Link
            href="https://calendly.com/sushaantkhadka/30min"
            target="_blank"
          >
            <Button
              variant={"outline"}
              className="text-gray-400 flex items-center w-full"
            >
              <CalendarCheck /> Schedule a Call
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
