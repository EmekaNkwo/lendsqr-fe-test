import { FilterImg } from '../../assets/Images';
import { Popover } from 'antd';
import { SelectField, TextField } from '../../shared/UIs/InputField';
import { FilledButton, OutlinedButton } from '../../shared/UIs/Buttons';

const FilteredImage = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} className='filter_icon' />
);
const TableHeader = ({ label }: { label: string }) => {
    const content = (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '270px', padding: '10px 2px' }}>
            <SelectField label='Organization' options={[{ value: 'Organization', label: 'Organization' }]} />
            <TextField label='Username' withBorder placeholder='Username' isSmall />
            <TextField label='Email' withBorder isSmall placeholder='Email' />
            <TextField type='date' label='Date' withBorder isSmall placeholder='Date' />
            <TextField label='Phone Number' withBorder isSmall placeholder='Phone Number' />
            <SelectField label='Status' options={[{ value: 'Status', label: 'Status' }]} />
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <OutlinedButton title='Reset' />
                <FilledButton title='Filter' style={{
                    backgroundColor: '#39cdcc',
                    color: '#fff',
                }} />
            </div>
        </div>
    );
    return (
        <th>
            <Popover content={content} arrow={false} placement="bottomLeft" >
                <span>{label}
                    <FilteredImage src={FilterImg} alt="filter_img" />
                </span>
            </Popover>
        </th>
    )
}

export default TableHeader