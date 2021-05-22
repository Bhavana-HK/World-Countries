import React, { useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertIcon, Box, Image } from '@chakra-ui/react';
import ErrorBoundary from './ErrorBounday';
interface FlagProps {
  code: string;
}

export const Flag: React.FC<FlagProps> = ({ code }) => {
  const [error, setError] = useState<Error | null>(null);
  const [image, setImage] = useState<any>(null);
  useEffect(() => {
    import(`../resources/data/${code}.svg`).then((img) =>
      setImage(img.default)
    ).catch((error)=>  setError(error));
  }, [code]);

  if (error)
  return (
    <Alert status={'error'}>
      <AlertIcon />
      Some Error occured while displaying flag
      <AlertDescription display="block">{error.message}</AlertDescription>
    </Alert>
  );

  return (
    <ErrorBoundary>
      <Box w="100%" h="auto">
        <Image src={image} alt={`${code}-img`} />
      </Box>
    </ErrorBoundary>
  );
};
