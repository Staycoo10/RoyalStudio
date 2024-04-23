import "./team.css";
import { useState } from "react";
const membersData = [
  {
    name: "Botnari Bogdan",
    job: "Founder / RS",
    description: `Botnari Bogdan este fondatorul companiei Royals Studio, specializată în arendarea studiourilor de muzică.`,
    img: "https://img.gazeta.ru/files3/674/14766674/20170620_gaf_rr16_044-pic_square_200x200-200x200-79942.jpg",
  },
  {
    name: "Bobeica Denis",
    job: "Sound Analyst / GM",
    description: `Bobeica Denis este Sound Analyst la Royals Studio, o companie specializată în arendarea studiourilor de muzică.`,
    img: "https://media.licdn.com/dms/image/D4E03AQHk0lvAWQudFg/profile-displayphoto-shrink_200_200/0/1698843460158?e=2147483647&v=beta&t=nDNPd-hDBUQ5P63maNHjMLCOxmpiJXbd58Gvn9lVi_E",
  },
  {
    name: "Ceban David",
    job: "Leasing Agent / GM",
    description: `Ceban David este Leasing Agent la compania Royals Studio, specializată în arendarea studiourilor de muzică.`,
    img: "https://media.licdn.com/dms/image/C5603AQGXGCt7azdYSA/profile-displayphoto-shrink_200_200/0/1645498432735?e=2147483647&v=beta&t=kqCSnFD8rGHfGP4rK7QlEq14f2mRXIB3VOB3agMyYB4",
  },
  {
    name: "Malcoci Nicolaie",
    job: "Technical expert / GM",
    description: `Malcoci Nicolaie este un expert tehnic în cadrul companiei Royals Studio, specializată în arendarea studiourilor de muzică.`,
    img: "https://media.licdn.com/dms/image/C5103AQHNS8rIReMuLg/profile-displayphoto-shrink_200_200/0/1516621092541?e=2147483647&v=beta&t=5V_fRKkV6RYDE9LW4p5FsdVJQLSGjIEmyADm5p0Ych4",
  },
];
export default function Team() {
  return (
    <section id="team">
      <div className="container">
        <h1>Our Team</h1>
        <div className="row">
          {membersData.map((member) => (
            <Members member={member} key={member.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
function Members({ member }) {
  return (
    <div className="col-md-3 profile-pic text-center">
      <div className="img-box">
        <img src={member.img} className="img-responsive"></img>
        <h2>{member.name}</h2>
        <h3>{member.job}</h3>
        <p>{member.description}</p>
      </div>
    </div>
  );
}
