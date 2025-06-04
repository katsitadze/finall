import type { UnsplashPhoto } from "./unsplashinterface";

export interface PhotoModalProps {
  open: boolean;
  onClose: () => void;
  photo: UnsplashPhoto;
}
