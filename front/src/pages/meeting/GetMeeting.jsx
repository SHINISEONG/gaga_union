import ListMeetingReview from '@components/meeting/ListMeetingReview';
import { BottomNavigation, BottomNavigationAction, Box, Button, ImageListItem, Typography } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import PeopleIcon from '@mui/icons-material/People';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GetMeetingStaticMap from '@components/meeting/map/GetMeetingStaticMap';
import { Stack, styled } from '@mui/system';
import MeetingMember from '@components/meeting/MeetingMember';
import GetMeetingTop from '@layouts/meeting/GetMeetingTop';


const CenteredText = styled('h5')({
    display: 'flex',
    alignItems: 'center',
  });

const GetMeeting = () => {

    const { meetingno } = useParams();
    const [meeting, setMeeting] = useState();
    const [pendingMemberList, setPendingMemberList] = useState();
    const [confirmedMemberList, setConfirMemberList] = useState();

    const navigate = useNavigate();

    useEffect(()=>{
        axios
            .get(`http://${import.meta.env.VITE_SPRING_HOST}/rest/meeting/no/${meetingno}`)
            .then((response)=>{
                console.log(response.data);
                setMeeting(response.data);
            })
            .catch((error)=>{
                console.log(error);
            });
        },[]);

    useEffect(()=>{
        axios
            .get(`http://${import.meta.env.VITE_SPRING_HOST}/rest/user/list/grouptype/2/no/${meetingno}/state/2`)
            .then((response)=>{
                console.log(response.data);
                setConfirMemberList(response.data);
            })
            .catch((error)=>{
                console.log(error);
            });
        },[]);
        

        useEffect(()=>{
        axios
            .get(`http://${import.meta.env.VITE_SPRING_HOST}/rest/user/list/grouptype/2/no/${meetingno}/state/1`)
            .then((response)=>{
                console.log(response.data);
                setPendingMemberList(response.data);
            })
            .catch((error)=>{
                console.log(error);
            });
        },[]);


    const onClickAddMember=useCallback((event)=>{
        navigate(`/meeting/member/addmember/${meetingno}`);
    },[]);

    const [value, setValue] = React.useState(0);


    return (
        <>
        <GetMeetingTop/>
    <Box sx={{ marginTop: '50px', marginBottom: '64px' }}>
        <div style={{ position: 'relative', marginBottom: '10px' }}>
        <ImageListItem
            sx={{
            maxWidth: '450px',
            maxHeight: '100px',
            minWidth: '450px',
            minHeight: '100px',
            }}
        >
            <img
                src={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c`}
            />
            
        </ImageListItem>
        <div style={{ position: 'absolute', bottom: 0, left: 0, background: 'rgba(0, 0, 0, 0.7)', padding: '10px' }}>
    
    </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h4>{meeting?.meetingName}</h4>

    <Stack spacing={2}>

        <Stack direction={'row'} spacing={1} alignItems={'center'}>
        <PeopleIcon/>
        <Typography sx={{fontSize : 13 }}>
        {meeting?.memberCount}/{meeting?.meetingMaxMemberNo}
        </Typography>
        </Stack>

        <CenteredText>
        <CalendarMonthIcon/> {meeting?.meetingDate}
        </CenteredText>

        <CenteredText>
            <QueryBuilderIcon/> {meeting?.meetingStartTime} ~ {meeting?.meetingEndTime}
        </CenteredText>
    </Stack>
    <CenteredText>
        <LocationOnIcon/> {meeting?.meetingAddr}
    </CenteredText>
    <h5>
    &nbsp; &nbsp; &nbsp;{meeting?.meetingDetailAddr}
    </h5>
    <br/>
    {meeting && (
    <Box>
        <GetMeetingStaticMap meeting={meeting} />
    </Box>
    )}
    <h5>확정 멤버</h5>
    {confirmedMemberList?.map((confirmedMember,i)=>(

    <MeetingMember key={i} member={confirmedMember} />

    ))}
    <h5>신청 멤버</h5>
    {pendingMemberList?.map((pendingMember,i)=>(

    <MeetingMember key={i} member={pendingMember} />

    ))}

    <ListMeetingReview/>
    <BottomNavigation
        showLabels
        sx={{ width: '100%', position: 'fixed', bottom: '0rem' }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="참여하기" onClick={onClickAddMember}/>
      </BottomNavigation>
    </Box>

    </>
    );
};

export default GetMeeting;