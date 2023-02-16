import { Typography } from '@mui/material';
import React, { useMemo, useState } from 'react'

export const ShowMoreDate = ({ helpText }) => {
  const [showMore, setShowMore] = useState(false);

  const d = useMemo(() => {
    return helpText.slice(0, 15).concat('...');
  }, [helpText]);

  return (
      <Typography sx={{m:1}}
       onClick={() => { setShowMore(!showMore) }}
       >
        {showMore ? helpText : d} {showMore ? 'less' : 'More'}
      </Typography>
  )
}
