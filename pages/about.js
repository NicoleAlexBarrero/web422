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
          I am currently pursuing an Ontario College Diploma in Software Development at Seneca Polytechnic College, where I am gaining a strong foundation in programming languages and relevant coursework such as  
           Web Programming for Apps and Services, IT Project Management, and Advanced Database Services. My coursework includes proficiency in JavaScript, HTML, CSS, React.js, MongoDB, and Node.js.
In my current role as an IT Support Technician at TJ Bloc Pilates, I have honed my technical skills by providing prompt and efficient technical support to employees. I have also played a key role in the installation, configuration, and maintenance of computer systems, ensuring seamless operations within the organization. Moreover, I have conducted user training sessions on various technology and software applications, including Adobe Premiere Pro and DaVinci Resolve, to enhance user proficiency.
Additionally, my experience as a Social Media Manager at TJ Bloc Pilates has equipped me with valuable skills in developing and implementing effective social media strategies. I successfully increased the companies social media following by devising engaging content and managing various social media accounts, such as Instagram. My ability to analyze social media data and user engagement has enabled me to make data-driven decisions for content optimization, ultimately contributing to the companies online presence and brand image.
          </p>
          <p>
          I am enthusiastic about the opportunity to apply my technical knowledge, problem-solving abilities, and passion for programming to contribute to your software development team. I am committed to continuous learning and growth in the field of programming, and I am confident that my skills and dedication align well with the goals and values of company.
I look forward to the opportunity to discuss how my background and qualifications can be an asset to your team. You can reach me at nicalexbarrero@gmail.com or (647) 974-1163 to schedule an interview.
          </p>
          <p>
            It's difficult to choose a favourite, but you can search 
            companies using tags, e.g., <Link href="companies/web">` web`</Link>, <Link href="companies/education">"education"</Link>, 
            <Link href="companies/software">"software"</Link>, <Link href="companies/game">"game"</Link> and so on. 
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
