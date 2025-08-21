import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center flex-col gap-5">
      <h2 className="text-4xl text-green-800 font-bold font-heading">
        Not Found
      </h2>
      <p className="text-2xl font-semibold">
        Could not found requested resources
      </p>
      <Link href={"/"} className="text-sky-500 cursor-pointer underline">
        Back to Home
      </Link>
    </div>
  );
}
