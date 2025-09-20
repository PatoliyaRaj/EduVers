import { toast } from "react-toastify";
const SuccessToster = async (
  message,
  duration = 3000,
  position = "top-right",
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  className = ""
) => {
  toast.success(message, {
    autoClose: duration,
    position,
    closeOnClick,
    pauseOnHover,
    draggable,
    className,
  });
};

const ErrorToster = async (
  message,
  duration = 3000,
  position = "top-right",
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  className = ""
) => {
   toast.error(message, {
    autoClose: duration,
    position,
    closeOnClick,
    pauseOnHover,
    draggable,
    className,
  });
};

const InfoToster = async (
  message,
  duration = 3000,
  position = "top-right",
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
  className = ""
) => {
   toast.info(message, {
    autoClose: duration,
    position,
    closeOnClick,
    pauseOnHover,
    draggable,
    className,
  });
};

export { SuccessToster, ErrorToster, InfoToster };
