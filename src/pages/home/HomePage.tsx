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
        copy={whatWeDoCopy}
      />

      <HowItWorks
        id="how-it-works"
        copy={howItWorksCopy}
      />

      <RoomMatters
        imageSrc={homeImages.roomMatters}
        copy={roomMattersCopy}
      />

      <Attendee
        copy={attendeeCopy}
        onApplyToAttend={() => setOpenForm("executive")}
      />

      <Sponsorship
        images={{
          handshake: homeImages.handshake,
          analytics: homeImages.analytics,
        }}
        copy={sponsorshipCopy}
        onApplyAsSponsor={() => setOpenForm("sponsor")}
      />

      <NextEvent
        id="upcoming-events"
        copy={nextEventCopy}
      />

      <BuiltBy copy={builtByCopy} />

      <Engage copy={engageCopy} />

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
