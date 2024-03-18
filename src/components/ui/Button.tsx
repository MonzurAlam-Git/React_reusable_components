import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import cn from "../../utils/cn";

/* <button
      className={twMerge(`bg-blue-500 ${className}
    ${variant === "danger" ? "bg-red-500 px-3 py-2 font-bold text-white" : ""}
    `)}
    >
      {buttonName}
    </button>
*/
/* Pattern of Clsx : clsx() */

const Button = ({ buttonName, className, outline }) => {
  return (
    /* the last className will execute */
    <button
      className={cn(
        "px-3 py-2 font-bold text-white",
        {
          "border border-black": outline,
        },
        className
      )}
    >
      {buttonName}
    </button>
  );
};

export default Button;
