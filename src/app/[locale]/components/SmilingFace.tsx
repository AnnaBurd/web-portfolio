import Image from "next/image";

type Props = {};

const SmilingFace: React.FC<Props> = ({}) => {
  return (
    <Image
      className="h-full w-full"
      src="/icons8-cool.gif"
      alt="smiling face"
      width="70"
      height="70"
    ></Image>
  );
};

export default SmilingFace;
