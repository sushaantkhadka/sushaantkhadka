import { Separator } from "@/components/ui/separator";
import { styles } from "../ui/styles";

export default function AboutMe() {
  return (
    <div className={`${styles.boxColor} md:w-[720px] mx-8 md:mx-0`}>
      <h1 className="text-4xl font-medium">Unfold Me</h1>
      <Separator className="my-4 bg-gray-300" />

      <div className="flex flex-col gap-6 text-lg text-gray-500 leading-8">
        <div>
          <h3 className="text-[12px] font-bold uppercase">Where I’m From</h3>
          <p>
            I’m from Nepal. I grew up around computers early and spent more time
            breaking things on a screen than touching grass (eventually I
            learned balance 😄). Curiosity turned into obsession, and obsession
            turned into building.
          </p>
        </div>

        <div>
          <h3 className="text-[12px] font-bold uppercase">What I Used to Do</h3>
          <p>
            I started by exploring visuals — graphics, interfaces, motion — and
            slowly fell in love with how design could move, respond, and tell
            stories. Somewhere along the way, I picked up code to bring ideas to
            life, cloning products I admired and breaking them just to see how
            they worked.
          </p>
        </div>

        <div>
          <h3 className="text-[12px] font-bold uppercase">What I Do Now</h3>
          <p>
            Today, I work professionally <span className="font-bold">as a UI/UX, Graphic, and Motion
            Designer.</span> Design is my craft — systems, interactions, transitions,
            and experiences that feel intentional. <br />
            Outside of work, I code as a passion. I build things, clone things,
            experiment a lot, and occasionally disappear into game development
            using Unity and Unreal Engine. I enjoy being close to the medium,
            whether that’s pixels, timelines, or code.
          </p>
        </div>

        <div>
          <h3 className="text-[12px] font-bold uppercase">Where I’m At Now</h3>
          <p>
            Right now, I’m focused on sharpening my design taste, pushing motion
            and interaction, and staying technically curious. Most days involve
            Figma, animation tools, frontend experiments, and side projects that
            probably don’t need to exist — but are fun anyway.
          </p>
        </div>

        <div>
          <h3 className="text-[12px] font-bold uppercase">What I’m Looking For</h3>
          <p>
            Thoughtful, impactful work with people who care about craft. Teams
            that value design, motion, and experimentation — and products that
            feel alive.
          </p>
        </div>
        <p>
          I also believe the <span className="font-bold">personal computer still hasn’t had its iPhone
          moment.</span>
        </p>
      </div>
    </div>
  );
}
