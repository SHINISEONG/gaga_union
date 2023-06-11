import { Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import useSWR from 'swr';
import ClubThumbnail from './ClubThumbnail';
import Refund from '@components/payment/Refund';
import Payment from '@pages/payment/Payment';
import Account from '@components/payment/Account';
import useCommonStore from '@stores/common/useCommonStore';

const ListFilterClub = () => {
  const [clubList, setClubList] = useState();
  const navigate = useNavigate();
  const { setField } = useCommonStore();

  const { data: myData, mutate: mutateMe } = useSWR(
    `${import.meta.env.VITE_SPRING_HOST}/rest/user/login`,
    fetcher
  );

  useEffect(() => {
    const data = {
      gender: myData?.filterGender,
      maxAge: myData?.filterMaxAge,
      minAge: myData?.filterMinAge,
      birthday: myData?.birthday,
      tag: myData?.filterTag,
      tag2: myData?.filterTag2,
      tag3: myData?.filterTag3,
    };
    axios
      .post(`${import.meta.env.VITE_SPRING_HOST}/rest/club/list/filter`, data)
      .then((response) => {
        console.log(data);
        console.log(response.data);
        setClubList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [myData]);

  const onClickClub = useCallback(
    (event) => {
      const { id } = event.target;
      navigate(`/club/no/${id}`);
    },
    [navigate]
  );
  const onClickDirectChat = useCallback(
    (e) => {
      const { id } = event.target;
      setField('chatRoomEntryNo', id);
      navigate('/chat/direct/message/list');
    },
    [navigate, setField]
  );

  const onClickAddMember = useCallback(
    (event) => {
      const { id } = event.target;
      navigate(`/club/member/addmember/${id}`);
    },
    [navigate]
  );

  return (
    <div style={{ backgroundColor: '#ededed' }}>
      <Box
        sx={{
          paddingTop: '1px',
          paddingBottom: '1px',
          marginBottom: '64px',
          bgcolor: '#ededed',
        }}
      >
        <Box>
          <Box>
            {clubList?.map((club, i) => (
              <Box key={i}>
                <Box
                  sx={{
                    marginLeft: 1.5,
                    marginRight: 1.5,
                    marginTop: 0.5,
                    marginBottom: 2,
                    borderRadius: 3,
                    p: 2,
                    minWidth: 265,
                    padding: 1.3,
                    backgroundColor: '#ffffff',
                  }}
                >
                  <ClubThumbnail club={club} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ListFilterClub;
