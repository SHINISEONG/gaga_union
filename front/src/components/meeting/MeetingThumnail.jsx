import { Box, Stack, ThemeProvider, createTheme } from '@mui/system';
import {
  Avatar,
  AvatarGroup,
  Chip,
  ImageListItem,
  Paper,
  Typography,
} from '@mui/material';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import PeopleIcon from '@mui/icons-material/People';
import { useNavigate } from 'react-router';
import SmallChip from './SmallChip';

const StyledAvatarGroup = styled(AvatarGroup)({
  '& .MuiAvatar-root': {
    width: 24,
    height: 24,
    fontSize: 12,
  },
});

const MeetingThumbnail = ({ meeting }) => {
  const navigate = useNavigate();

  const onClickMeeting = useCallback((event) => {
    navigate(`/meeting/meetingno/${meetingNo}`);
  }, []);

  const { meetingName, meetingAddr, meetingMaxMemberNo, count, meetingNo } =
    meeting;

  return (
    <Stack direction='row' spacing={2}>
      <ImageListItem
        sx={{
          maxWidth: '100px',
          maxHeight: '100px',
          minWidth: '100px',
          minHeight: '100px',
        }}
      >
        {meeting?.meetingImg ? (
          <img
            src={`${import.meta.env.VITE_SPRING_HOST}/upload_images/meeting/${
              meeting?.meetingImg
            }`}
            alt='noImg'
            loading='lazy'
            style={{ borderRadius: '7px' }}
            onClick={onClickMeeting}
          />
        ) : (
          <img
            src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format`}
            style={{ borderRadius: '7px' }}
            onClick={onClickMeeting}
          />
        )}
      </ImageListItem>
      <Box>
        <SmallChip label={meeting.filterTag} />
        <Box sx={{ color: 'text.primary', fontSize: 15, fontWeight: 'medium' }}>
          {meetingName}
        </Box>
        <Box sx={{ color: 'text.secondary', display: 'inline', fontSize: 12 }}>
          {meetingAddr}
        </Box>
        <Stack direction='row' spacing={1}>
          <Stack direction={'row'} spacing={1} alignItems={'center'}>
            <PeopleIcon />
            <Typography sx={{ fontSize: 13 }}>
              {count}/{meetingMaxMemberNo}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

MeetingThumbnail.propTypes = {
  meeting: PropTypes.shape({
    filterTag: PropTypes.string.isRequired,
    meetingName: PropTypes.string.isRequired,
    meetingAddr: PropTypes.string.isRequired,
    meetingImg: PropTypes.string.isRequired,
    meetingMaxMemberNo: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    meetingNo: PropTypes.number.isRequired,
  }).isRequired,
};

export default MeetingThumbnail;
