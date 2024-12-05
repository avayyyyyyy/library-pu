import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const EBooksAndServices = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <section>
        <div className="text-gray-700 space-y-3 leading-relaxed">
          <p>
            The Central Library at Poornima University serves as an
            indispensable resource for both students and faculty. The library
            provides a rich collection of academic materials, including books,
            journals, and electronic resources, catering to various fields of
            study and research.
          </p>
          <p>
            With a focus on providing accessible and comprehensive learning
            resources, the Central Library offers a blend of print and digital
            media to meet the educational and research needs of the Poornima
            University community.
          </p>
          <p>
            The library's advanced technology enables students to explore a wide
            range of e-books, online databases, and journals, helping them stay
            current with the latest developments in their academic areas.
          </p>
          <p>
            In addition to study spaces and collaborative work areas, the
            library regularly organizes academic activities, such as workshops
            and seminars, which foster a culture of learning and intellectual
            growth.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-[#1e3a8a] font-serif text-3xl mb-4  border-b-2 border-blue-200 pb-2">
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
                <TableCell className="border px-4 py-2 text-center">
                  9:00 AM – 8:00 PM
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" border px-4 py-2 bg-gray-50">
                  Saturday
                </TableCell>
                <TableCell className="border px-4 py-2 text-center">
                  9:00 AM – 5:00 PM
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className=" border px-4 py-2 bg-gray-50">
                  Sunday and Holidays
                </TableCell>
                <TableCell className="border px-4 py-2 text-center">
                  Closed
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      <section>
        <h2 className="text-[#1e3a8a] font-serif text-3xl mb-4  border-b-2 border-blue-200 pb-2">
          Library Services
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Poornima University Libraries offer a range of services to support
            the academic and research endeavors of the students and faculty,
            including:
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Inter-Library Loan:</strong> The library provides an
              inter-library loan service through DELNET to fulfill special
              document requests.
            </li>
            <li>
              <strong>Photocopying and Printing:</strong> Students and faculty
              can avail printing and photocopying services for academic
              materials at a nominal charge.
            </li>
            <li>
              <strong>Web OPAC Service:</strong> Access the library catalog
              through the university’s intranet to search for available
              resources.
            </li>
            <li>
              <strong>Reference Service:</strong> The library offers guidance
              and assistance in locating print and digital resources for
              academic and research purposes.
            </li>
            <li>
              <strong>Current Awareness Service:</strong> The library helps
              faculty members stay updated with the latest developments in their
              fields of study.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-[#1e3a8a] font-serif text-3xl mb-4  border-b-2 border-blue-200 pb-2">
          Loan Privileges
        </h2>
        <Table className="w-full border-collapse border border-gray-300 shadow-sm">
          <TableHeader>
            <TableRow className="bg-blue-50">
              <TableHead className="text-center text-blue-900">
                Borrower Type
              </TableHead>
              <TableHead className="text-center text-blue-900">
                No. of Books
              </TableHead>
              <TableHead className="text-center text-blue-900">
                Loan Period
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border px-4 py-2">
                Faculty Members
              </TableCell>
              <TableCell className="border px-4 py-2 text-center">8</TableCell>
              <TableCell className="border px-4 py-2 text-center">
                One Semester
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border px-4 py-2">PG Students</TableCell>
              <TableCell className="border px-4 py-2 text-center">5</TableCell>
              <TableCell className="border px-4 py-2 text-center">
                14 Days
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border px-4 py-2">UG Students</TableCell>
              <TableCell className="border px-4 py-2 text-center">5</TableCell>
              <TableCell className="border px-4 py-2 text-center">
                14 Days
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
};

export default EBooksAndServices;
