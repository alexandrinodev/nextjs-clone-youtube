import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const useStyle = makeStyles(() => ({
  img: {
    width: '100%',
  },
  caption: {
    fontWeight: 500,
    /* Quando texto for maior que 2 linhas vai colocar ... */
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

function VideoCard({ item }) {
  const classes = useStyle();

  return (
    <Box>
      <img alt={item.title} src={item.thumb} className={classes.img} />
      <Box display="flex" mt="1">
        <Box mr={2}>
          <Avatar alt={item.authorName} src={item.authorName}>
            SS
          </Avatar>
        </Box>
        <Box>
          <Typography
            className={classes.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>

          <Typography diplay="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>

          <Typography>
            {`${item.views} - ${dayjs(item.updateAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoCard;
