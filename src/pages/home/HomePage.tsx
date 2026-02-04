import { useState } from "react";

import type { LandingFormType } from "../../features/forms/LandingForms";
import { LandingForms } from "../../features/forms/LandingForms";
import {
  attendeeCopy,
  builtByCopy,
  ctaCardCopy,
  engageCopy,
  footerCopy,
  heroCopy,
  homeImages,
  homeNav,
  howItWorksCopy,
  nextEventCopy,
  roomMattersCopy,
  sponsorshipCopy,
  whatWeDoCopy,
} from "./homeContent";
import { Attendee } from "./sections/Attendee";
import { BuiltBy } from "./sections/BuiltBy";
import { CtaCard } from "./sections/CtaCard";
import { Engage } from "./sections/Engage";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { NextEvent } from "./sections/NextEvent";
import { RoomMatters } from "./sections/RoomMatters";
import { Sponsorship } from "./sections/Sponsorship";
import { WhatWeDo } from "./sections/WhatWeDo";

export function HomePage() {
  const [openForm, setOpenForm] = useState<LandingFormType>(null);

  return (
    <div className="min-h-dvh bg-[#f4f6f8] text-zinc-900">
      <Hero
        backgroundImage={homeImages.hero}
        copy={heroCopy}
        onApplyToAttend={() => setOpenForm("executive")}
        onApplyAsSponsor={() => setOpenForm("sponsor")}
      />

      <WhatWeDo
        id="value"
        patternImage={homeImages.pattern}
        copy={whatWeDoCopy}
      />

      <HowItWorks
        id="how-it-works"
        patternImage={homeImages.pattern}
        copy={howItWorksCopy}
      />

      <RoomMatters
        patternImage={homeImages.pattern}
        imageSrc={homeImages.roomMatters}
        copy={roomMattersCopy}
      />

      <Attendee
        patternImage={homeImages.pattern}
        copy={attendeeCopy}
        onApplyToAttend={() => setOpenForm("executive")}
      />

      <Sponsorship
        patternImage={homeImages.pattern}
        images={{
          handshake: homeImages.handshake,
          analytics: homeImages.analytics,
        }}
        copy={sponsorshipCopy}
        onApplyAsSponsor={() => setOpenForm("sponsor")}
      />

      <NextEvent
        id="upcoming-events"
        patternImage={homeImages.pattern}
        copy={nextEventCopy}
      />

      <BuiltBy patternImage={homeImages.pattern} copy={builtByCopy} />

      <Engage patternImage={homeImages.pattern} copy={engageCopy} />

      <CtaCard
        copy={ctaCardCopy}
        onApplyToAttend={() => setOpenForm("executive")}
        onApplyAsSponsor={() => setOpenForm("sponsor")}
      />

      <Footer nav={homeNav} copy={footerCopy} />

      <LandingForms openForm={openForm} onOpenChange={setOpenForm} />
    </div>
  );
}
