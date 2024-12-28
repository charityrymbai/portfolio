import { hackerrank, iitb, isro } from "../../public/images";
import ItemWithLink from "../components/ItemWithLink";
  
const Certifications = () => (
    <div className="pt-[100px] flex flex-col items-center gap-6 text-left p-6 bg-white h-screen">
      <h1 className="text-2xl sm:text-5xl font-bold mb-4">Certifications:</h1>
      <ul>
        <ItemWithLink
          logo={iitb}
          link="https://drive.google.com/file/d/1lG_C4uUg0yFaCZ2WzI7Jmqk3KHnzIY0t/view"
          title="Attended Lecture Series on the Wonderful World of AI"
          details={
            <>
              By Prof. Pushpak Bhattacharyya, IIT Bombay <br /> 20th April 2023
            </>
          }
        />
        <ItemWithLink
          logo={hackerrank}
          link="https://drive.google.com/file/d/1UzrjGII-w7BsVYXiKp8H6HA14bTQjX0w/view"
          title="Hackerrank JavaScript Basic Certificate"
          details="Certified on 31st December 2023"
        />
        <ItemWithLink
          logo={isro}
          link="https://drive.google.com/file/d/1uLULYWhrdRh3la-L_IryXA_RJgHWrJ-N/view"
          title="Course Participation: Remote Sensing & GIS for Environmental Studies"
          details={
            <>
              Conducted by ISRO <br /> 26th-30th July 2021
            </>
          }
        />
      </ul>
    </div>
  );

export default Certifications;