import { toast } from 'react-toastify';

const copyToClipboard = async (url: string) => {
  try {
    await navigator.clipboard.writeText(url);
    toast.success('short URL copied successfully!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  } catch (err) {
    if (err) {
      toast.error('Failed to copy short URL!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  }
};

export { copyToClipboard };
