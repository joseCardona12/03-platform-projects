import Link from "next/link";

interface IIdentifyProps {
  text?: string;
  url_image?: string;
  link_logo: string;
}
export default function Identify({
  text,
  link_logo,
  url_image,
}: IIdentifyProps): React.ReactNode {
  return (
    <div className="identify">
      {url_image ? (
        <img
          className="identify-logo"
          src={url_image}
          alt={`logo-${url_image}`}
        />
      ) : (
        <Link href={link_logo}>
          <h2 className="identify-logo">{text}</h2>
        </Link>
      )}
    </div>
  );
}
