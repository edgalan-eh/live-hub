"use client";
import { motion } from "framer-motion";

const imgVector = "https://www.figma.com/api/mcp/asset/a4765096-e815-4529-b597-0a12c26a0592";
const imgScreenReplaceHere1 = "https://www.figma.com/api/mcp/asset/e822f25b-d628-4ae8-b127-2bb165657530";
const imgPhoneDisplayImage = "https://www.figma.com/api/mcp/asset/4ae24ac5-5dd5-4e5c-9451-076849f97cba";
const imgPhoneDisplayImage1 = "https://www.figma.com/api/mcp/asset/3b9514c7-9dcb-4158-8959-b9adfb7187eb";
const imgStudioProduction = "https://www.figma.com/api/mcp/asset/86240957-ef04-47a8-bd23-138dc9a64992";
const imgImage = "https://www.figma.com/api/mcp/asset/782634b6-000e-4d56-a585-bc07d4ef8724";
const imgImage1 = "https://www.figma.com/api/mcp/asset/7cd481dd-7102-4575-a671-f13e3f39aed5";
const imgImage2 = "https://www.figma.com/api/mcp/asset/efe98d57-0a6a-4e0e-9f27-f0847dd89fc4";
const imgImage3 = "https://www.figma.com/api/mcp/asset/27ddc3b8-9859-4f46-9374-0a3fda3550d1";
const imgImage4 = "https://www.figma.com/api/mcp/asset/6692eef5-c62a-4d74-96e9-7d9b47716097";
const imgVector1 = "https://www.figma.com/api/mcp/asset/2d8548ec-be21-4079-a8c9-016527478f17";
const imgButtonIcon = "https://www.figma.com/api/mcp/asset/7268b312-8ae8-4c14-aee4-022248a238b6";
const imgVector2 = "https://www.figma.com/api/mcp/asset/cb9e68d7-b21e-4a5c-be79-a2e3fdeab9ec";
const imgGlow = "https://www.figma.com/api/mcp/asset/1737f167-155b-488b-ba32-66601c30446d";
const imgScreenReplaceHere = "https://www.figma.com/api/mcp/asset/c7c79ac5-53d4-4ca5-8789-bf1693b4da4e";
const imgShopee = "https://www.figma.com/api/mcp/asset/cc3ea142-83ac-45d5-8507-0a3f73f93e9a";
const imgShopeeIcon1 = "https://www.figma.com/api/mcp/asset/7d31dd6e-9dfa-43e2-a4bd-c3e3920d7ee0";
const imgTiktok = "https://www.figma.com/api/mcp/asset/05944a36-cf46-4a48-aea3-4de60fd8c7e1";
const imgTiktokSignLogo1 = "https://www.figma.com/api/mcp/asset/50390057-f905-468b-b565-da5be548359e";
const imgInstagram = "https://www.figma.com/api/mcp/asset/4af8fde3-03dc-43fe-a0ad-51b4e7e23c9a";
const imgBenefitIconContainer = "https://www.figma.com/api/mcp/asset/d8db2b13-a3f4-478d-8e63-a3451f8119f9";
const imgContainer = "https://www.figma.com/api/mcp/asset/a1ef5ebc-0d70-45c1-9d0b-35b7d304a0ba";
const imgContainer1 = "https://www.figma.com/api/mcp/asset/5866c48e-4e9e-4e8b-b2e0-9a767aea4134";
const imgContainer2 = "https://www.figma.com/api/mcp/asset/c8c66a27-58a6-4658-8138-ff34f5eabc6b";
const imgVector3 = "https://www.figma.com/api/mcp/asset/ea39fb1c-4026-43be-81f1-083d9dd2c1fc";
const imgContainer3 = "https://www.figma.com/api/mcp/asset/f22678ef-50f2-42ef-a638-16fe9cc60bbe";
const imgContainer4 = "https://www.figma.com/api/mcp/asset/c0e3e73c-222b-4d2a-8841-f989d46e48f3";
const imgContainer5 = "https://www.figma.com/api/mcp/asset/9b77787b-82f8-43aa-b71d-55da00011f2b";
const imgIcon = "https://www.figma.com/api/mcp/asset/ef098bd2-af3a-4f42-a1fc-41bc6275c4d5";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/d100896e-187a-433b-b867-ff186be68232";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/f15e2284-fffd-4c6c-b28d-da58242fbe0a";
const imgIcon3 = "https://www.figma.com/api/mcp/asset/f55f58af-adac-4aca-a61a-041cbe7a8b7c";
const imgIcon4 = "https://www.figma.com/api/mcp/asset/446b9590-fd34-4e22-94f0-af6166ab53b7";
const imgIcon5 = "https://www.figma.com/api/mcp/asset/dd7588b1-062f-4748-b5b2-8c0b3b7e66df";
const imgContainer6 = "https://www.figma.com/api/mcp/asset/6498967f-62e4-4a61-a3e7-79738285d868";
const imgVector4 = "https://www.figma.com/api/mcp/asset/5399726a-017d-4f07-8d17-3b751a057a31";
const imgVector5 = "https://www.figma.com/api/mcp/asset/5aeb1ed8-4b7a-4e83-8bff-8a65f7eb92c4";
const imgVector6 = "https://www.figma.com/api/mcp/asset/957d852a-b978-49ab-9310-eff28d4b249a";
const imgSocialIcons = "https://www.figma.com/api/mcp/asset/17ea2795-dcf7-42c5-ac32-98ad4b4baff2";
const imgVector7 = "https://www.figma.com/api/mcp/asset/c60bb5ab-5c85-4f0d-be9c-ee52aac91dde";
const imgVector8 = "https://www.figma.com/api/mcp/asset/ad29323b-63fc-4eed-9e1d-01b7e42543bf";
const imgLine1 = "https://www.figma.com/api/mcp/asset/809b7604-98e4-464a-a436-4969cbd66879";
const imgLogoV11 = "https://www.figma.com/api/mcp/asset/54c935af-46e5-453f-a9b2-e9350264cf31";


const easeOut = [0.0, 0.0, 0.2, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, ease: easeOut, delay } }),
};
const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easeOut } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

function NavigationMapPin({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"}>
      <div className="absolute inset-[12.5%_20.83%_13.56%_20.83%]">
        <div className="absolute inset-[-5.64%_-7.14%]">
          <img alt="" className="block max-w-none size-full" src={imgVector} />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#030001] content-stretch flex flex-col items-start relative w-full">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(42.686932291193614deg, rgba(19, 1, 6, 0.5) 34.248%, rgba(49, 24, 31, 0.5) 89.917%)" }}>
        <div className="content-stretch flex flex-col h-[120px] items-center justify-center px-[40px] relative shrink-0 w-[1512px]">
          <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center max-w-[1600px] min-h-px py-[24px] relative w-full">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0">
              <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-[203.91px] mt-0 relative row-1 text-[#ff004f] text-[47.852px] whitespace-nowrap">
                .
              </p>
              <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-0 mt-0 relative row-1 text-[#ff004f] text-[47.852px] whitespace-nowrap">
                live
              </p>
              <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-[100.5px] mt-0 relative row-1 text-[#ebe610] text-[47.852px] whitespace-nowrap">
                hub
              </p>
              <p className="col-1 font-['BC_Barell',sans-serif] leading-[normal] ml-[2.89px] mt-[45.66px] relative row-1 text-[17.564px] text-white tracking-[1.4051px] w-[217.114px]">
                estúdio e performance
              </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px overflow-clip p-[7.113px] relative">
              <div className="content-stretch flex gap-[7.113px] items-center justify-center relative rounded-[56.906px] shrink-0">
                <div className="content-stretch flex font-['Blinker',sans-serif] font-semibold gap-[56.906px] items-center justify-center leading-[normal] not-italic px-[40px] py-[16px] relative rounded-[40px] shrink-0 text-[16px] text-white uppercase whitespace-nowrap">
                  <p className="relative shrink-0">
                    start
                  </p>
                  <p className="relative shrink-0">
                    para marcas
                  </p>
                  <p className="relative shrink-0">
                    PORQUE NÓS
                  </p>
                  <p className="relative shrink-0">
                    como funciona
                  </p>
                  <p className="relative shrink-0">
                    blog
                  </p>
                </div>
                <div className="bg-[#ebe610] content-stretch flex items-center justify-center px-[24px] py-[16px] relative rounded-[40px] shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <p className="font-['Blinker',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#130106] text-[16px] uppercase whitespace-nowrap">
                      contato
                    </p>
                    <div className="h-[19.498px] relative shrink-0 w-[19.5px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex h-[776px] items-center justify-center px-[40px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] gap-[100px] h-full items-start max-w-[1280px] min-w-px relative">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[80px] h-full items-start justify-center max-w-[1280px] min-w-px relative">
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
                  <motion.div className="bg-[rgba(235,230,16,0.1)] border border-[rgba(254,212,0,0.3)] border-solid content-stretch drop-shadow-[0px_0px_15px_rgba(254,212,0,0.2)] flex gap-[8px] items-center px-[17px] py-[5px] relative rounded-[9999px] shrink-0" variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                    <div className="bg-[#ebe610] rounded-[9999px] shrink-0 size-[8px]" />
                    <p className="font-['Blinker',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#ebe610] text-[16px] whitespace-nowrap">
                      A ERA MAIS PROMISSORA DO E-COMMERCE
                    </p>
                  </motion.div>
                  <motion.div className="content-stretch flex flex-col items-start relative shrink-0 w-full" variants={fadeUp} initial="hidden" animate="visible" custom={0.15}>
                    <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[64px] text-white tracking-[-1.6426px] w-full">
                      <p>
                        <span className="leading-[1.2]">{`Acelere suas vendas com `}</span>
                        <span className="bg-clip-text bg-gradient-to-r font-['Blinker',sans-serif] font-bold from-[#ff0150] leading-[1.2] not-italic text-[transparent] to-[#d30847] via-[#fa3471] via-[48.077%]">Live Shop</span>
                      </p>
                    </div>
                  </motion.div>
                </div>
                <p className="font-['Blinker',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full whitespace-pre-wrap" style={{ fontFeatureSettings: "'ss04' 1" }}>
                  <span className="font-['Blinker',sans-serif] font-bold leading-[normal]">Vendemos por você</span>
                  <span className="leading-[normal]">{` com `}</span>
                  <span className="font-['Blinker',sans-serif] font-bold leading-[normal]">LIVES</span>
                  <span className="leading-[normal]">{` diretamente de `}</span>
                  <span className="font-['Blinker',sans-serif] font-bold leading-[normal]">nossos estúdios</span>
                  <span className="leading-[normal]">{`.  Performance total sem preocupação técnica.`}</span>
                </p>
              </div>
              <motion.div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
                <motion.div className="border border-[rgba(255,255,255,0.5)] border-solid content-stretch drop-shadow-[0px_0px_14px_rgba(255,0,79,0.5)] flex gap-[8px] h-[56px] isolate items-center justify-center px-[56px] py-[8px] relative rounded-[80px] shrink-0 cursor-pointer" style={{ backgroundImage: "linear-gradient(52.42604106027996deg, rgb(255, 0, 79) 5.2313%, rgb(255, 82, 136) 50.249%, rgb(255, 0, 79) 102.77%)" }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <p className="font-['Blinker',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap z-[2]" style={{ fontFeatureSettings: "'ss04' 1, 'cv03' 1" }}>
                    QUERO ACELERAR MINHAS VENDAS
                  </p>
                  <div className="content-stretch flex items-center relative rounded-[40px] shrink-0 z-[1]">
                    <div className="overflow-clip relative shrink-0 size-[24px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonIcon} />
                      <div className="absolute inset-[9.39%_9.37%_9.37%_9.38%]">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
                      </div>
                    </div>
                  </div>
                </motion.div>
                <p className="font-['Blinker',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]" style={{ fontFeatureSettings: "'ss04' 1" }}>
                  Converse sem compromisso com um especialista da Live Hub.
                </p>
              </motion.div>
            </div>
            <motion.div className="h-full relative shrink-0 w-[622px]" variants={fadeRight} initial="hidden" animate="visible">
              <div className="absolute flex h-[828.428px] items-center justify-center left-[-63px] top-[-40.88px] w-[828.429px]">
                <div className="-rotate-45 flex-none">
                  <div className="h-[770.149px] relative w-[401.425px]">
                    <div className="absolute inset-[-16.65%_-31.94%]">
                      <img alt="" className="block max-w-none size-full" src={imgGlow} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[811.195px] left-[calc(50%+68px)] shadow-[0px_-9.295px_40.756px_0px_rgba(0,0,0,0.1),0px_-27.171px_28.601px_0px_rgba(255,255,255,0.1),0px_58.632px_89.378px_0px_rgba(0,0,0,0.15),0px_26.456px_26.456px_0px_rgba(0,0,0,0.25)] top-[calc(50%+81.6px)] w-[394px]">
                <div className="absolute contents inset-[0_0.89%_0_0.98%]">
                  <div className="absolute border-[#373634] border-[4.188px] border-solid inset-[0.09%_1.16%_0.09%_1.24%] pointer-events-none rounded-[57.989px]">
                    <div aria-hidden="true" className="absolute bg-[#030001] inset-0 rounded-[57.989px]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0.322px_4.832px_#242223]" />
                  </div>
                  <div className="absolute border-[#292824] border-[0.644px] border-solid inset-[0_0.89%_0_0.98%] pointer-events-none rounded-[55.411px]">
                    <div aria-hidden="true" className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[55.411px]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0.322px_1.611px_#474641]" />
                  </div>
                  <div className="absolute border-[#b5b5b5] border-[1.289px] border-solid inset-[0.09%_1.16%_0.09%_1.24%] pointer-events-none rounded-[55.411px]">
                    <div aria-hidden="true" className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[55.411px]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0.322px_1.611px_#afb0ab]" />
                  </div>
                  <div className="absolute contents inset-[1.85%_4.37%_1.81%_4.7%]">
                    <div className="absolute inset-[2.21%_4.37%_1.81%_4.7%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-2.928px] mask-size-[358.246px_781.484px]" style={{ maskImage: `url('${imgScreenReplaceHere}')` }}>
                      <img alt="" className="absolute block inset-0 max-w-none size-full" height="778.556" src={imgScreenReplaceHere1} width="358.245" />
                    </div>
                    <div className="absolute inset-[0.57%_0.89%_0.52%_4.7%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_10.397px] mask-size-[358.246px_781.484px]" style={{ maskImage: `url('${imgScreenReplaceHere}')` }}>
                      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                        <img alt="" className="absolute max-w-none object-cover size-full" src={imgPhoneDisplayImage} />
                        <div className="absolute inset-0 overflow-hidden">
                          <img alt="" className="absolute h-[96.85%] left-0 max-w-none top-[0.89%] w-[96.64%]" src={imgPhoneDisplayImage1} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute contents inset-[0_0.9%_0_0.98%]">
                  <div className="absolute bg-[rgba(55,54,52,0.95)] inset-[99.34%_77.95%_0_20.78%]" />
                  <div className="absolute bg-[rgba(55,54,52,0.95)] inset-[89.4%_97.63%_10.04%_0.98%]" />
                  <div className="absolute bg-[rgba(55,54,52,0.9)] inset-[10.08%_97.55%_89.11%_0.98%]" />
                  <div className="absolute bg-[rgba(55,54,52,0.95)] inset-[89.38%_0.91%_10.05%_97.64%]" />
                  <div className="absolute bg-[rgba(55,54,52,0.9)] inset-[10.12%_0.9%_89.11%_97.63%]" />
                  <div className="absolute bg-[rgba(55,54,52,0.9)] inset-[0_20.44%_99.31%_78%]" />
                </div>
                <div className="absolute contents inset-[19.33%_0_55.94%_0] pointer-events-none">
                  <div className="absolute border-[#7f7e79] border-[0.483px] border-solid inset-[36.25%_99.02%_55.94%_0] rounded-[1.289px]">
                    <div aria-hidden="true" className="absolute bg-[#ffd400] inset-0 rounded-[1.289px]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.966px_0px_0px_#bebdb8,inset_0px_0.966px_0px_0px_#bebdb8,inset_0px_2.577px_0.644px_0px_#282722,inset_0px_-2.577px_0.644px_0px_#282722,inset_1.611px_0px_1.289px_0px_rgba(152,151,146,0.6),inset_1.289px_0px_0px_0px_#92918c]" />
                  </div>
                  <div className="absolute border-[#7f7e79] border-[0.483px] border-solid inset-[26.7%_99.02%_65.41%_0] rounded-[1.289px]">
                    <div aria-hidden="true" className="absolute bg-[#ffd400] inset-0 rounded-[1.289px]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.966px_0px_0px_#bebdb8,inset_0px_0.966px_0px_0px_#bebdb8,inset_0px_2.577px_0.644px_0px_#282722,inset_0px_-2.577px_0.644px_0px_#282722,inset_1.611px_0px_1.289px_0px_rgba(152,151,146,0.6),inset_1.289px_0px_0px_0px_#92918c]" />
                  </div>
                  <div className="absolute border-[#7f7e79] border-[0.483px] border-solid inset-[19.33%_99.02%_76.42%_0] rounded-[1.289px]">
                    <div aria-hidden="true" className="absolute bg-[#ffd400] inset-0 rounded-[1.289px]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.966px_0px_0px_#bebdb8,inset_0px_0.966px_0px_0px_#bebdb8,inset_0px_2.577px_0.644px_0px_#282722,inset_0px_-2.577px_0.644px_0px_#282722,inset_1.611px_0px_1.289px_0px_rgba(152,151,146,0.6),inset_1.289px_0px_0px_0px_#92918c]" />
                  </div>
                  <div className="absolute border-[#7f7e79] border-[0.483px] border-solid inset-[29.33%_0_58.69%_99.02%] rounded-[1.289px]">
                    <div aria-hidden="true" className="absolute bg-[#ffd400] inset-0 rounded-[1.289px]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.966px_0px_0px_#bebdb8,inset_0px_0.966px_0px_0px_#bebdb8,inset_0px_2.577px_0.644px_0px_#282722,inset_0px_-2.577px_0.644px_0px_#282722,inset_-1.611px_0px_1.289px_0px_rgba(152,151,146,0.6),inset_-1.289px_0px_0px_0px_#92918c]" />
                  </div>
                </div>
                <div className="absolute contents inset-[0.89%_42.93%_98.43%_42.83%]">
                  <div className="absolute border-[#0e0e0e] border-[0.336px] border-solid inset-[0.89%_42.93%_98.43%_42.83%] pointer-events-none rounded-[10.077px]">
                    <div aria-hidden="true" className="absolute bg-[#141414] inset-0 rounded-[10.077px]" />
                    <div className="absolute inset-0 rounded-[inherit] shadow-[inset_-1.008px_0px_0px_0px_#2a2a2a,inset_1.008px_0px_0px_0px_#2a2a2a,inset_0px_0px_1.68px_0.336px_black]" />
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex flex-col gap-[53px] items-start left-[69px] top-[158px] w-[66.001px]">
                <div className="h-[66.001px] relative shrink-0 w-full">
                  <div className="absolute inset-[-30.3%]">
                    <img alt="" className="block max-w-none size-full" src={imgShopee} />
                  </div>
                  <div className="absolute inset-[18.14%_21.55%_18.23%_21.71%] overflow-clip">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShopeeIcon1} />
                  </div>
                </div>
                <div className="h-[66.001px] relative shrink-0 w-full">
                  <div className="absolute inset-[-30.3%]">
                    <img alt="" className="block max-w-none size-full" src={imgTiktok} />
                  </div>
                  <div className="absolute inset-[17.98%_21.61%_17.98%_21.86%]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTiktokSignLogo1} />
                  </div>
                </div>
                <div className="relative shrink-0 size-[66.001px]">
                  <div className="absolute inset-[-30.3%]">
                    <img alt="" className="block max-w-none size-full" src={imgInstagram} />
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch drop-shadow-[0px_4px_6.95px_rgba(0,0,0,0.25)] flex flex-col gap-[8px] isolate items-end justify-center left-[-16px] rounded-[80px] top-[606px] w-[170px]">
                <NavigationMapPin className="overflow-clip relative shrink-0 size-[24px] z-[2]" />
                <div className="flex flex-col font-['Source_Sans_3',sans-serif] font-bold font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-right text-white whitespace-nowrap z-[1]" style={{ fontFeatureSettings: "'ss04' 1" }}>
                  <p className="mb-0">
                    <span className="font-['Source_Sans_3',sans-serif] font-normal font-normal leading-[normal] text-white">{`Estúdios em `}</span>
                    <span className="leading-[normal]">São Paulo.</span>
                  </p>
                  <p>
                    <span className="font-['Source_Sans_3',sans-serif] font-normal font-normal leading-[normal]">{`Atendemos o `}</span>
                    <span className="leading-[normal]">Brasil</span>
                    <span className="font-['Source_Sans_3',sans-serif] font-normal font-normal leading-[normal]">.</span>
                  </p>
                </div>
              </div>
              <div className="absolute h-[40px] left-[154px] top-[270px] w-[136.6px]" />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div className="bg-[#ebe610] content-stretch flex flex-col items-center justify-center px-[80px] py-[40px] relative shrink-0 w-full" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={0}>
        <div className="content-stretch flex gap-[40px] items-center justify-center max-w-[1280px] relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['Blinker',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#1c0109] text-[24px]">
            O Live Commerce está se consolidando no Brasil como uma poderosa estratégia de vendas.
          </p>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
              <div className="font-['Blinker',sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#ff004f] text-[0px] text-right whitespace-nowrap">
                <p className="leading-[normal] mb-0 text-[24px]">TAXA DE</p>
                <p className="font-['Blinker',sans-serif] font-extrabold leading-[normal] text-[24px]">CONVERSÃO</p>
              </div>
            </div>
            <div className="border-2 border-[#ff004f] border-solid content-stretch flex flex-col gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[16px] shrink-0 w-[250px]">
              <p className="font-['Blinker',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ff004f] text-[24px] whitespace-nowrap">
                LIVE SHOP
              </p>
              <p className="font-['Blinker',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#1c0109] text-[24px] whitespace-nowrap">
                10 - 16%
              </p>
              <div className="bg-gradient-to-r from-[#ff004f] h-[7px] rounded-[80px] shadow-[0px_0px_4px_0px_rgba(255,0,79,0.5)] shrink-0 to-[#d10645] via-[#f93774] via-[51.923%] w-full" />
            </div>
            <div className="border-2 border-[#1c0109] border-solid content-stretch flex flex-col gap-[12px] items-center justify-center px-[24px] py-[16px] relative rounded-[16px] shrink-0 w-[250px]">
              <p className="font-['Blinker',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1c0109] text-[24px] whitespace-nowrap">
                VAREJO TRADICIONAL
              </p>
              <p className="font-['Blinker',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#1c0109] text-[24px] whitespace-nowrap">
                1 - 3%
              </p>
              <div className="h-[7px] relative shrink-0 w-full">
                <div className="absolute border border-[#030001] border-solid h-[7px] left-0 right-0 rounded-[4px] top-0" />
                <div className="absolute bg-[#030001] border border-[#030001] border-solid h-[7px] left-0 right-[162px] rounded-[4px] top-0" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="bg-[#1c0109] content-stretch flex flex-col items-center justify-center px-[200.5px] py-[96px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[1280px] relative shrink-0 w-full">
          <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0">
            <div className="relative shrink-0 size-[31px]">
              <div className="absolute inset-[-16.13%]">
                <img alt="" className="block max-w-none size-full" src={imgBenefitIconContainer} />
              </div>
            </div>
            <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-center text-white tracking-[-1.6426px] whitespace-nowrap">
              <p className="leading-[1.2]">Especialmente pensado para você que...</p>
            </div>
          </div>
          <motion.div className="content-center flex flex-wrap gap-[32px] items-center justify-center max-w-[1280px] relative shrink-0 w-full" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div className="bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch drop-shadow-[0px_0px_7.5px_rgba(248,65,120,0.3)] flex flex-col h-[211px] items-center justify-center p-[33px] relative rounded-[16px] shrink-0 w-[300px]" variants={cardVariant}>
              <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white w-full">
                <p className="leading-[1.2]">Quer vender mais, de forma escalável, sem precisar investir em mais equipe e estrutura</p>
              </div>
            </motion.div>
            <motion.div className="bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch drop-shadow-[0px_0px_7.5px_rgba(248,65,120,0.3)] flex flex-col h-[211px] items-center justify-center p-[33px] relative rounded-[16px] shrink-0 w-[300px]" variants={cardVariant}>
              <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white w-full">
                <p className="leading-[1.2]">Não faz ideia de onde e como começar a vender no formato mais promissor do e-commerce</p>
              </div>
            </motion.div>
            <motion.div className="bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch drop-shadow-[0px_0px_7.5px_rgba(248,65,120,0.3)] flex flex-col h-[211px] items-center justify-center p-[33px] relative rounded-[16px] shrink-0 w-[300px]" variants={cardVariant}>
              <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white w-full">
                <p className="leading-[1.2]">Quer crescer de forma segura, e procura um time que tem experiência no assunto.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center p-[80px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center max-w-[1280px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[24px] items-center justify-center leading-[0] not-italic relative shrink-0 text-center w-full">
              <div className="flex flex-col font-['Poppins',sans-serif] font-normal justify-center relative shrink-0 text-[#ff004f] text-[0px] tracking-[-1.6426px] w-full">
                <p className="text-[56px]">
                  <span className="font-['Blinker',sans-serif] font-normal leading-[1.2]">{`Para `}</span>
                  <span className="font-['Blinker',sans-serif] font-bold leading-[1.2]">marcas que querem vender mais</span>
                </p>
              </div>
              <p className="font-['Blinker',sans-serif] font-semibold relative shrink-0 text-[24px] text-white w-full" style={{ fontFeatureSettings: "'ss04' 1" }}>
                <span className="font-['Blinker',sans-serif] font-normal leading-[normal]">{`Feito para `}</span>
                <span className="leading-[normal]">{`fabricantes, importadores, ou revendedores `}</span>
                <span className="font-['Blinker',sans-serif] font-normal leading-[normal]">de qualquer nicho</span>
              </p>
            </div>
          </div>
          <div className="content-stretch flex gap-[64px] items-center max-w-[1280px] relative shrink-0 w-[1280px]">
            <motion.div className="content-stretch flex flex-col items-start relative shrink-0 w-[607.95px]" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <div className="bg-[#3e1c1e] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                    <div className="h-[16px] relative shrink-0 w-[20px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative self-stretch">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Blinker',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                        <p className="leading-[28px]">Lives de Vendas no TikTok e Shopee</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Blinker',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[472.19px]">
                        <p className="leading-[1.3]">Utilizamos o algoritmo a seu favor para alcançar milhares de potenciais clientes de forma orgânica.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <div className="bg-[#3e1c1e] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                    <div className="relative shrink-0 size-[22px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative self-stretch">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Blinker',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                        <p className="leading-[28px]">Equipamentos profissionais</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Blinker',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[471.09px]">
                        <p className="leading-[1.3] whitespace-pre-wrap">{`Equipamentos de vídeo, áudio e cenários  que aumentam o valor percebido da sua marca.`}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                  <div className="bg-[#3e1c1e] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                    <div className="h-[20px] relative shrink-0 w-[19.012px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative self-stretch">
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Blinker',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                        <p className="leading-[28px]">Estratégia de Performance</p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Blinker',sans-serif] font-normal h-[48px] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[512.11px]">
                        <p className="leading-[1.3]">Gatilhos mentais, roteiros validados e análise de dados em tempo real para maximizar seus resultados.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="aspect-video bg-[rgba(20,20,20,0.7)] border border-[rgba(255,255,255,0.5)] border-solid content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[24px] shrink-0" variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <div className="h-[340.02px] relative shrink-0 w-full">
                <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStudioProduction} />
              </div>
            </motion.div>
          </div>
          <motion.div className="bg-[#ebe610] content-stretch flex gap-[16px] items-center justify-center px-[24px] py-[16px] relative rounded-[40px] shrink-0 cursor-pointer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <p className="font-['Blinker',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#030001] text-[16px] uppercase whitespace-nowrap" style={{ fontFeatureSettings: "'ss04' 1, 'cv03' 1" }}>
              QUERO AUMENTAR MINHAS VENDAS
            </p>
            <div className="content-stretch flex items-center relative rounded-[40px] shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonIcon} />
                <div className="absolute inset-[9.39%_9.37%_9.37%_9.38%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#1c0109] content-stretch flex flex-col items-center justify-center p-[80px] relative shrink-0 w-full">
        <div className="content-stretch flex gap-[80px] items-center justify-center max-w-[1280px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
            <div className="content-stretch flex flex-col gap-[24px] items-center justify-center leading-[0] not-italic relative shrink-0 w-full">
              <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-white whitespace-nowrap">
                <p className="leading-[1.2]">Por que escolher a</p>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-[203.91px] mt-0 relative row-1 text-[#ff004f] text-[47.852px] whitespace-nowrap">
                  .
                </p>
                <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-0 mt-0 relative row-1 text-[#ff004f] text-[47.852px] whitespace-nowrap">
                  live
                </p>
                <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-[100.5px] mt-0 relative row-1 text-[#ebe610] text-[47.852px] whitespace-nowrap">
                  hub
                </p>
                <p className="col-1 font-['BC_Barell',sans-serif] leading-[normal] ml-[2.89px] mt-[45.66px] relative row-1 text-[17.564px] text-white tracking-[1.4051px] w-[217.114px]">
                  estúdio e performance
                </p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[607.95px]">
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="bg-[#3e1c1e] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                  <div className="h-[16px] relative shrink-0 w-[20px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Blinker',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                      <p className="leading-[28px]">Estratégias validadas de verdade</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[471.09px]">
                      <p className="leading-[1.3]">A Live Hub faz parte de um grupo empresarial que possui e-commerces, empresas de consultoria e marketing. Nós aplicamos de verdade o que estamos te oferecendo.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="bg-[#3e1c1e] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                  <div className="relative shrink-0 size-[22px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer1} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative self-stretch">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Blinker',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                      <p className="leading-[28px]">Apoio em todas as etapas</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[471.09px]">
                      <p className="leading-[1.3]">Cada projeto é customizado. Nosso time irá entender o cenário do seu negócio e vamos montar um plano estratégico para uma parceria de sucesso.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="bg-[#3e1c1e] content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[48px]">
                  <div className="h-[20px] relative shrink-0 w-[19.012px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer2} />
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative self-stretch">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Blinker',sans-serif] font-bold h-[28px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white w-full">
                      <p className="leading-[28px]">Equipe qualificada</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[512.11px]">
                      <p className="leading-[1.3]">Nossos Apresentadores (Live Sellers) e Operadores de Live, recebem treinamento completo de vendas com profissionais experientes, que já faturaram milhões de reais com Lives no Brasil.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center p-[80px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[1280px] relative shrink-0 w-full">
          <motion.div className="content-stretch flex flex-col gap-[10px] items-start leading-[0] not-italic relative shrink-0 text-center w-full" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} custom={0}>
            <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center relative shrink-0 text-[40px] text-white w-full">
              <p className="leading-[1.2]">Mercado bilionário</p>
            </div>
            <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center relative shrink-0 text-[#ff004f] text-[32px] w-full">
              <p className="mb-0">
                <span className="leading-[1.3]">{`O `}</span>
                <span className="font-['Blinker',sans-serif] font-bold leading-[1.3] not-italic">Live Shopping</span>
                <span className="leading-[1.3]">{` já representa mais de `}</span>
                <span className="font-['Blinker',sans-serif] font-bold leading-[1.3] not-italic">20% de todo e-commerce</span>
                <span className="leading-[1.3]">{` chinês.`}</span>
              </p>
              <p>
                <span className="leading-[1.3]">{`No `}</span>
                <span className="font-['Blinker',sans-serif] font-bold leading-[1.3] not-italic">Brasil</span>
                <span className="leading-[1.3]">{`, está `}</span>
                <span className="font-['Blinker',sans-serif] font-bold leading-[1.3] not-italic">apenas começando</span>
                <span className="leading-[1.3]">.</span>
              </p>
            </div>
          </motion.div>
          <div className="content-start flex flex-wrap gap-[10px] items-start relative shrink-0 w-[1280px]">
            <div className="h-[174px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[408px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
            </div>
            <div className="h-[173px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[408px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
            </div>
            <div className="h-[136.794px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[441px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
            </div>
            <div className="h-[174px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[609px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
            </div>
            <div className="h-[129px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[658px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
            </div>
          </div>
          <div className="border border-[#ff004f] border-solid content-stretch flex items-center justify-center px-[40px] py-[24px] relative rounded-[120px] shrink-0 w-[893px]">
            <div className="flex flex-col font-['Blinker',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white w-[685px]">
              <p className="leading-[1.3]">Empresas que apostarem nesse canal de vendas irão surfar a maior onda do e-commece brasileiro nos próximos anos.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ff004f] content-stretch flex flex-col items-center justify-center p-[80px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[72px] items-center max-w-[1280px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center max-w-[1280px] relative shrink-0 w-full">
            <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-white whitespace-nowrap">
              <p className="leading-[1.2]">Como funciona na prática</p>
            </div>
          </div>
          <motion.div className="content-stretch flex gap-[80px] items-center justify-center relative shrink-0 w-full" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <div className="absolute border-[#ebe610] border-dashed border-t-2 h-[2px] left-[14.84%] right-[14.38%] top-[48px]" />
            <motion.div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative" variants={cardVariant}>
              <div className="bg-[#1c0109] content-stretch drop-shadow-[0px_0px_15px_rgba(255,0,60,0.2)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[96px]">
                <div className="h-[30px] relative shrink-0 w-[27px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer3} />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-white whitespace-nowrap">
                  <p className="leading-[1.2] mb-0">1. Envie amostras</p>
                  <p className="leading-[1.2]">dos seus produtos</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="flex flex-col font-['Blinker',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-full">
                  <p className="leading-[24px]">Mandamos a logística buscar ou você envia para nosso estúdio.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative" variants={cardVariant}>
              <div className="bg-[#1c0109] border-2 border-[#ebe610] border-solid content-stretch drop-shadow-[0px_0px_10px_rgba(0,0,0,0.25)] flex items-center justify-center p-[2px] relative rounded-[9999px] shrink-0 size-[96px]">
                <div className="relative shrink-0 size-[30px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer4} />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-white whitespace-nowrap">
                  <p className="leading-[1.2] mb-0">2. Nós rodamos as</p>
                  <p className="leading-[1.2]">lives por você</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="flex flex-col font-['Blinker',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-full">
                  <p className="leading-[24px]">Nossos especialistas entram no ar com roteiro e produção profissional.</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-w-px relative" variants={cardVariant}>
              <div className="bg-[#ebe610] content-stretch drop-shadow-[0px_0px_15px_rgba(254,212,0,0.2)] flex items-center justify-center relative rounded-[9999px] shrink-0 size-[96px]">
                <div className="h-[24px] relative shrink-0 w-[33px]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer5} />
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32px] text-center text-white whitespace-nowrap">
                  <p className="leading-[1.2] mb-0">3. Você vende muito</p>
                  <p className="leading-[1.2]">mais todos os dias</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
                <div className="flex flex-col font-['Blinker',sans-serif] font-normal h-[40px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-white w-full">
                  <p className="leading-[24px] mb-0">Veja as vendas caírem direto no seu</p>
                  <p className="leading-[24px]">dashboard em tempo real.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <div className="content-stretch flex items-start relative shrink-0">
            <div className="content-stretch flex gap-[25.339px] items-center leading-[0] not-italic relative shrink-0 whitespace-nowrap">
              <div className="-translate-y-1/2 absolute flex flex-col font-['Blinker',sans-serif] font-bold justify-center left-[176.35px] text-[98.085px] text-[rgba(43,6,16,0.15)] top-[22.84px]">
                <p className="leading-none">R$</p>
              </div>
              <div className="flex flex-col font-['Blinker',sans-serif] font-light justify-center relative shrink-0 text-[26.156px] text-right text-white">
                <p className="leading-none mb-0">Live Commerce</p>
                <p className="leading-none">movimenta por ano</p>
              </div>
              <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center relative shrink-0 text-[26.156px] text-white">
                <p className="leading-none mb-0">US$ 160</p>
                <p className="leading-none">BILHÕES</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ebe610] content-stretch flex gap-[16px] items-center justify-center px-[24px] py-[16px] relative rounded-[40px] shrink-0">
            <p className="font-['Blinker',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#030001] text-[16px] uppercase whitespace-nowrap" style={{ fontFeatureSettings: "'ss04' 1, 'cv03' 1" }}>
              falar com especialista da live hub
            </p>
            <div className="content-stretch flex items-center relative rounded-[40px] shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonIcon} />
                <div className="absolute inset-[9.39%_9.37%_9.37%_9.38%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#030001] content-stretch flex flex-col items-center justify-center py-[96px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[1280px] relative shrink-0 w-full">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0">
            <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-[203.91px] mt-0 relative row-1 text-[#ff004f] text-[47.852px] whitespace-nowrap">
              .
            </p>
            <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-0 mt-0 relative row-1 text-[#ff004f] text-[47.852px] whitespace-nowrap">
              live
            </p>
            <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-[100.5px] mt-0 relative row-1 text-[#ebe610] text-[47.852px] whitespace-nowrap">
              hub
            </p>
            <p className="col-1 font-['BC_Barell',sans-serif] leading-[normal] ml-[2.89px] mt-[45.66px] relative row-1 text-[17.564px] text-white tracking-[1.4051px] w-[217.114px]">
              estúdio e performance
            </p>
          </div>
          <motion.div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(3,minmax(0,1fr))] grid-rows-[__178px_178px] max-w-[1280px] relative shrink-0 w-full" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            <motion.div className="bg-[#1c0109] border border-[#ff004f] border-solid col-1 content-stretch drop-shadow-[0px_0px_7.5px_rgba(248,65,120,0.3)] flex flex-col gap-[8px] items-start justify-self-stretch p-[33px] relative rounded-[16px] row-1 self-start shrink-0" variants={cardVariant}>
              <div className="h-[19.8px] relative shrink-0 w-[22px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.4px] uppercase w-full">
                    <p className="leading-[24px]">não precisa APARECER</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
                    <p className="leading-[20px]">Nós fornecemos os Live Sellers treinados para vender pela sua marca.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="bg-[#1c0109] border border-[#ff004f] border-solid col-2 content-stretch drop-shadow-[0px_0px_7.5px_rgba(248,65,120,0.3)] flex flex-col gap-[8px] items-start justify-self-stretch p-[33px] relative rounded-[16px] row-1 self-start shrink-0" variants={cardVariant}>
              <div className="h-[18px] relative shrink-0 w-[16px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.4px] uppercase w-full">
                    <p className="leading-[24px]">PRODUÇÃO PROFISSIONAL</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
                    <p className="leading-[20px]">Qualidade de estúdio direto no celular do seu cliente.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="bg-[#1c0109] border border-[#ff004f] border-solid col-3 content-stretch drop-shadow-[0px_0px_7.5px_rgba(248,65,120,0.3)] flex flex-col gap-[8px] items-start justify-self-stretch p-[33px] relative rounded-[16px] row-1 self-start shrink-0" variants={cardVariant}>
              <div className="h-[20.071px] relative shrink-0 w-[20.047px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon2} />
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.4px] uppercase w-full">
                    <p className="leading-[24px]">ESTRATÉGIA DE VENDAS</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
                    <p className="leading-[20px] mb-0">Foco total em conversão através de gatilhos</p>
                    <p className="leading-[20px]">psicológicos.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="bg-[#1c0109] border border-[#ff004f] border-solid col-1 content-stretch drop-shadow-[0px_0px_7.5px_rgba(248,65,120,0.3)] flex flex-col gap-[8px] items-start justify-self-stretch p-[33px] relative rounded-[16px] row-2 self-start shrink-0" variants={cardVariant}>
              <div className="h-[12px] relative shrink-0 w-[24px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon3} />
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.4px] uppercase w-full">
                    <p className="leading-[24px]">TIME DE ESPECIALISTAS</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
                    <p className="leading-[20px]">{`Economize o seu tempo. Diretores e Operadores de Live cuidando de tudo por você. `}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="bg-[#1c0109] border border-[#ff004f] border-solid col-2 content-stretch drop-shadow-[0px_0px_7.5px_rgba(248,65,120,0.3)] flex flex-col gap-[8px] items-start justify-self-stretch p-[33px] relative rounded-[16px] row-2 self-start shrink-0" variants={cardVariant}>
              <div className="h-[16px] relative shrink-0 w-[20.002px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon4} />
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.4px] uppercase w-full">
                    <p className="leading-[24px]">ESCALABILIDADE</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
                    <p className="leading-[20px] mb-0">Aumente seu volume de vendas sem aumentar</p>
                    <p className="leading-[20px]">sua estrutura fixa.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="bg-[#1c0109] border border-[#ff004f] border-solid col-3 content-stretch drop-shadow-[0px_0px_7.5px_rgba(248,65,120,0.3)] flex flex-col gap-[8px] items-start justify-self-stretch p-[33px] relative rounded-[16px] row-2 self-start shrink-0" variants={cardVariant}>
              <div className="h-[20px] relative shrink-0 w-[16px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon5} />
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[0.4px] uppercase w-full">
                    <p className="leading-[24px]">RISCO REDUZIDO</p>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
                  <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
                    <p className="leading-[20px]">Modelo baseado em performance. Nós ganhamos quando você ganha.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#1c0109] content-stretch flex flex-col items-center justify-center py-[96px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center justify-center max-w-[1280px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0">
            <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-white whitespace-nowrap">
              <p className="leading-[1.2]">Ainda tem dúvida?</p>
            </div>
          </div>
          <div className="content-center flex flex-wrap gap-[32px] items-center justify-center max-w-[1280px] relative shrink-0 w-full">
            <div className="bg-[#3e1c1e] border-2 border-[#ff004f] border-solid content-stretch drop-shadow-[0px_0px_7.5px_rgba(248,65,120,0.3)] flex flex-col gap-[8px] items-center justify-center p-[34px] relative rounded-[16px] shrink-0 w-[300px]">
              <div className="relative shrink-0 size-[31px]">
                <div className="absolute inset-[-16.13%]">
                  <img alt="" className="block max-w-none size-full" src={imgBenefitIconContainer} />
                </div>
              </div>
              <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#ebe610] text-[32px] text-center w-[min-content]">
                <p className="leading-[1.2]">TEST-LIVE</p>
              </div>
              <div className="flex flex-col font-['Blinker',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#ebe610] text-[24px] text-center w-[min-content]">
                <p className="leading-[1.2]">COM 5H DE DURAÇÃO</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col font-['Blinker',sans-serif] font-normal gap-[24px] items-start leading-[0] not-italic relative shrink-0 text-[20px] text-white w-[512.11px]">
              <div className="flex flex-col justify-center relative shrink-0 w-full">
                <p className="leading-[1.3]">{`Nós realizamos 5 HORAS DE LIVE dos seus produtos para te mostrar os resultados que conseguimos chegar por você. `}</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 w-full">
                <p className="leading-[1.3]">Você paga apenas um pequeno valor para cobrir os custos da operação, que retorna para você ao contratar um plano.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#ebe610] content-stretch flex gap-[16px] items-center justify-center px-[24px] py-[16px] relative rounded-[40px] shrink-0">
            <p className="font-['Blinker',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#030001] text-[16px] uppercase whitespace-nowrap" style={{ fontFeatureSettings: "'ss04' 1, 'cv03' 1" }}>
              falar com especialista da live hub
            </p>
            <div className="content-stretch flex items-center relative rounded-[40px] shrink-0">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgButtonIcon} />
                <div className="absolute inset-[9.39%_9.37%_9.37%_9.38%]">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#030001] content-stretch flex flex-col items-center justify-center px-[392.5px] py-[96px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[896px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="flex flex-col font-['Blinker',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-white whitespace-nowrap">
              <p className="leading-[1.2]">Perguntas Frequentes</p>
            </div>
          </div>
          <motion.div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            <motion.div className="backdrop-blur-[8px] bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col items-start p-[25px] relative rounded-[16px] shrink-0 w-full" variants={cardVariant}>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Blinker',sans-serif] font-semibold h-[28px] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
                    <p className="leading-[28px]">Eu preciso aparecer nas lives?</p>
                  </div>
                  <div className="h-[7.4px] relative shrink-0 w-[12px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="backdrop-blur-[8px] bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col items-start p-[25px] relative rounded-[16px] shrink-0 w-full" variants={cardVariant}>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Blinker',sans-serif] font-semibold h-[28px] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
                    <p className="leading-[28px]">Vocês estão em São Paulo. Eu também preciso estar?</p>
                  </div>
                  <div className="h-[7.4px] relative shrink-0 w-[12px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="backdrop-blur-[8px] bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col items-start p-[25px] relative rounded-[16px] shrink-0 w-full" variants={cardVariant}>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Blinker',sans-serif] font-semibold h-[28px] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
                    <p className="leading-[28px]">Vocês fazem tudo ou eu preciso montar alguma estrutura?</p>
                  </div>
                  <div className="h-[7.4px] relative shrink-0 w-[12px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="backdrop-blur-[8px] bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col items-start p-[25px] relative rounded-[16px] shrink-0 w-full" variants={cardVariant}>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Blinker',sans-serif] font-semibold h-[28px] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
                    <p className="leading-[28px]">Em quais plataformas vocês fazem as lives?</p>
                  </div>
                  <div className="h-[7.4px] relative shrink-0 w-[12px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="backdrop-blur-[8px] bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col items-start p-[25px] relative rounded-[16px] shrink-0 w-full" variants={cardVariant}>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Blinker',sans-serif] font-semibold h-[28px] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
                    <p className="leading-[28px]">Em quanto tempo eu começo a ver resultado?</p>
                  </div>
                  <div className="h-[7.4px] relative shrink-0 w-[12px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="backdrop-blur-[8px] bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col items-start p-[25px] relative rounded-[16px] shrink-0 w-full" variants={cardVariant}>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Blinker',sans-serif] font-semibold h-[28px] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
                    <p className="leading-[28px]">E se meu produto não vender bem ao vivo?</p>
                  </div>
                  <div className="h-[7.4px] relative shrink-0 w-[12px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="backdrop-blur-[8px] bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col items-start p-[25px] relative rounded-[16px] shrink-0 w-full" variants={cardVariant}>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Blinker',sans-serif] font-semibold h-[28px] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
                    <p className="leading-[28px]">Vocês ajudam na estratégia de preço e oferta?</p>
                  </div>
                  <div className="h-[7.4px] relative shrink-0 w-[12px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div className="backdrop-blur-[8px] bg-[#3e1c1e] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex flex-col items-start p-[25px] relative rounded-[16px] shrink-0 w-full" variants={cardVariant}>
              <div className="relative shrink-0 w-full">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
                  <div className="flex flex-[1_0_0] flex-col font-['Blinker',sans-serif] font-semibold h-[28px] justify-center leading-[0] min-w-px not-italic relative text-[18px] text-white">
                    <p className="leading-[28px]">Qual é o diferencial da Live Hub em relação a outras soluções?</p>
                  </div>
                  <div className="h-[7.4px] relative shrink-0 w-[12px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgContainer6} />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#ff004f] content-stretch flex flex-col items-center justify-center px-[200.5px] py-[96px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[56px] items-start px-[5px] relative shrink-0">
          <div className="content-stretch flex gap-[56px] items-center justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[220.001px]">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0">
                <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-[203.91px] mt-0 relative row-1 text-[47.852px] text-white whitespace-nowrap">
                  .
                </p>
                <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-0 mt-0 relative row-1 text-[47.852px] text-white whitespace-nowrap">
                  live
                </p>
                <p className="col-1 font-['Shuriken_Boy_Std',sans-serif] leading-[normal] ml-[100.5px] mt-0 relative row-1 text-[#ebe610] text-[47.852px] whitespace-nowrap">
                  hub
                </p>
                <p className="col-1 font-['BC_Barell',sans-serif] leading-[normal] ml-[2.89px] mt-[45.66px] relative row-1 text-[17.564px] text-white tracking-[1.4051px] w-[217.114px]">
                  estúdio e performance
                </p>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px overflow-clip p-[7.113px] relative">
              <div className="content-stretch flex gap-[16px] items-center justify-center relative rounded-[56.906px] shrink-0">
                <div className="content-stretch flex gap-[19.228px] h-[30.765px] items-start relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[27.301px]">
                    <div className="absolute inset-[0_0.06%_0.02%_0]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
                    </div>
                    <div className="absolute inset-[24.32%]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
                    </div>
                    <div className="absolute inset-[17.3%_17.3%_70.7%_70.7%]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector6} />
                    </div>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[27.301px]">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSocialIcons} />
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[27.301px]">
                    <div className="absolute inset-[14.82%_0_14.84%_0]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector7} />
                    </div>
                  </div>
                  <div className="overflow-clip relative shrink-0 size-[27.301px]">
                    <div className="absolute inset-[0_7.2%_0_6.77%]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector8} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#ebe610] content-stretch flex items-center justify-center px-[24px] py-[16px] relative rounded-[40px] shrink-0">
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                    <p className="font-['Blinker',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#130106] text-[16px] uppercase whitespace-nowrap">
                      contato
                    </p>
                    <div className="h-[19.498px] relative shrink-0 w-[19.5px]">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-0 relative shrink-0 w-[1101px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none size-full" src={imgLine1} />
            </div>
          </div>
          <div className="content-stretch flex gap-[32px] items-center max-w-[1280px] relative shrink-0 w-[1111px]">
            <div className="content-stretch flex flex-[1_0_0] flex-col font-['Blinker',sans-serif] font-semibold gap-[8px] items-start justify-center leading-[0] min-w-px not-italic relative text-[14px] text-white">
              <div className="flex flex-col justify-center relative shrink-0 w-full">
                <p className="leading-[20px]">© 2026 Live Hub</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 w-full">
                <p className="leading-[20px]">CNPJ 54.988.708/0001-21</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
              <div className="flex flex-col font-['Blinker',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white w-[81px]">
                <p className="leading-[16px]">Uma empresa do grupo</p>
              </div>
              <div className="content-stretch flex h-[28px] items-center relative shrink-0 w-[179.915px]">
                <div className="h-[28px] relative shrink-0 w-[179.915px]">
                  <img alt="Logo grupo" className="absolute block inset-0 max-w-none size-full" src={imgLogoV11} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}