import HubnexUser from "@/components/Hubnex/Hubnex";
import Frame1 from "./component2/component2-frame1";
import Screen from "./component3/component3-screen";
import Business from "./component4/component4-Business";
import Impact from "./component5/component5-impact";
import CaseStudy from "@/components/CaseStudy/CaseStudy";

const CaseStudyScreen = () => {
  return (
    <>
      <Frame1 />
      <Screen />
      <Business />
      <Impact />
      <CaseStudy></CaseStudy>
      <HubnexUser />
    </>
  );
};
export default CaseStudyScreen;
