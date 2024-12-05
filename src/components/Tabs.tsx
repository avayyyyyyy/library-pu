import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Overview from "./Overview";
import { ResourcesTables } from "./Resources";
import EBooksAndServices from "./EBooksAndServices";

const BookSearchAndForum = () => <div>Book Search & Forum Content</div>;
const InstitutionalMember = () => <div>Institutional Member Content</div>;
const AwardAndPractices = () => <div>Award & Practices Content</div>;
const Tools = () => <div>Tools Content</div>;
const ContactUs = () => <div>Contact Us Content</div>;

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Resources",
    "Central Library",
    "Administrative Area",
    "Sports Facilities",
    "Medical Facility",
    "Hostels",
    "Eatery",
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case "Overview":
        return <Overview />;
      case "Resources":
        return <ResourcesTables />;
      case "Central Library":
        return <EBooksAndServices />;
      case "Administrative Area":
        return <BookSearchAndForum />;
      case "Sports Facilities":
        return <InstitutionalMember />;
      case "Medical Facility":
        return <AwardAndPractices />;
      case "Hostels":
        return <Tools />;
      case "Eatery":
        return <ContactUs />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="w-full bg-[#f0f0f0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <Card className="bg-white shadow-md overflow-hidden">
            <CardContent className="p-0 overflow-hidden">
              {tabs.map((tab) => (
                <Button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  variant="ghost"
                  className={`w-full justify-start rounded-none py-3 px-4 text-left ${
                    selectedTab === tab
                      ? "bg-[#1e3a8a] text-white"
                      : "text-[#1e3a8a] hover:bg-[#e5e7eb]"
                  }`}
                >
                  {tab}
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
        <div className="md:w-3/4">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h2 className="text-[#1e3a8a] font-serif text-3xl mb-4 border-b-2 border-[#1e3a8a] pb-2">
                {selectedTab}
              </h2>
              {renderContent()}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
