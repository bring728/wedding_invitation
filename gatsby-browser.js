export const onClientEntry = () => {
    if (typeof window !== "undefined") {
      window.GLOBAL_IMAGE_URL = `${window.location.origin}/static/img1.jpg`;
    }
  };