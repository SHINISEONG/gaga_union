import ListMeetingParentClubNo from '@components/meeting/ListMeetingParentClubNo';
import styled from '@emotion/styled';
import CommonTop from '@layouts/common/CommonTop';
import { Avatar, Box, Button, Typography, Stack } from '@mui/material';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import useSWR from 'swr';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import ClubMember from '@components/club/ClubMember';
import GetClubTop from '@layouts/club/GetClubTop';
import ClubSmallChip from '@components/club/ClubSmallChip';
import IsClubMemberDialog from '@components/club/IsClubMemberDialog';
import useCommunityStore from '@stores/communication/useCommunityStore';

const GetClub = () => {
  const { clubNo } = useParams();
  const [clubLeader, setClubLeader] = useState();
  const [club, setClub] = useState();
  const [pendingMemberList, setPendingMemberList] = useState();
  const [confirmedMemberList, setConfirMemberList] = useState();
  const [isClubMemberOpen, setIsClubMemberOpen] = useState(false);
  const location = useLocation();
  const { setField } = useCommunityStore();

  const { data: myData, mutate: mutateMe } = useSWR(
    `${import.meta.env.VITE_SPRING_HOST}/rest/user/login`,
    fetcher
  );

  const { data: leaderData, mutate: mutateLeader } = useSWR(
    `${import.meta.env.VITE_SPRING_HOST}/rest/user/userno/${
      club?.clubLeaderNo
    }`,
    fetcher
  );

  const isClubLeader = club?.clubLeaderNo === myData?.userNo;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SPRING_HOST}/rest/club/no/${clubNo}`)
      .then((response) => {
        console.log('클럽데이터 받아오지?', response.data);
        setClub(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clubNo]);

  useEffect(() => {
    if (!club) {
      return;
    }

    const fetchClubLeader = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SPRING_HOST}/rest/user/userno/${
            club.clubLeaderNo
          }`
        );
        console.log(response.data);
        setClubLeader(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchClubLeader();
  }, [club]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_SPRING_HOST
        }/rest/user/list/grouptype/1/no/${clubNo}/state/2`
      )
      .then((response) => {
        console.log(response.data);
        setConfirMemberList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clubNo]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_SPRING_HOST
        }/rest/user/list/grouptype/1/no/${clubNo}/state/1`
      )
      .then((response) => {
        console.log(response.data);
        setPendingMemberList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clubNo]);

  const onClickLogin = useCallback(() => {
    navigate('/user/login');
  }, [navigate]);

  const onClickRegistProfile = useCallback(() => {
    navigate(`/community/profile/mine`);
  }, [navigate]);

  const onClickProfileImg = useCallback(
    (e) => {
      setField('prevProfilePath', location.pathname);
      navigate(`/community/profile/userno/${club?.clubLeaderNo}`);
    },
    [navigate, club]
  );

  const onClickAddMember = useCallback(
    (event) => {
      const isUserInConfirmedMembers = confirmedMemberList?.some(
        (confirmedMember) => confirmedMember.userNo === myData?.userNo
      );

      const isUserInPendingMembers = pendingMemberList?.some(
        (pendingMember) => pendingMember.userNo === myData?.userNo
      );

      if (!isUserInConfirmedMembers && !isUserInPendingMembers) {
        navigate(`/club/member/addmember/${clubNo}`);
      } else {
        setIsClubMemberOpen(true);
      }
    },
    [confirmedMemberList, myData?.userNo, navigate, clubNo, pendingMemberList]
  );

  const [imageLoadingError, setImageLoadingError] = useState(false);

  const handleImageError = useCallback(() => {
    setImageLoadingError(true);
  }, []);

  if (!leaderData) {
    return <>로딩중</>;
  }
  return (
    <>
      {isClubLeader ? <GetClubTop /> : <CommonTop />}
      <Box
        sx={{
          marginTop: '64px',
          marginBottom: '64px',
          marginLeft: '10px',
          marginRight: '10px',
        }}
      >
        {club?.clubImg ? (
          <img
            src={`${import.meta.env.VITE_SPRING_HOST}/upload_images/club/${
              club?.clubImg
            }`}
            alt='noImg'
            loading='lazy'
            onError={handleImageError}
            style={{
              maxWidth: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
            }}
          />
        ) : (
          <img
            src={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c`}
            alt='noImg'
            loading='lazy'
            style={{
              maxWidth: '100%',
              maxHeight: '400px',
              objectFit: 'cover',
            }}
          />
        )}
        <Stack spacing={1}>
          <Stack direction='row' margin={1} spacing={2}>
            <Stack
              direction={'row'}
              spacing={10}
              alignItems={'center'}
              onClick={onClickProfileImg}
              data-value={myData?.userNo}
            >
              <Box>
                <Avatar
                  alt={club?.nickName}
                  src={`${
                    import.meta.env.VITE_SPRING_HOST
                  }/upload_images/user/${clubLeader?.profileImg}`}
                  sx={{ width: 60, height: 60 }}
                />
              </Box>
            </Stack>
            <Stack>
              <Stack margin={1}>
                <Typography variant='h3' sx={{ fontSize: 16 }}>
                  {club?.clubName}
                </Typography>
              </Stack>
              <Stack margin={1}>
                <Typography variant='h3' sx={{ fontSize: 16 }}>
                  {clubLeader?.nickName}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={5}>
            <Box direction='row' spacing={0} alignItems='left'>
              <ClubSmallChip label={club?.filterTag} />
            </Box>

            <Box direction='row' spacing={0} alignItems='left'>
              <ClubSmallChip
                label={club?.clubState === 2 ? '모집완료' : '모집중'}
                sx={{
                  backgroundColor:
                    club?.clubState === 2 ? '#F78181' : '#81BEF7',
                }}
              />
            </Box>
          </Stack>
          <Stack direction='row' alignItems='center' spacing={5}>
            <Stack direction='row' spacing={1} alignItems={'center'}>
              <PeopleIcon />
              <Typography sx={{ fontSize: 13 }}>
                {club?.memberCount}/{club?.clubMaxMemberNo}
              </Typography>
            </Stack>

            <Stack direction='row' spacing={1} alignItems={'center'}>
              <LocationOnIcon />
              <Typography sx={{ fontSize: 13 }}>{club?.clubRegion}</Typography>
            </Stack>
          </Stack>
          <Typography sx={{ fontSize: 16 }}>클럽 소개</Typography>
          <Typography sx={{ fontSize: 13 }}>
            {club?.clubIntro?.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </Typography>
        </Stack>
        <h5>확정 멤버</h5>
        {confirmedMemberList?.map((confirmedMember, i) => (
          <ClubMember key={i} member={confirmedMember} />
        ))}
        <h5>신청 멤버</h5>
        {pendingMemberList?.map((pendingMember, i) => (
          <ClubMember key={i} member={pendingMember} />
        ))}

        <h5>클럽 내 생성 모임 목록</h5>
        <ListMeetingParentClubNo />

        {!myData && (
          <Button
            variant='contained'
            onClick={onClickLogin}
            sx={{ width: '95vw', borderRadius: '50px', marginTop: '10px' }}
          >
            로그인 후 가가 서비스 이용하기
          </Button>
        )}
        {myData && !myData?.profileImg && (
          <Button
            variant='contained'
            onClick={onClickRegistProfile}
            sx={{ width: '95vw', borderRadius: '50px', marginTop: '10px' }}
          >
            프로필 사진 등록 후 가가 서비스 이용하기
          </Button>
        )}

        {myData && !isClubLeader && (
          <Button
            variant='contained'
            sx={{ width: '95vw', borderRadius: '50px', marginTop: '10px' }}
            onClick={onClickAddMember}
          >
            참여하기
          </Button>
        )}
      </Box>
      <IsClubMemberDialog
        open={isClubMemberOpen}
        setOpen={setIsClubMemberOpen}
      />
    </>
  );
};

export default GetClub;
