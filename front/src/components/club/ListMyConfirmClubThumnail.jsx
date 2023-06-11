import { Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import useCommonStore from '@stores/common/useCommonStore';
import DeleteClubMemberDialog from './DeleteClubMemberDialog';
import ClubThumbnail from './ClubThumbnail';

const ListMyConfirmClubThumnail = ({ club }) => {
  const { clubNo } = club;
  const { setField } = useCommonStore();

  const [deleteMemberDialogOpen, setDeleteMemberDialogOpen] = useState(false);

  const navigate = useNavigate();

  const { data: myData, mutate: mutateMe } = useSWR(
    `${import.meta.env.VITE_SPRING_HOST}/rest/user/login`,
    fetcher
  );

  const onClickDeleteMember = useCallback(() => {
    setDeleteMemberDialogOpen(true);
  }, []);

  const onClickChatRoom = useCallback((event) => {
    setField('chatRoomEntryNo', clubNo);
    setField('chatType', 2);
    setField('chatRoomLeader', club.clubLeaderNo);
    navigate(`/chat/group/message/list`);
  }, []);

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#ffffff',
        }}
      >
        <Stack spacing={0.8}>
          <ClubThumbnail club={club} />
          <Stack direction={'row'} justifyContent='center' spacing={1.5}>
            <Button
              variant='outlined'
              sx={{ width: '180px' }}
              onClick={onClickDeleteMember}
            >
              참여 취소
            </Button>
            <Button
              variant='outlined'
              sx={{ width: '180px' }}
              onClick={onClickChatRoom}
            >
              채팅방 입장
            </Button>
          </Stack>
        </Stack>
      </Box>
      <DeleteClubMemberDialog
        open={deleteMemberDialogOpen}
        setOpen={setDeleteMemberDialogOpen}
        club={club}
      />
    </>
  );
};

ListMyConfirmClubThumnail.propTypes = {
  club: PropTypes.object.isRequired,
};

export default ListMyConfirmClubThumnail;
