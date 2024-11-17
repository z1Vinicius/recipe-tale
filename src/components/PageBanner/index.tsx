import FoodPlate from './../../assets/foodPlate.png'
import HeaderButton from '../HeaderButton';

function PageBanner(){
  return (
    <div className="flex flex-row items-center justify-evenly bgf p-10">
      <div className="flex flex-col gap-5 ">
        <div className='flex flex-col gap-2 text-5xl font-bold'>
          <span>You Daily Dish</span>
          <span>A <span className='text-red-400'>Food</span> Journey</span>
        </div>
        <span className='text-gray-400 font-medium w-64'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum explicabo atque sit ratione minus nam quia nisi! Pariatur temporibus, beatae incidunt numquam adipisci molestias. 
        </span>
        <div>
            <HeaderButton text="Sign up" primary={true}/>
            <span className='text-gray-500 mt-2'>Do you have a account? <span className='font-medium'>Log in</span></span>
        </div>
      </div>
      <div>
        <img src={FoodPlate} alt="Food Plate with atum, tomatos and vegetables. " className='w-96'/>
      </div>
    </div>
  )
}

export default PageBanner;