import { HOME_PAGE_CONFIG } from "@/constants";
import { NextImage, Stack, Typography } from "../common";
import Image from "next/image";
const { TITLE, BADGE, DESCRIPTION, META } = HOME_PAGE_CONFIG;

function EventCard({ title, date, location, organizer }) {
  return (
    <Stack
      stackProps={{
        backgroundColor: "#E7E7E7",
        borderRadius: 4,
        padding: 2,
        width: 250,
        height: 350,
        gap: { sm: 2, xs: 1 },
        justifyContent: "space-between",
      }}
    >
      <Image src="/yeur-image-path.jpg" width={250} height={140} />

      <Stack
        stackProps={{
          justifyContent: "space-between",
          direction: "row",
          alignItems: "center",
        }}
      >
        <Typography {...TITLE(title)} />
        <Typography {...BADGE("FREE")} />
      </Stack>
      <Typography {...DESCRIPTION()} />

      <Stack stackProps={{ gap: 1.5 }}>
        <Typography {...META("red", `Location : ${location}`)} />
        <Typography {...META("black", `Date : ${date}`)} />
        <Typography {...META("limegreen", `Organizer : ${organizer}`)} />
      </Stack>
    </Stack>
  );
}

export default EventCard;
