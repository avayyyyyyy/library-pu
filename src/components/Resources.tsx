import React from "react";

type ResourceItem = {
  sno: number;
  name: string;
  url: string;
};

type BookItem = {
  name: string;
  NoofTitles: number;
  NoofVolumes: number;
  EBooks: number;
};

interface OpenAccessTableProps {
  title: string;
  data: ResourceItem[];
}

const data = {
  onlineCourses: [
    { sno: 1, name: "SWAYAM Online Courses", url: "https://swayam.gov.in/" },
    { sno: 2, name: "NPTEL", url: "https://nptel.ac.in/" },
    {
      sno: 3,
      name: "Harvard online courses",
      url: "https://online-learning.harvard.edu/",
    },
    {
      sno: 4,
      name: "MIT Open Courseware",
      url: "https://ocw.mit.edu/index.htm",
    },
    { sno: 5, name: "e-PG Pathshala", url: "https://epgp.inflibnet.ac.in/" },
    {
      sno: 6,
      name: "e-Content courseware in UG subjects",
      url: "http://cec.nic.in/cec/",
    },
    { sno: 7, name: "Infoport", url: "https://infoport.inflibnet.ac.in/" },
    {
      sno: 8,
      name: "UG/PG MOOCs",
      url: "http://ugcmoocs.inflibnet.ac.in/ugcmoocs/",
    },
    {
      sno: 9,
      name: "IEEE online courses",
      url: "https://ieeexplore.ieee.org/",
    },
  ],
  eJournals: [
    {
      sno: 1,
      name: "Directory of Open Access Journals",
      url: "https://doaj.org/",
    },
    {
      sno: 2,
      name: "Cambridge University Press",
      url: "https://www.cambridge.org/core/services/open-research/open-access",
    },
    {
      sno: 3,
      name: "Science Direct Open Access",
      url: "https://www.sciencedirect.com/browse/journals-and-books?accessType=openAccess",
    },
    {
      sno: 4,
      name: "Springer Open Journals",
      url: "https://www.springeropen.com/journals-a-z",
    },
    {
      sno: 5,
      name: "Taylor & Francis Open Access",
      url: "https://www.tandfonline.com/openaccess",
    },
    {
      sno: 6,
      name: "Oxford Open",
      url: "https://academic.oup.com/journals/pages/open_access",
    },
    { sno: 7, name: "e-Shodh Sindhu", url: "https://ess.inflibnet.ac.in/" },
    {
      sno: 8,
      name: "Wiley Open Access Journals",
      url: "https://authorservices.wiley.com/open-research/open-access/browse-journals.html",
    },
  ],
  eBooks: [
    { sno: 1, name: "E-Books", url: "http://pdfdrive.net/" },
    {
      sno: 2,
      name: "Directory of Open Access Books",
      url: "https://www.doabooks.org/",
    },
    {
      sno: 3,
      name: "Springer e-books",
      url: "https://www.springeropen.com/books",
    },
  ],
  digitalLibrary: [
    {
      sno: 1,
      name: "National Digital Library",
      url: "https://ndl.iitkgp.ac.in/",
    },
    { sno: 2, name: "National Knowledge Network", url: "http://nkn.gov.in/en" },
    {
      sno: 3,
      name: "Talks to Teacher",
      url: "https://www.ted.com/playlists/182/talks_from_inspiring_teachers",
    },
    { sno: 4, name: "A-VIEW", url: "http://aview.in/" },
    { sno: 5, name: "Virtual Labs", url: "http://www.vlab.co.in/" },
    { sno: 6, name: "FOSSEE", url: "https://fossee.in/" },
    { sno: 7, name: "Spoken Tutorial", url: "https://spoken-tutorial.org/" },
    { sno: 8, name: "e-Yantra", url: "https://www.e-yantra.org/" },
    { sno: 9, name: "Oscar++", url: "https://www.it.iitb.ac.in/oscar/" },
    { sno: 10, name: "E-Kalpa", url: "https://icar.org.in/content/e-kalpa" },
    {
      sno: 11,
      name: "Open Knowledge Repository - World Bank",
      url: "https://openknowledge.worldbank.org/",
    },
    { sno: 12, name: "SWAYAMPRABHA", url: "https://www.swayamprabha.gov.in/" },
    { sno: 13, name: "Vidwan", url: "https://vidwan.inflibnet.ac.in/" },
    { sno: 14, name: "SNLTR", url: "https://nltr.org/" },
    { sno: 15, name: "ILOSTAT", url: "https://www.ilo.org/" },
    {
      sno: 16,
      name: "Project Euclid",
      url: "https://projecteuclid.org/librarians/lib_oa",
    },
    { sno: 17, name: "AidData", url: "https://www.aiddata.org/" },
    {
      sno: 18,
      name: "Legal Information",
      url: "http://www.commonlii.org/resources/221.html",
    },
    {
      sno: 19,
      name: "The OAPEN Foundation",
      url: "https://www.oapen.org/content/",
    },
    {
      sno: 20,
      name: "PubMed Central (PMC)",
      url: "https://www.ncbi.nlm.nih.gov/pmc/",
    },
    {
      sno: 21,
      name: "Project Gutenberg",
      url: "https://www.dev.gutenberg.org/",
    },
    { sno: 22, name: "High Wire", url: "https://www.highwirepress.com/" },
    {
      sno: 23,
      name: "AGRIS",
      url: "http://agris.fao.org/agris-search/index.do",
    },
    {
      sno: 24,
      name: "Southern Connecticut State University",
      url: "https://libguides.southernct.edu/openaccess",
    },
    { sno: 25, name: "LibriVox - Audio Books", url: "https://librivox.org/" },
  ],
  thesesDissertations: [
    {
      sno: 1,
      name: "E-Shodhganga - Indian Theses",
      url: "https://shodhganga.inflibnet.ac.in/",
    },
    {
      sno: 2,
      name: "Networked Digital Library of Theses and Dissertations (NDLTD)",
      url: "http://search.ndltd.org/",
    },
    {
      sno: 3,
      name: "Open Access Thesis & Dissertations",
      url: "https://oatd.org/",
    },
  ],
  newspapers: [
    {
      sno: 1,
      name: "Newspapers",
      url: "https://www.pressreader.com/catalog/english",
    },
  ],
};

const books: BookItem[] = [
  {
    name: "Faculty of Engineering",
    NoofTitles: 9500,
    NoofVolumes: 35608,
    EBooks: 7693,
  },
  {
    name: "Faculty of Design",
    NoofTitles: 3604,
    NoofVolumes: 5435,
    EBooks: 1102,
  },
  {
    name: "Faculty of Management",
    NoofTitles: 3337,
    NoofVolumes: 9086,
    EBooks: 3601,
  },
  {
    name: "Faculty of Arts & Law",
    NoofTitles: 2064,
    NoofVolumes: 9270,
    EBooks: 76602,
  },
  {
    name: "Faculty of Science",
    NoofTitles: 1213,
    NoofVolumes: 3115,
    EBooks: 10309,
  },
  { name: "Total", NoofTitles: 19718, NoofVolumes: 62514, EBooks: 99307 },
];

export const OpenAccessTable: React.FC<OpenAccessTableProps> = ({
  title,
  data,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl  mb-4 text-[#1e3a8a] border-zinc-600 border-b-2 pb-2 font-serif">
        {title}
      </h2>
      <table className="w-full border-collapse border border-gray-300 shadow-sm">
        <thead>
          <tr className="bg-blue-50">
            <th className="text-center  text-blue-900 border px-4 py-2">
              S.No.
            </th>
            <th className="text-left  text-blue-900 border px-4 py-2">
              Resource Name
            </th>
            <th className="text-center  text-blue-900 border px-4 py-2">URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.sno} className="hover:bg-gray-100">
              <td className="text-center border px-4 py-2">{item.sno}</td>
              <td className="text-left border px-4 py-2">{item.name}</td>
              <td className="text-center border px-4 py-2">
                <a
                  href={item.url}
                  className="text-blue-500 md:block hidden hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.url}
                </a>
                <a
                  href={item.url}
                  className="block md:hidden hover:underline text-blue-500"
                >
                  click here
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BooksTable: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl mb-4 text-[#1e3a8a] font-serif">
        LIBRARY COLLECTIONS
      </h2>
      <table className="w-full border-collapse border border-gray-300 shadow-sm">
        <thead>
          <tr className="bg-blue-50">
            <th className="text-left text-[#1e3a8a] font-serif border px-4 py-2">
              Faculty
            </th>
            <th className="text-center text-[#1e3a8a] font-serif border px-4 py-2">
              No. of Titles
            </th>
            <th className="text-center text-[#1e3a8a] font-serif border px-4 py-2">
              No. of Volumes
            </th>
            <th className="text-center text-[#1e3a8a] font-serif border px-4 py-2">
              E-Books
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="text-left border px-4 py-2">{item.name}</td>
              <td className="text-center border px-4 py-2">
                {item.NoofTitles}
              </td>
              <td className="text-center border px-4 py-2">
                {item.NoofVolumes}
              </td>
              <td className="text-center border px-4 py-2">{item.EBooks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const ResourcesTables: React.FC = () => {
  return (
    <div>
      <OpenAccessTable
        title="Open Access Online Courses"
        data={data.onlineCourses}
      />
      <OpenAccessTable title="Open Access E-Journals" data={data.eJournals} />
      <OpenAccessTable title="Open Access E-Books" data={data.eBooks} />
      <OpenAccessTable
        title="Open Access Digital Library"
        data={data.digitalLibrary}
      />
      <OpenAccessTable title="Open Access Newspapers" data={data.newspapers} />
      <OpenAccessTable
        title="Open Access Theses & Dissertations"
        data={data.thesesDissertations}
      />
    </div>
  );
};

const OpenAccessResources: React.FC = () => {
  return (
    <div className="w-[90%] overflow-x-hidden mx-auto my-6">
      <BooksTable />
      <ResourcesTables />
    </div>
  );
};

export default OpenAccessResources;
