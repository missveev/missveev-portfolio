const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const blockContainerStyles = {
        display: 'inline-block',
        '& > div': {
            display: 'inline-block',
            verticalAlign: 'middle'
        }
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
    }

    const nameLabelStyles = {
        padding: 5,
        textAlign: 'left',
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div style={blockContainerStyles}>
            <div>React
        <div style={containerStyles}>
            React
            <p style={fillerStyles}>
                {/*<span style={nameLabelStyles}>React</span>*/}
                <span style={labelStyles}>{`${completed}%`}</span>
            </p>
        </div>
            </div>
        </div>
    );
};

export default ProgressBar;