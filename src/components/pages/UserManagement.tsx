import {
  Wrap,
  WrapItem,
  Spinner,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { memo, VFC } from "react";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useLoginUser } from "../../hooks/useLoginUser";
import { useSelectUser } from "../../hooks/useSelectUser";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

export const UserManagement: VFC = memo(() => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { selectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => {
    getUsers();
  }, []);

  const onClickUser = useCallback(
    (id: number) => {
      selectUser({ id, users, onOpen });
    },
    [users, selectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center height="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://source.unsplash.com/random"
                name={user.username}
                fullName={user.name}
                onClick={onClickUser}
                id={user.id}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        isOpen={isOpen}
        isAdmin={loginUser?.isAdmin}
        onClose={onClose}
        selectedUser={selectedUser}
      />
    </>
  );
});
