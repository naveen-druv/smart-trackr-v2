import React from 'react';
import styled from 'styled-components';

interface AvatarProps {
  photo?: string; // base64 or initials
  size?: number;
  onClick?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  photo,
  size = 50,
  onClick,
}) => {
  const isImage =
    photo && (photo.startsWith('data:image') || photo.startsWith('http'));

  return (
    <AvatarWrapper size={size} onClick={onClick}>
      {isImage ? (
        <img src={photo} alt='avatar' />
      ) : (
        <Initials>{photo || 'U'}</Initials>
      )}
    </AvatarWrapper>
  );
};

const AvatarWrapper = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background-color: #999;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: ${({ size }) => size / 2}px;
  color: #fff;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Initials = styled.span``;
