import { Intro } from '@/sections/Intro'
import { NowWorkingOn } from '@/sections/NowWorkingOn'
import { ArchiveTeaser } from '@/sections/ArchiveTeaser'
import { AboutTeaser } from '@/sections/AboutTeaser'
import { channel } from '@/content/watch'

export function Home() {
  return (
    <>
      <Intro />
      <NowWorkingOn />
      <ArchiveTeaser
        number="01"
        label="Work"
        title="Work"
        description="Software, built independently."
        linkLabel="View work"
        linkHref="/work"
      />
      <ArchiveTeaser
        number="02"
        label="Writing"
        title="Writing"
        description="Notes on building software — technical essays and lessons from the process. Nothing published yet."
        linkLabel="View archive"
        linkHref="/writing"
        emptyNote="First entry pending."
      />
      <ArchiveTeaser
        number="03"
        label="Visuals"
        title="Visuals"
        description="A visual archive — photography and image experiments outside of code."
        linkLabel="View archive"
        linkHref="/visuals"
        emptyNote="First entry pending."
      />
      <ArchiveTeaser
        number="04"
        label="Watch"
        title="Watch"
        description="Video, on YouTube. Development notes and whatever else ends up in front of a camera."
        linkLabel="View channel"
        linkHref={channel.url}
        external
      />
      <AboutTeaser />
    </>
  )
}
