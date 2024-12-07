import LeftArrow from "@/assets/Arrow-left-circle.png";
import { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <img src={LeftArrow} alt="left" />
      {children}
    </button>
  );
};
