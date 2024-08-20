import React, { useMemo } from "react";
import "./App.css";
import TableComponent from "./TableComponent ";

const App = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Account Name",
        accessor: "accountname",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone Number",
        accessor: "phonenumber",
      },
      {
        Header: "Website",
        accessor: "website",
      },
      {
        Header: "Industry",
        accessor: "industry",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        accountname: "Freda",
        email: "fwinger0@fc2.com",
        phonenumber: 5967957999,
        website: "http://sunn.com",
        industry: "Real Estate",
      },
      {
        accountname: "Aloysius",
        email: "amellanbyl@lycos.com",
        phonenumber: 4988111631,
        website: "http://sun.com",
        industry: "Real Estate Investment Trusts",
      },

      {
        accountname: "Dalli",
        email: "dturell2@reference.com",
        phonenumber: 9919131652,
        website: "http://51.la",
        industry: "Hospital/Nursing Managment",
      },
      {
        accountname: "Kort",
        email: "ktrittam3@sakura.ne.jp",
        phonenumber: 4928500329,
        website: "http://walmart.com",
        industry: "EDP Services",
      },
      {
        accountname: "Heall",
        email: "hsilson4@pinterest.com",
        phonenumber: 3862338325,
        website: "http://si.edu",
        industry: "n/a",
      },
      {
        accountname: "Sheeree",
        email: "sjeannin5@bigcartel.com",
        phonenumber: 4335616789,
        website: "http://amazon.com",
        industry: "Automotive Aftermarket",
      },

      {
        accountname: "Hildegrade",
        email: "hdurdy6@mysql.com",
        phonenumber: 8059908180,
        website: "http://huffingtonpost.com",
        industry: "Industrial Specialties",
      },
      {
        accountname: "Hulda",
        email: "hcruickshanks7@answers.com",
        phonenumber: 8705495500,
        website: "http://yandex.ru",
        industry: "Package Goods/Cosmetics",
      },
      {
        accountname: "Shae",
        email: "stales8@google.pl",
        phonenumber: 4628674456,
        website: "http://mayoclinic.com",
        industry: "Industrial Machinery/Components",
      },

      {
        accountname: "Jana",
        email: "jhugk9@wikispaces.com",
        phonenumber: 4222905888,
        website: "http://jugem.jp",
        industry: "n/a",
      },

      {
        accountname: "Ranna",
        email: "jhhhgahgdgdjdjh.com",
        phonenumber: 9665040105,
        website: "http://knackmet.com",
        industry: "Automated",
      },
      {
        accountname: "Sachin",
        email: "jhugk9@wikispaces.com",
        phonenumber: 9920645744,
        website: "http://mycity.com",
        industry: "n/a",
      },
    ],
    []
  );

  return (
    <div className="App">
      <h1>Accounts Lists</h1>
      <h5>Here's list of your accounts</h5>
      <TableComponent columns={columns} data={data} />
    </div>
  );
};

export default App;
