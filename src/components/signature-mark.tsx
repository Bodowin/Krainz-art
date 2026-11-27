import Image from "next/image";

interface SignatureMarkProps {
  className?: string;
  priority?: boolean;
}

export function SignatureMark({
  className = "",
  priority = false,
}: SignatureMarkProps) {
  return (
    <span className={`signature-mark ${className}`} aria-hidden="true">
      <Image
        src="/archive/0193a5035c6d795aac.webp"
        alt=""
        width={86}
        height={77}
        priority={priority}
      />
    </span>
  );
}
