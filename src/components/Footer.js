import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer_class'>
                {this.props.dataList.profiles.map((data) => <a key={data.key} href={data.link} target='_blank'>
                    <p className='footer_link_class'>{data.text}</p>
                </a>)}
            </div >
        );
    }
}

export default Footer;