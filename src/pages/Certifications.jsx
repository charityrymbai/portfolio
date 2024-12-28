import ItemWithLink from "../components/ItemWithLink";
  
const Certifications = () => (
    <div className="flex flex-col items-center justify-center gap-6 text-left p-6 bg-white h-screen">
      <h1 className="text-5xl font-bold mb-4">Certifications:</h1>
      <ul>
        <ItemWithLink
          logos={["/iitb.png"]}
          link="https://drive.google.com/file/d/1lG_C4uUg0yFaCZ2WzI7Jmqk3KHnzIY0t/view"
          title="Attended Lecture Series on the Wonderful World of AI"
          details={
            <>
              By Prof. Pushpak Bhattacharyya, IIT Bombay <br /> 20th April 2023
            </>
          }
        />
        <ItemWithLink
          logos={["/hackerrank.png"]}
          link="https://drive.google.com/file/d/1UzrjGII-w7BsVYXiKp8H6HA14bTQjX0w/view"
          title="Hackerrank JavaScript Basic Certificate"
          details="Certified on 31st December 2023"
        />
        <ItemWithLink
          logos={["/isro_logo.png"]}
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