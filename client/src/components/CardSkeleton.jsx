import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
 const CardSkeleton = ()=>{
    return(
        <div className='h-77 w-50 md:h-110 md:w-70 border border-gray-500 rounded-lg hover:opacity-90 '>
            <SkeletonTheme baseColor="#dcdcdc" highlightColor="#f5f5f5">
                <div className='flex flex-col w-full'>
                <div className='h-55 md:h-75 md:p-2 p-3'>
                     <Skeleton height='100%' />    
                </div>
           
                    <div className='px-6 py-1 md:py-3'>
                        <Skeleton width='70%' count={3} />    
                    </div>
                    </div>
                        
                          
                

               
               </SkeletonTheme>
        </div>
    )
 }
 export default CardSkeleton