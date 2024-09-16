import Link from "next/link";

const Homepage = () => {
  return <div>
    <Link href="/admin">Admin page</Link>
    <Link href="/student">Student page</Link>
    <Link href="/teacher">Teacher page</Link>
    <Link href="/parent">Parent page</Link>
  </div>;
};

export default Homepage;
