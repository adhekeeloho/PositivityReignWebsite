import Image from "next/image";

type SiteLogoProps = {
  className: string;
};

export default function SiteLogo({ className }: SiteLogoProps) {
  return (
    <Image
      alt=""
      className={className}
      height={380}
      src="/positivityreign-logo.svg"
      unoptimized
      width={545}
    />
  );
}
