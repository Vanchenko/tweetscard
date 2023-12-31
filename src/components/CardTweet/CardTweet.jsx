import { WrapperCard, WrapperText, Text, 
    BackCardImage, LogoImage, EllipseImage, RectImage, 
    AvatarImage, Button } from './CardTweet.styled';
import { updateFollowers } from 'api/api';
import backimage from './picture2 1.png';
import logoimage from './Logo.png';
import ellipseimage from './Ellipse.png';
import rectimage from './Rectangle.png';
import { useState } from "react";

export const CardTweet = ({id, tweets, followers, status, avatar}) => {
 const [follower, setFollower] = useState(Number(followers));
 const [isFollow, setIsFollow] = useState(status);

const handleOnFollow = (evt) => {
      if (isFollow) {
        setIsFollow(false);
        setFollower(follower - 1);
        updateFollowers(id, follower - 1, false);
        return;
      }
      setFollower(follower + 1);
      setIsFollow(true);
      updateFollowers(id, follower + 1, true);
    };
    return(
        <WrapperCard>
            <LogoImage src={logoimage} alt="" />
            <BackCardImage src={backimage} alt="" />
            <AvatarImage src={avatar} alt="" />
            <EllipseImage src={ellipseimage} alt="" />
            <RectImage src={rectimage} alt="" />
            <WrapperText>
                <Text>{tweets} TWEETS</Text>
                <Text>{follower.toLocaleString('es-US')} FOLLOWERS</Text>
            </WrapperText>
            <Button onClick={handleOnFollow} isFollow={isFollow}>
          {isFollow ? "FOLLOWING" : "FOLLOW"}
        </Button>
        </WrapperCard>
    )
}