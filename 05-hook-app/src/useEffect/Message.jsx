import { useEffect } from 'react'

const Message = () => {

    useEffect(() => {
      console.log('Message mounted');
    
      return () => {
        console.log('Message unmounted');
      }
    }, []);
    

  return (
    <div>Message</div>
  )
}

export default Message