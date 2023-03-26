import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
import React from 'react'

export const LoadingSkeleton = () => {
  return (
    <div>
        <Stack>
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='60px' />
</Stack>
<Stack flexDirection="row">
<SkeletonCircle size='10' />
<SkeletonText  noOfLines={2} spacing='4' skeletonHeight='2' />
</Stack>
    </div>
  )
}
