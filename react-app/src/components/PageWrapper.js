export default function PageWrapper({ isLoading, Loader, children }) {
  return (
    <>
      {isLoading ? (
        <div
          className="bg-indigo"
          style={{
            width: '100vw',
            height: '100vh',
            zIndex: 200,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
          }}
        >
          <div className="spinner-border text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <div
            className={'bg-danger d-none '}
            style={{
              width: '100vw',
              height: '100%',
              zIndex: 200,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'flex',
              flexDirection: 'column',
              opacity: '0.95',
              scroll: 'no',
              overflow: 'hidden',
            }}
          ></div>
          {children}
        </>
      )}
    </>
  )
}
