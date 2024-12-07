import RightArrow from "@/assets/Arrow-right-circle.png";
import { ComponentPropsWithRef } from "react";

type PropType = ComponentPropsWithRef<"button">;

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <img src={RightArrow} alt="right" />

      {children}
    </button>
  );
};
