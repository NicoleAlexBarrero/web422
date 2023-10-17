import { Container, Row, Col } from "react-bootstrap";

export default function CompanyDetails(props) { //props? or company
  return (
    //<p>CompanyDetails</p> ?
    <>
      <Container>
        <Row>
          <Col md>
          <div>
            {props.company.overview || 'N/A'}
          </div>
          <br />
          <strong>Category: </strong> {props.company.category_code || 'N/A'}
          <br /><br />
          <strong>Founded:</strong> {`${props.company.founded_month || 'N/A'} ${props.company.founded_day || 'N/A'} ${props.company.founded_year || 'N/A'}`}
          <br /><br />
          <strong>Tag List: </strong>
          {props.company.tag_list ? (
            <ul>
              {props.company.tag_list.split(',').map((tag, index) => (
                <li key={index}>{tag.trim()}</li>
              ))}
            </ul>
          ) : 'N/A'}
          <br />
          <strong>Key People: </strong>
          {props.company.relationships ? (
            <ul>
              {props.company.relationships.map((relationship, index) => (
                <li key={index}>
                  {`${relationship.person.first_name} ${relationship.person.last_name} (${relationship.title})`} 
                </li>
              ))}
            </ul>
          ) : 'N/A'}
          <br /><br />
          <strong>Products: </strong>
          {typeof props.company.products === 'string' ? (
          <ul>
          {props.company.products.split(',').map((product, index) => (
          <li key={index}>{product.trim()}</li>
          ))}
  </ul>
) : 'N/A'}

          <br />
          <strong>Number of Employees: </strong> {props.company.number_of_employees || 'N/A'}
          <br /><br />
          <strong>Website: </strong> {props.company.homepage_url ? <a href={props.company.homepage_url}>{props.company.homepage_url}</a> : 'N/A'}
          <br /><br />
          </Col>
        </Row>
      </Container>
    </>
  );
}
