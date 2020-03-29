import { toast } from 'react-toastify'

export const sendToast = (type, title, message) => {
  const warningOptions = {
    bodyClassName: 'text-gray-700'
  }

  switch (type) {
    case 'default':
      return toast(<ToastEl type={type} title={title} message={message} />)
    case 'success':
      return toast.success(<ToastEl type={type} title={title} message={message} />)
    case 'info':
      return toast.info(<ToastEl type={type} title={title} message={message} />)
    case 'warning':
      return toast.warning(<ToastEl type={type} title={title} message={message} />, warningOptions)
    case 'error':
      return toast.error(<ToastEl type={type} title={title} message={message} />)
  }
}

const ToastEl = ({ type, title, message }) => (
  <div className='flex'>
    <div className='py-1'>
      {type === 'default' && (
        <svg className='fill-current h-6 w-6 text-teal-500 mr-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
          <path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z' />
        </svg>
      )}
      {type === 'success' && (
        <svg className='fill-current h-6 w-6 mr-4' viewBox='0 0 24 24'>
          <path d='M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z' />
        </svg>
      )}
      {type === 'info' && (
        <svg className='fill-current h-6 w-6 mr-4' viewBox='0 0 24 24'>
          <path d='M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z' />
        </svg>
      )}
      {type === 'warning' && (
        <svg className='fill-current h-6 w-6 mr-4' viewBox='0 0 24 24'>
          <path d='M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z' />
        </svg>
      )}
      {type === 'error' && (
        <svg className='fill-current h-6 w-6 mr-4' viewBox='0 0 24 24'>
          <path d='M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z' />
        </svg>
      )}
    </div>
    <div
      className={
        'py-1 ' +
        (type === 'default'
          ? 'text-gray-700'
          : 'success'
            ? ''
            : 'info'
              ? ''
              : 'warning'
                ? 'text-black'
                : 'error'
                  ? ''
                  : null)
      }
    >
      <p className='font-bold'>{title}</p>
      <p className='text-sm'>{message}</p>
    </div>
  </div>
)
