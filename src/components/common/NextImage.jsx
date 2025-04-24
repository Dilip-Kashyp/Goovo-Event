import Image from "next/image";

function NextImage(props) {
  return <Image {...props} alt={props.alt} />;
}

export default NextImage;
