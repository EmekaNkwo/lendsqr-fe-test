import MemoizedWidgets from './Widgets'
import { IWidget } from '../../shared/types'
import MemoizedUserTable from './UserTable'
import { widgetData } from '../../data'

const UserSection = () => {
    return (
        <div className='user_section'>
            <h3>Users</h3>
            <div className="widget_container">
                {
                    widgetData?.map((data: IWidget) => <MemoizedWidgets key={data?.id} icon={data?.icon} title={data?.title} value={data?.value} />)
                }
            </div>
            <div className="user_table_section">
                <MemoizedUserTable />
            </div>

        </div>
    )
}

export default UserSection