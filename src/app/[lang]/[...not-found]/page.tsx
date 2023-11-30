import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      NOT FOUND PAGE WORKAROUND
      <Link href="/" replace scroll={false}>
        Return Home
      </Link>
    </div>
  );
}
