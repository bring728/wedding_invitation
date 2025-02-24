export const onClientEntry = () => {
    if (typeof window !== "undefined") {
      window.GLOBAL_IMAGE_URL = `${window.location.origin}/img1.jpg`;
    }
  };