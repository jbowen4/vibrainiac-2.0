import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const badge = readFile(join(process.cwd(), "src/app/icon.png")).then(
  (buffer) => `data:image/png;base64,${buffer.toString("base64")}`
);

const truculentaBold = readFile(
  join(process.cwd(), "src/app/fonts/Truculenta-Bold.ttf")
);
const afacadFluxRegular = readFile(
  join(process.cwd(), "src/app/fonts/AfacadFlux-Regular.ttf")
);

/** Shared social-preview image: the brain mark on the site's hero gradient. Used by both opengraph-image.tsx and twitter-image.tsx. */
export async function generateSocialImage() {
  const [badgeSrc, truculentaData, afacadFluxData] = await Promise.all([
    badge,
    truculentaBold,
    afacadFluxRegular,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          backgroundImage:
            "linear-gradient(90deg, #02030a 0%, #404c9f 51%, #02030a 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={badgeSrc} width={200} height={200} alt="" />
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontFamily: "Truculenta",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -2,
          }}
        >
          Vibrainiac Games
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontFamily: "Afacad Flux",
            color: "#ffb854",
          }}
        >
          Games that improve the life of our players
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Truculenta", data: truculentaData, style: "normal", weight: 700 },
        { name: "Afacad Flux", data: afacadFluxData, style: "normal", weight: 400 },
      ],
    }
  );
}
