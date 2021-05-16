import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer_class'>
                {this.props.dataList.profiles.map((data,i) => <a key={i} href={data.link} target='_blank' rel="noopener noreferrer">
                    <p className='footer_link_class'>{data.text}</p>
                </a>)}
            </div >
        );
    }
}

export default Footer;