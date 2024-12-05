import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "./DialogImage";

const libraryTeam = [
  {
    name: "Dr. K.S. Shivraj",
    position: "Chief Librarian, MUJ Libraries",
    qualifications: "B.SC., M.A., M.L.I.S., M.Phil., PGDCA, Ph.D",
    email: "karamadai.shivraj@jaipur.manipal.edu",
    image: "https://xetaravel.com/images/avatar.png",
  },
  {
    name: "Mr. Satya Narayan Bagada",
    position: "Librarian",
    qualifications: "B. Com., M.L.I.S",
    email: "satyanarayan.bagada@jaipur.manipal.edu",
    image: "https://xetaravel.com/images/avatar.png",
  },
  {
    name: "Dr.Alka Pandy",
    position: "Asst. Librarian",
    qualifications: "B.A., LL.B, B.LI.Sc., M.L.I.S., Ph.D",
    email: "periodicals@jaipur.manipal.edu",
    image: "https://xetaravel.com/images/avatar.png",
  },
  {
    name: "Mr. Laxman S Shekhawat",
    position: "Professional Assistant (I) Technical Section",
    qualifications: "B.A., B.LI.Sc., M.LI.Sc.",
    email: "books@jaipur.manipal.edu",
    image: "https://xetaravel.com/images/avatar.png",
  },
  {
    name: "Mr. Ramraj Choudhary",
    position: "Professional Assistant (II) Technical Section",
    qualifications: "B.A., B.ED., B.LI.Sc., M.LI.Sc.,",
    email: "",
    image: "https://xetaravel.com/images/avatar.png",
  },
  {
    name: "Mr. Omprakash Verma",
    position: "Professional Assistant (II) Technical Section",
    qualifications: "B.A., M.A., D.LI.Sc., B.LI.Sc., M.LI.Sc.,",
    email: "",
    image: "https://xetaravel.com/images/avatar.png",
  },
  {
    name: "Mr. Vikas Tatiwal",
    position: "Digital Library Assistant (III)",
    qualifications: "Diploma Computer Hardware , MCA",
    email: "vikas.tatiwal@jaipur.manipal.edu",
    image: "https://xetaravel.com/images/avatar.png",
  },
  {
    name: "Mr. Dheeraj Sain",
    position: "Junior Digital Library Assistant",
    qualifications: "Diploma in Php, MCA",
    email: "dheeraj.sain@jaipur.manipal.edu",
    image: "https://xetaravel.com/images/avatar.png",
  },
];

const Overview = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <section>
        <div className="text-gray-700 space-y-3 leading-relaxed">
          <p>
            The Central Library at Poornima University serves as a prominent
            source of knowledge, offering a scholarly sanctuary for both
            students and academic members. This repository is an essential
            component of the academic ecosystem, promoting a culture of
            research, education, and intellectual investigation.
          </p>
          <p>
            The Central Library houses a vast and varied collection of books,
            periodicals, journals, magazines, and reference materials. It serves
            as a valuable resource for meeting the educational requirements of
            all academic disciplines offered at the institution. The rapid
            accessibility of resources, facilitated by user-friendly technology
            and a committed staff, ensures that students may effectively support
            their academic pursuits and research initiatives.
          </p>
          <p>
            The library serves as more than just a physical location; it acts as
            a digital portal to an extensive realm of e-books, online journals,
            and research databases. Students are provided with the opportunity
            to explore a vast amount of knowledge, keeping themselves updated on
            the most recent advancements in their specific areas of study. The
            serene study zones and cooperative workspaces within the library
            foster an atmosphere that is favorable for concentrated learning and
            group deliberations.
          </p>
          <p>
            In addition, the Central Library functions as a central point for
            academic activities, workshops, and seminars, promoting a culture of
            intellectual interchange and cooperation. Poornima University's
            commitment to consistently expanding the library's resources ensures
            that it remains a vibrant hub of education, enabling students to
            flourish in their academic endeavors and contribute to the
            ever-growing realm of knowledge.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-[#1e3a8a] font-serif text-3xl mb-4  border-b-2 border-[#485882] pb-2">
          Working Hours
        </h2>
        <div className="space-y-6">
          <Table className="w-full border-collapse border border-gray-300 shadow-sm">
            <TableHeader>
              <TableRow className="bg-blue-50">
                <TableHead className="text-center  text-blue-900 " colSpan={3}>
                  Week Days
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className=" border px-4 py-2 bg-gray-50">
                  Working Hours
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  8:30 AM
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  11:00 PM
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" border px-4 py-2 bg-gray-50">
                  Issues/Returns
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  8:00 AM
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  6:00 PM
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" border px-4 py-2 bg-gray-50">
                  Reprography
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  9:00 AM
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  5:00 PM
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table className="w-full border-collapse border border-gray-300 shadow-sm">
            <TableHeader>
              <TableRow className="bg-blue-50">
                <TableHead className="text-center  text-blue-900" colSpan={3}>
                  Sundays & Holidays
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className=" border px-4 py-2 bg-gray-50">
                  Working Hours
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  9:00 AM
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  6:00 PM
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" border px-4 py-2 bg-gray-50">
                  Issues/Returns
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  9:00 AM
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  6:00 PM
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" border px-4 py-2 bg-gray-50">
                  Reprography
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  9:00 AM
                </TableCell>
                <TableCell className="text-center border px-4 py-2">
                  6:00 PM
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section>
        <h2 className="text-[#1e3a8a] font-serif text-3xl mb-4  border-b-2 border-[#485882] pb-2">
          Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src={`https://poornima.edu.in/assets/images/infrastructure/Central%20Library/centrallibrary${
                  index + 1
                }.webp`}
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-[#1e3a8a] font-serif text-3xl mb-4  border-b-2 border-[#485882] pb-2">
          Library Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {libraryTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-2xl hover:scale-110 duration-200 rounded-lg shadow-md p-4 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
              <h3 className="text-lg  text-[#1e3a8a] font-serif">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.position}</p>
              <p className="text-xs text-gray-500 mt-1">
                {member.qualifications}
              </p>
              {member.email && (
                <p className="text-xs text-[#1e3a8a] mt-1 truncate">
                  {member.email}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Overview;
