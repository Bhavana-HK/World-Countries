import React, { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
interface FlagProps {
  code: string;
}

export const Flag: React.FC<FlagProps> = ({ code }) => {
  const [image, setImage] = useState<any>(null);
  useEffect(() => {
    import(`../resources/data/${code}.svg`).then((img) =>
      setImage(img.default)
    );
  }, [code]);

  return (
    <Box w="100%" h="auto">
      <Image src={image} alt={`${code}-img`} />
    </Box>
  );
};
