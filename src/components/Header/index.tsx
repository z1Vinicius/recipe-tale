import PageLogo from './../../assets/logo.png'
import MenuItem from '../MenuItem';
import HeaderButton from '../HeaderButton';
import PageHeaderShape from '../PageHeaderShape';

function PageHeader(){
  return (
    <nav className='flex w-full items-center p-4 gap-20'>
      < PageHeaderShape/>
      <div>
        <img src={PageLogo} className='min-w-24 w-24 ' alt="" />
      </div>
      <div className='flex flex-row w-full justify-between items-center gap-10'>
        
        <nav className='flex flex-row  items-center gap-5'>
          <MenuItem text='Home' link='/'/>
          <MenuItem text='Recipe' link='/'/>
          <MenuItem text='Add Recipe' link='/'/>
          <MenuItem text='Blog' link='/'/>
          <MenuItem text='About Us' link='/'/>
        </nav>
        
        <nav className='flex flex-row  items-center gap-3'>
          <HeaderButton text='Log in' primary={false}/>
          <HeaderButton text='Sign up' primary={true}/>
        </nav>
      </div>
    </nav>
  )
}

export default PageHeader;