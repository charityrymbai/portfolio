import { NITMLogo, schoolLogo, stEdmundsLogo } from "../../public/images";
import ItemWithoutLink from "../components/ItemWithoutLink";
  
const About = () => (
    <div className="pt-[100px] sm:pt-0 flex flex-col items-center justify-center gap-6 text-left p-6 bg-white h-screen">
      <h1 className="text-2xl sm:text-5xl font-bold mb-4">Education:</h1>
      <ul>
        <ItemWithoutLink
          logo={NITMLogo}
          title="National Institute of Technology, Meghalaya"
          details={
            <>
              B.Tech in Mechanical Engineering <br /> 2023-2027
            </>
          }
        />
        <ItemWithoutLink
          logo={stEdmundsLogo}
          title="St. Edmunds Higher Secondary School, Shillong, Meghalaya"
          details={
            <>
              Science Stream, MBOSE<br />
              2020-2022
            </>
          }
        />
        <ItemWithoutLink
          logo={schoolLogo}
          title="St. Francis D'Assisi Higher Secondary School, Umbir, Meghalaya"
          details={
            <>
              MBOSE<br />
              2020
            </>
          }
        />
      </ul>
    </div>
  );

export default About