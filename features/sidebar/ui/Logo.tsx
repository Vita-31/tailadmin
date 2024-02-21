import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 px-[15px]">
      <Image
        src="/images/logo.svg"
        className="w-[175px] h-[32px] shrink-0"
        alt="Tailadmin"
        title="Tailadmin"
        width="1"
        height="1"
        decoding="async"
      />
    </div>
  );
};

export default Logo;
