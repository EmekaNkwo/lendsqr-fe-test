import React from 'react'
import "./userSection.scss"

interface IProps {
    icon: string
    title: string
    value: string
}
const Widgets = ({ icon, title, value }: IProps) => {
    return (
        <div className='widget'>
            <div className="widget_icon">
                <img src={icon} alt="" />
                {/* {icon} */}
            </div>
            <span className='widget_title'>{title}</span>
            <span className='widget_value'>{value}</span>
        </div>
    )
}

const MemoizedWidgets = React?.memo(Widgets);

export default MemoizedWidgets;