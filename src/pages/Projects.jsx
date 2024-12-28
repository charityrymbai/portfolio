import { camlLogo, hackerrank, iitb, isro, schoolLogo } from "../../public/images";
import ItemWithLink from "../components/ItemWithLink";
  
const Projects = () => (
    <div className="flex flex-col items-center justify-center gap-6 text-left p-6 bg-white h-screen">
      <h1 className="text-5xl font-bold mb-4">Projects:</h1>
      <ul>
        <ItemWithLink
          logo={camlLogo}
          link="https://caml.ceew.xyz"
          title="Caml"
          details={
            <>
               - Won 3rd place out of 70+ participants in Cognitia (NIT Meghalaya's Annual Technical Fest).<br />
               - Caml is an AI wrapper application that takes input from users and creates flashcards, quizzes, and more. It makes learning interactive and fun.
            </>
          }
        />
        <ItemWithLink
          logo={schoolLogo}
          link="https://school-management-website.ceew.xyz"
          title="School Management Website"
          details={
            <>
               - Made to cater to the needs of a school to manage fees, books, admissions process, digital notice board, attendance records, and more.s.<br />
            </>
          }
        />
      </ul>
    </div>
  );

export default Projects