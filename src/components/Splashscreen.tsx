import Image from 'next/image';

type Props = {
  size?: number;
};

function Logo({ size }: Props) {
  return <Image src="/icon.svg" alt="Stormcast" width={size} height={size} />;
}

export default Logo;
