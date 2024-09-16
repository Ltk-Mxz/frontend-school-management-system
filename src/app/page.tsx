import Link from "next/link";

import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Link href="/admin">
        <span className="text-lg font-semibold text-blue-500 hover:underline">
          Admin page
        </span>
      </Link>
      <Link href="/student">
        <span className="text-lg font-semibold text-blue-500 hover:underline">
          Student page
        </span>
      </Link>
      <Link href="/teacher">
        <span className="text-lg font-semibold text-blue-500 hover:underline">
          Teacher page
        </span>
      </Link>
      <Link href="/parent">
        <span className="text-lg font-semibold text-blue-500 hover:underline">
          Parent page
        </span>
      </Link>
    </div>
  );
};

export default Homepage;

export default Homepage;
