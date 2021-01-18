import React from 'react'

const topbarStyle = {
    display: 'flex',
    flexDirection: 'row',
    color: '#757575',
    marginTop: '3rem'
}

const conversationStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#212121'
}

const SecondRow = () => {
    return (
        <div style={topbarStyle}>
            <div style={conversationStyle}>Conversations</div>
            <div>
                <input
                    type='text'
                    placeholder='Quick Search'
                    id='searchbox'
                />
            </div>
            <div>
                <button id='filter-button'>Filter</button>
            </div>
        </div>
    )
}

export default SecondRow
