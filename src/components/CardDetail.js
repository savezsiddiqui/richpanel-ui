import React from 'react'

const cardStyle = {
    border: '0.1rem solid #e0e0e0',
    height: '100%',
    width: '40%',
    minWidth: '40rem',
    borderRadius: '8px',
    padding: '1rem',
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
    borderRadius: '8px'
}

const iconStyle = {
    padding: '5px',
    color: 'gray'
}

const CardDetail = () => {
    return (
        <div style={cardStyle}>
            <div>
                data will be displayed here
            </div>
            <div style={inputContainerStyle}>
                <input
                    id='reply-button'
                    type='text'
                    placeholder='Reply'
                />
                <i style={iconStyle} className="fas fa-paperclip"></i>
            </div>
        </div>
    )
}

export default CardDetail
