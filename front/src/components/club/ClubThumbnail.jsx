import React, { useState } from 'react';
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
import { useNavigate } from 'react-router';
import { useCallback } from 'react';
import PeopleIcon from '@mui/icons-material/People';
import { Place } from '@mui/icons-material';
import ClubSmallChip from './ClubSmallChip';

const StyledAvatarGroup = styled(AvatarGroup)({
  '& .MuiAvatar-root': {
    width: 24,
    height: 24,
    fontSize: 12,
  },
});

const ClubThumbnail = ({ club }) => {
  const navigate = useNavigate();
  const [imageLoadingError, setImageLoadingError] = useState(false);

  const onClickClub = useCallback((event) => {
    navigate(`/club/no/${clubNo}`);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoadingError(true);
  }, []);

  const {
    clubName,
    clubRegion,
    clubMaxMemberNo,
    memberCount,
    clubNo,
    clubImg,
    clubState,
  } = club;
  return (
    <Box
      sx={{
        borderRadius: 2,
        p: 2,
        minWidth: 295,
        padding: 1,
        backgroundColor: '#ffffff',
        margin: 0.1,
      }}
    >
      <Stack spacing={0.8}>
        <Stack direction='row' spacing={2}>
          <ImageListItem
            id={club.clubNo}
            onClick={onClickClub}
            sx={{
              maxWidth: '100px',
              maxHeight: '100px',
              minWidth: '100px',
              minHeight: '100px',
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
                style={{ borderRadius: '5px' }}
              />
            ) : (
              <img
                src={`https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c`}
                style={{ borderRadius: '5px' }}
              />
            )}
          </ImageListItem>
          <Stack spacing={0.5}>
            <Stack direction={'row'} spacing={1}>
              <ClubSmallChip label={club?.filterTag} size='small' />
              <ClubSmallChip
                size='small'
                label={club?.clubState === 1 ? '모집중' : '모집완료'}
                sx={{
                  backgroundColor:
                    club?.clubState === 1 ? '#81BEF7' : '#F78181',
                }}
              />
            </Stack>
            <Stack
              sx={{ color: 'text.primary', fontSize: 16, fontWeight: 'medium' }}
            >
              {clubName}
            </Stack>
            <Stack direction='row' spacing={1} alignItems={'center'}>
              <Place />
              <Typography sx={{ fontSize: 12, spacing: 1 }}>
                {clubRegion}
              </Typography>
            </Stack>
            <Stack direction='row' spacing={1} alignItems={'center'}>
              <PeopleIcon />
              <Typography sx={{ fontSize: 13 }}>
                {memberCount}/{clubMaxMemberNo}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

ClubThumbnail.propTypes = {
  club: PropTypes.object.isRequired,
};

export default ClubThumbnail;
