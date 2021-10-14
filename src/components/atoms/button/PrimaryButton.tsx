import { Button } from "@chakra-ui/react";
import React from "react";
import { memo, ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick, loading = false, disabled = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      isLoading={loading}
      disabled={disabled || loading}
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
