import { footLinks  } from '../constants/index';

const Footer = () => {
    
    let year = new Date().getFullYear();

  return (
    <div className='relative w-full flex-wrap bg-primary py-10 px-8  '>
        <div className='flex md:flex-nowrap  flex-wrap justify-between xs:w-full w-full'>
            {footLinks.map((linkArr) => (
                <ul key={linkArr[0].id} className='text-secondary mb-6 mr-4'  >
                    {linkArr.map((links) => (
                        <li key={links.id} className={`${links.id === linkArr[0].id ? 'underline font-semibold' : 'font-light text-xs' } mb-2`}>
                            <a className='hover:underline transition-all ease-in-out ' href={links.href}>{links.id}</a>
                        </li>
                    ))}
                </ul>
            ))}
        </div>

        <div>
            <small className='text-white text-[11px] flex justify-center mt-8'>🌐 United States (USA) | English (US) | $(USD)/Euro | Copyright © {year} GrandHermes</small>
        </div>
    </div>
  )
}

export default Footer
