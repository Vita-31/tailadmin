import Image from "next/image";
import Columns from "@/public/images/columns.svg";
import LogoText from "@/public/images/logo.svg";

const Logo = () => {
  return (
    <div className="flex items-center gap-3 px-[15px]">
      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary">
        <Image
          src={Columns}
          className="w-4 h-[18px]"
          alt="columns icon"
          title="columns icon"
          width="1"
          height="1"
          decoding="async"
        />
      </div>
      <Image
        src={LogoText}
        className="w-[131px] h-[22px] shrink-0"
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
