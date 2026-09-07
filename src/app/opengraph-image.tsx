import { generateSocialImage, size, contentType } from "./opengraph-image-shared";

export const alt = "Vibrainiac Games";
export { size, contentType };

export default function Image() {
  return generateSocialImage();
}
