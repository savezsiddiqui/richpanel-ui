import ChatCard from './ChatCard';

const cardStyle = {
    border: '0.1rem solid #e0e0e0',
    height: '100%',
    width: '40%',
    minWidth: '40rem',
    borderRadius: '8px',
    margin: '0 1rem',
    boxShadow: '0 0 2px #eeeeee',
    position: 'relative'
}

const inputContainerStyle = {
    position: 'absolute',
    bottom: '1rem',
    right: '1rem',
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    border: '0.2rem solid #e0e0e0',
    borderRadius: '8px',
    padding: '0 1rem'
}

const iconStyle = {
    padding: '0.5rem',
    color: '#8d8d8d'
}

const topbarStyle = {
    display: 'flex',
    flexDirection: 'row',
    padding: '0.5rem 1rem',
    boxShadow: '0 0.1rem #eeeeee',
    justifyContent: 'space-between'
}

const TopBar = () => {
    return (
        <div style={topbarStyle}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <i style={{ color: '#8d8d8d', marginTop: '5px', marginRight: '5px' }} className="far fa-user-circle"></i>
                <div>Name here</div>
            </div>
            <div>Jan 18</div>
        </div >
    )
}

const CardDetail = () => {
    return (
        <div style={cardStyle}>
            <TopBar />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <ChatCard name={'Savez'} body={'hello there '} />
            </div>
            <i style={{ color: '#8d8d8d', position: 'absolute', bottom: '3rem', left: '5rem' }} className="far fa-user-circle"></i>
            <div style={inputContainerStyle}>
                <input
                    id='reply-button'
                    type='text'
                    placeholder='Reply...'
                />
                <i style={iconStyle} className="fas fa-paperclip"></i>
            </div>
        </div>
    )
}

export default CardDetail
