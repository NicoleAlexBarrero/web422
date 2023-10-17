/*********************************************************************************
 * WEB422 – Assignment 3
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Name: Nicole Barrero Student ID: 158270215 Date: 17/10/23___________
 *
 *
 ********************************************************************************/

import useSWR from "swr";
import { useState, useEffect } from "react";
import { Accordion, Pagination } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
import CompanyDetails from "@/components/CompanyDetails";

export default function Home() {
  <p>Companies</p> //?
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(
    `https://super-pink-leather-jacket.cyclic.app/api/companies?page=${page}&perPage=10`
  );

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  function previous() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function next() {
    setPage(page + 1);
  }
  pageData.sort((a, b) => b.founded_year - a.founded_year);
  return (
    <>
      <PageHeader text="Company List: Sorted by Founded Year"></PageHeader>
      <Accordion>
        {pageData.map((company) => (
          <Accordion.Item eventKey={company._id} key={company._id}>
            <Accordion.Header>
              <strong>{company.name}</strong>
              ({`Founded in ${company.founded_year}.`}
              {` ${company.description}`})
            </Accordion.Header>
            <Accordion.Body>
              <CompanyDetails company={company} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </>
  );
}
