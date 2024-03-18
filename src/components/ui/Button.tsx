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

const Button = ({ buttonName, className, variant }) => {
  const getVariant = (variant) => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      case "ghost":
        return "btn-ghost";

      default:
        return "btn";
    }
  };

  return (
    /* the last className will execute */
    <button className={cn("btn", getVariant(variant), className)}>
      {buttonName}
    </button>
  );
};

export default Button;
