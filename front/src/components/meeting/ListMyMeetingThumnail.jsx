import { Box, Stack } from '@mui/system';
import React, { useCallback } from 'react';
import MeetingThumbnail from './MeetingThumnail';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import useCommunityStore from '@stores/communication/useCommunityStore';

const ListMyMeetingThumnail = ({ meeting }) => {

    const currentDate = new Date();
    const meetingDateTime = new Date(`${meeting.meetingDate}T${meeting.meetingStartTime}`);
    const {setField} = useCommunityStore();

    const isMeetingSuccessTime = currentDate >= meetingDateTime;
    const isMeetingSuccess = meeting.meetingSuccess === 2;
    const isMeetingChatRoot = meeting.meetingState === 1 || 2;


    
    const navigate = useNavigate();

    const onClickListMeetingMember=useCallback(()=>{
        navigate(`/meeting/member/listmember/meetingno/${meeting.meetingNo}`);
    },[meeting.meetingNo, navigate]);

    const onClickMeetingSuccess = React.useCallback(()=>{
        navigate(`/meeting/updatemeetingsuccess/meetingno/${meeting.meetingNo}`);
        },[meeting.meetingNo, navigate]);

        const onClickChatRoom=useCallback(()=>{
            setField('chatRoomEntryNo',meeting.meetingNo);
            setField('chatType',2);
            setField('chatRoomLeader',meeting.meetingLeaderNo)
            navigate(`/chat/group/message/list`);
        },[meeting.meetingLeaderNo, meeting.meetingNo, navigate, setField]);

    return (
        <div>
            <Box
                sx={{
                    borderRadius: 2,
                    p: 2,
                    minWidth: 295,
                    padding: 1,
                    backgroundColor: '#ffffff'
                }}
                >
                    <Stack
                    spacing={0.8}
                    >
                    <MeetingThumbnail meeting={meeting}/>
                    <Stack
                    direction={'row'}
                    justifyContent="center"
                    spacing={1.5}
                    >
                    {!isMeetingSuccessTime && !isMeetingSuccess && (
                        <Button 
                        variant="outlined"
                        sx={{ width: '180px' }}
                        onClick={onClickListMeetingMember}>
                            멤버리스트
                            </Button>  
                    )}
                    {isMeetingSuccessTime && !isMeetingSuccess && (
                        <Button 
                        variant="outlined"
                        sx={{ width: '180px' }}
                        onClick={onClickMeetingSuccess}>
                            성사하기
                            </Button>
                    )}
                    {isMeetingChatRoot && (
                    <Button
                    variant="outlined"
                    sx={{ width: '180px' }}
                    onClick={onClickChatRoom}>채팅방 입장</Button>
                    )}
                    </Stack>
                    </Stack>
                </Box>
        </div>
    );
};

  ListMyMeetingThumnail.propTypes = {
    meeting: PropTypes.object.isRequired,
  };

export default ListMyMeetingThumnail;