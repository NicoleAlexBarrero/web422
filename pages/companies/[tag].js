import { useRouter } from "next/router";
import useSWR from "swr";
import CompanyDetails from "@/components/CompanyDetails";
import Error from "next/error";
import PageHeader from "@/components/PageHeader";

export default function Company() {
  const router = useRouter();
  const { tag } = router.query; //?

  const { data, error } = useSWR(
    `https://super-pink-leather-jacket.cyclic.app/api/companies?page=1&perPage=10&tag=${tag}`
  );
  if (!data) {
    return null;
  }
  if (data.length == 0) {
    return <Error statusCode={400} />;
  }
  return (
    <>
      {data.map((company) => (
        <div key={company._id}>
          <PageHeader text={company.name} />
          <CompanyDetails company={company} />
        </div>
      ))}
    </>
  );
}




