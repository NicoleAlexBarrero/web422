import Link from "next/link";
import Card from "react-bootstrap/Card";
import CompanyDetails from "../components/CompanyDetails";
import PageHeader from "../components/PageHeader";


export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://super-pink-leather-jacket.cyclic.app/api/company/MyEdu" //?
  );
  const data = await res.json();

  return { props: { company: data } };
}

export default function About(props) {
  return (
    // <p>About</p> ?
    <>
    
      <PageHeader text="About the Developer: Nicole Barrero"></PageHeader>
      
      <Card>
        <Card.Body>
          <p>
          I am currently pursuing an Ontario College Diploma in Software Development at Seneca Polytechnic College.
          </p>
          <p>
          I am enthusiastic about the opportunity to apply my technical knowledge, problem-solving abilities, and passion for programming to contribute to your software development team. 
          </p>
          <p>
            Its difficult to choose a favourite, but you can search 
            companies using tags, e.g., <Link href="companies/web">` web`</Link>, <Link href="companies/education">`education`</Link>, 
            <Link href="companies/software">`software`</Link>, <Link href="companies/game">`game`</Link> and so on. 
            Currently, company <strong>MyEdu</strong> is one of my favourites and shown here:
          </p>
          <br></br>
          <p>
            CompanyDetails
          </p>

          <CompanyDetails company={props.company} />
        </Card.Body>
      </Card>
    </>
  );
}
