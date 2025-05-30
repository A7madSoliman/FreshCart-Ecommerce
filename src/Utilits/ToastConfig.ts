import { toast } from "react-toastify";
import type { ToastOptions } from "react-toastify";

const defaultOptions: ToastOptions = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const notify = {
  success: (message: string) =>
    toast.success(message, {
      ...defaultOptions,
      style: {
        background: "#10B981 !important",
        borderRadius: "8px",
        color: "#ffffff !important",
      },
    }),
  error: (message: string) =>
    toast.error(message, {
      ...defaultOptions,
      style: {
        background: "#EF4444 !important",
        borderRadius: "8px",
        color: "#ffffff !important",
      },
    }),
  loading: (message: string) =>
    toast.loading(message, {
      ...defaultOptions,
      style: {
        background: "#3B82F6 !important",
        borderRadius: "8px",
        color: "#ffffff !important",
      },
    }),
};
