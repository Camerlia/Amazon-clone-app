import { footerBottomItem } from "../context/context"


const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto'>
        <div className='w-full grid grid-cols-7 gap-3 place-content-center text-gray-400'>
          {
            footerBottomItem.map((item)=>(
              <div key={item._id}>
                <h3 className=' w-24 text-[12px] group-hover:underline leading-3 mb-[2px] font-semibold text-white'>{item.title}</h3>
                <p className="text-sm w-24 tracking-tight group-hover:underline leading-3">{item.des}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default FooterBottom
