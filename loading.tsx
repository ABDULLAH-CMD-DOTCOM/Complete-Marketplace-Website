import { LoaderPinwheel } from 'lucide-react';

const loading = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <LoaderPinwheel className='animate-spin' size={150} color='rgba(0, 136, 202, 0.75)' />
    </div>
  );
};

export default loading;