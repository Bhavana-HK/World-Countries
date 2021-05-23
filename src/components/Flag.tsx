import React, { useEffect, useState } from 'react';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Image,
  Skeleton,
} from '@chakra-ui/react';
import ErrorBoundary from './ErrorBounday';
interface FlagProps {
  code: string;
}

export const Flag: React.FC<FlagProps> = ({ code }) => {
  const [error, setError] = useState<Error | null>(null);
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    import(`../resources/data/${code}.svg`)
      .then((img) => {
        setImage(img.default);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [code]);

  if (loading)
    return (
      <Skeleton height="200px" />
    );

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
      <Image src={image} alt={`${code}-img`} w="100%" h="auto" />
    </ErrorBoundary>
  );
};
